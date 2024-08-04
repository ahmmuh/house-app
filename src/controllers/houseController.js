import {HouseModel} from "../models/houseModel.js";
import { Buffer } from 'buffer';
import {HouseCategory} from "../models/house-category.js"; // Importera Buffer från Node.js

export const getHouses = async (req, res) => {
    try {
        const houses = await HouseModel.find();
        res.status(200).json(houses); // Skickar tillbaka listan med hus i JSON-format
    } catch (error) {
        res.status(500).json({ message: "Failed to load resource: the server responded with a status of 500 (Internal Server Erro" });
    }
};


export const getHouseById = async (req, res) => {
    try {
        const house = await HouseModel.findById(req.params.id);

        if (house) {
            res.status(200).send(house);
        } else {
            res.status(400).json({ success: false, message: "House Not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};



export const addHouse = async (req, res) => {
    console.log(req.body)
}

export const createHouse = async (req, res) => {

    try {
        const category = req.params.category
        console.log("CategoryID params", category)
        const newCategory = await HouseCategory.findById(category)
        if(!newCategory){
            return res.status(404).json({message: 'No House Category, choose category !!!'});
        }
        if (!req.body.images || req.body.images.length === 0) {
            return res.status(400).json({ success: false, message: "Files are required" });
        }

        const images = req.body.images.map((image) => {
            if (typeof image.base64 !== 'string') {
                throw new Error('Invalid base64 string');
            }
            return {
                type: Buffer.from(image.base64.split(",")[1], 'base64'),
                contentType: image.type
            };
        });


        const {
            houseType,
            houseTransactions,
            description,
            bathrooms,
            yearBuilt,
            squareMeters,
            houseWidth,
            houseHeight,
            price,
            rooms,
            houseWifi,
            houseWater,
            toilets,
            houseParking,
           // category

            // user,
        } = req.body;

        // const ownerUser = await User.findById(req.body.user);

        const newHouse = new HouseModel({
            houseType,
            houseTransactions,
            description,
            bathrooms,
            yearBuilt,
            houseHeight,
            houseWidth,
            squareMeters,
            price,
            rooms,
            houseWifi,
            houseWater,
            toilets,
            houseParking,
         /*   thumbnail: {
                data: req.file.buffer,
                type: req.file.mimetype
            },*/
          //  category,
            images,
            //location,
            // user,
        });
        await newHouse.save();
        console.log(newHouse)
        res.status(201).json({ message: "One House has been created" });
    } catch (error) {
        res.status(500).json({ error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran", msg: error.message });
    }
};

export const updateHouse = async (req, res) => {
    try {
        const house = await HouseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!house) throw new Error("House Not found");
        res.status(200).json(house); // Returnerar det uppdaterade huset
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


export const deleteHouse = async (req, res) => {
    try {
        const house = await HouseModel.findByIdAndDelete(req.params.id);
        if (!house) throw new Error("No House found");
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


// extra functions

//getHouseTypes måste rättas
export const getHouseEnumTypeValues = async (req, res) => {
   try{
       const {enumType} = req.params
       const houseTypesEnumValuse = await HouseModel.schema.path(enumType).enumValues;

       if (!enumType) {
          return res.status(404).json({success: false, message: `No enumType found for ${enumType}`});
       }
       res.status(200).json(houseTypesEnumValuse);

   }
    catch(err){
       console.error(err);
       res.status(500).json({ success: false, message: `${err.message}` });
    }
};





export const getCity = async (req, res) => {
    try{
        const districts = await HouseModel.find();
        const singleDistrict = Array.from(districts).filter(district => district.district === "Siinaay")
        res.status(200).send(singleDistrict);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: "District not found"})
    }
}




export const getHousesWithPagination = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Antal objekt per sida (default: 10)

        const totalHouses = await HouseModel.countDocuments(); // Totalt antal hus
        const totalPages = Math.ceil(totalHouses / pageSize); // Totalt antal sidor

        const houses = await HouseModel.find()
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({
            houses,
            currentPage,
            totalPages,
            pageSize,
            totalHouses
        });
    } catch (e) {
        res.status(500).json({ message: "Fel med paginated houses" });
    }
};


//high price
export const searchHousesByHighPrice = async (req, res) => {
    try {
        const highPriceHouses = await HouseModel.find({ price: { $gte: 200 } });
        console.log("High prices: ", highPriceHouses);
        res.status(200).json(highPriceHouses);
    } catch (e) {
        res.status(500).json({ message: "Fel med high Price på houses" });
    }
};


//search by low price
export const searchHousesByLowPrice = async (req, res) => {
    try {
        const lowPriceHouses = await HouseModel.find({ price: { $lte: 200 } });
        console.log("Low prices by Ahmed: ", lowPriceHouses);
        res.status(200).json(lowPriceHouses);
    } catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }

};


export const countAllHouses = async (req, res) => {
    try {
        const countedHouses = await HouseModel.findOne().countDocuments();
        res.status(200).json({TotalHouses: countedHouses})
    } catch (err) {
        res.status(500).json({message: "Internal server error"});
    }
}


//fetch cities with villages
export const getCities = async (req,res) =>{
    try{
        const {enumType} = req.params
        const houseTypesEnumValuse = await HouseModel.schema.path(enumType).enumValues;

        if (!enumType) {
            return res.status(404).json({success: false, message: `No enumType found for ${enumType}`});
        }
        res.status(200).json(houseTypesEnumValuse);

    }
    catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: `${err.message}` });
    }
}