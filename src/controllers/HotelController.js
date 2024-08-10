import {Category} from "../models/Category.js";
import mongoose from "mongoose";
import {HotelModel} from "../models/hotelModel.js"; // Importera Buffer från Node.js

export const getHotelRooms = async (req, res) => {
    try {
        const rooms = await HotelModel.find();
        res.status(200).json(rooms); // Skickar tillbaka listan med hus i JSON-format
    } catch (error) {
        res.status(500).json({ message: "Failed to load resource: the server responded with a status of 500 (Internal Server Erro" });
    }
};


export const getHotelRoomById = async (req, res) => {
    try {
        const room = await HotelModel.findById(req.params.id);

        if (room) {
            res.status(200).send(room);
        } else {
            res.status(400).json({ success: false, message: "Room Not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};




export const createHotelRoom = async (req, res) => {

    try {
        const {
            roomType, price,
            description,
            hotelRoomWidth,
            hotelRoomHeight,
            squareMeters, privateToilet,
            available,
            fromStartDate, toStartDate,
            children,
            adults, hotelRoomWifi,
            hotelRoomParking,
            airportShuttle,
            restaurant,
            isNonSmokingRoom,
            roomService, frontDesk24hr,
            breakfast, category
        } = req.body;

        const categoryId = req.params.categoryId;
        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: 'Invalid Category ID' });
        }

        const selectedCategory = await Category.findById(categoryId);
        if (!selectedCategory) {
            return res.status(404).json({ message: 'No selectedCategory found' });
        }
        console.log("selectedCategory",selectedCategory)

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
        const newHotelRoom = new HotelModel({
            roomType, price, description,
            hotelRoomWidth, hotelRoomHeight,
            squareMeters, privateToilet, available,
            fromStartDate, toStartDate,
            children,
            adults,
            hotelRoomWifi,
            images,
            hotelRoomParking,
            airportShuttle,
            restaurant,
            isNonSmokingRoom,
            roomService, frontDesk24hr,
            breakfast, category

        });
        console.log("New hotel room object with Category ID", newHotelRoom)
        // await newHotelRoom.save();
        res.status(201).json({ message: "One Hotel has been created" });
    } catch (error) {
        res.status(500).json({ error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran", msg: error.message });
    }
};

export const updateHotelRoom = async (req, res) => {
    try {

        const room = await HotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!room) throw new Error("Hotel room Not found");
        res.status(200).json(room); // Returnerar det uppdaterade huset
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


export const deleteHotelRoom = async (req, res) => {
    try {
        const room = await HotelModel.findByIdAndDelete(req.params.id);
        if (!room) throw new Error("No Hotel Room found");
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
// extra functions

export const getHotelRoomWithPagination = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Antal objekt per sida (default: 10)

        const totalHotelRooms = await HotelModel.countDocuments(); // Totalt antal hus
        const totalPages = Math.ceil(totalHotelRooms / pageSize); // Totalt antal sidor

        const rooms = await HotelModel.find()
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({
            rooms,
            currentPage,
            totalPages,
            pageSize,
            totalHotelRooms
        });
    } catch (e) {
        res.status(500).json({ message: "Fel med paginated hotel rooms" });
    }
};


//high price
export const searchHotelRoomsByHighPrice = async (req, res) => {
    try {
        const highPriceHotelRooms = await HotelModel.find({ price: { $gte: 200 } });
        console.log("High prices: ", highPriceHotelRooms);
        res.status(200).json(highPriceHotelRooms);
    } catch (e) {
        res.status(500).json({ message: "Fel med high Price på hotel rooms" });
    }
};


//search by low price
export const searchHotelRoomsByLowPrice = async (req, res) => {
    try {
        const lowPriceHotelRooms = await HotelModel.find({ price: { $lte: 200 } });
        console.log("Low prices by Ahmed: ", lowPriceHotelRooms);
        res.status(200).json(lowPriceHotelRooms);
    } catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }

};


export const countAllHotelRooms = async (req, res) => {
    try {
        const countedHotelRooms = await HotelModel.findOne().countDocuments();
        res.status(200).json({TotalHotelRooms: countedHotelRooms})
    } catch (err) {
        res.status(500).json({message: "Internal server error"});
    }
}






//getHouseTypes måste rättas
/*export const getHouseEnumTypeValues = async (req, res) => {
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
};*/





/*
export const getCity = async (req, res) => {
    try{
        const districts = await HotelModel.find();
        const singleDistrict = Array.from(districts).filter(district => district.district === "Siinaay")
        res.status(200).send(singleDistrict);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({message: "District not found"})
    }
}
*/

//fetch cities with villages
/*
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
}*/
