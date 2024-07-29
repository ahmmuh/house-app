
import {HouseModel} from "../models/houseModel.js";


export const getHouses = async (req, res) => {
    try {
        const houses = await HouseModel.find();
        res.status(200).json(houses); // Skickar tillbaka listan med hus i JSON-format
    } catch (error) {
        res.status(500).json({ message: "Failed to load resource: the server responded with a status of 500 (Internal Server Erro Ayuub" });
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


export const createHouse = async (req, res) => {
    try {

        const {
            houseType,
            city,
            district,
            description,
            bathrooms,
            thumbnail,
            yearBuilt,
            squareMeters,
            price,
            rooms,
            wifi,
            water,
            toilets,
            images,
            location,
            parking,
            houseTransactions,
            // user,
        } = req.body;


        // const ownerUser = await User.findById(req.body.user);

        const newHouse = new HouseModel({
            houseType,
            city,
            district,
            description,
            bathrooms,
            thumbnail,
            yearBuilt,
            squareMeters,
            price,
            rooms,
            wifi,
            water,
            toilets,
            images,
            location,
            parking,
            houseTransactions,
            // user,
        });
        await newHouse.save();
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

export const getHouseList = (req, res) => {
    try {
        res.send("Ahmed");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
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
