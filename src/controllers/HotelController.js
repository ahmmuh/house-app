import {Category} from "../models/Category.js";
import mongoose from "mongoose";
import {HotelModel} from "../models/hotelModel.js";
import {convertImageToBase64} from "../utils/convertImageTobase64.js"; // Importera Buffer från Node.js

export const getHotels = async (req, res) => {
    try {
        const rooms = await HotelModel.find();
        res.status(200).json(rooms); // Skickar tillbaka listan med hus i JSON-format
    } catch (error) {
        res.status(500).json({ message: "Failed to load resource: the server responded with a status of 500 (Internal Server Erro" });
    }
};


export const getHotelById = async (req, res) => {
    try {
        const room = await HotelModel.findById(req.params.id);

        if (room) {
            res.status(200).send(room);
        } else {
            res.status(400).json({ success: false, message: "hotel Not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};




export const createHotel = async (req, res) => {

    try {
        const {
            hotelName,
            isSingelRoom,
            price,
            description,
            hotelRoomWidth,
            hotelRoomHeight,
            squareMeters,
            privateToilet, available,
            fromStartDate,
            toEndDate, hotelRoomWifi,
            hotelRoomParking,
            airportShuttle, restaurant,
            isNonSmokingRoom,
            roomService, frontDesk24hr,
            breakfast, teaCoffeeMaker,
            category
        } = req.body;

        const selectedCategory = await Category.findById(req.body.category);
        if (!selectedCategory) {
            return res.status(404).json({ message: 'No selectedCategory found' });
        }
        console.log("selectedCategory",selectedCategory)
        //convert image to base64
        const images = convertImageToBase64(req)

        const newHotel = new HotelModel({
            hotelName, isSingelRoom, price,
            description, hotelRoomWidth,
            hotelRoomHeight, squareMeters,
            privateToilet, available, fromStartDate,
            toEndDate, hotelRoomWifi, hotelRoomParking,
            airportShuttle, restaurant, isNonSmokingRoom,
            roomService, frontDesk24hr, breakfast, teaCoffeeMaker,
            images,
             category

        });
        console.log("New hotel room object with Category ID", newHotel)
       await newHotel.save();
        res.status(201).json({ message: "One Hotel has been created" });
    } catch (error) {
        res.status(500).json({ error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran", msg: error.message });
    }
};

export const updateHotel = async (req, res) => {
    try {

        const hotel = await HotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!room) throw new Error("Hotel Not found");
        res.status(200).json(hotel); // Returnerar det uppdaterade huset
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


export const deleteHotel = async (req, res) => {
    try {
        const hotel = await HotelModel.findByIdAndDelete(req.params.id);
        if (!hotel) throw new Error("No Hotel Room found");
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
// extra functions

export const getHotelWithPagination = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Antal objekt per sida (default: 10)

        const totalHotels = await HotelModel.countDocuments(); // Totalt antal hus
        const totalPages = Math.ceil(totalHotelRooms / pageSize); // Totalt antal sidor

        const rooms = await HotelModel.find()
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({
            rooms,
            currentPage,
            totalPages,
            pageSize,
            totalHotels
        });
    } catch (e) {
        res.status(500).json({ message: "Fel med paginated hotel rooms" });
    }
};


//high price
export const searchHotelsByHighPrice = async (req, res) => {
    try {
        const highPriceHotels = await HotelModel.find({ price: { $gte: 200 } });
        console.log("High prices: ", highPriceHotels);
        res.status(200).json(highPriceHotels);
    } catch (e) {
        res.status(500).json({ message: "Fel med high Price på hotel" });
    }
};


//search by low price
export const searchHotelsByLowPrice = async (req, res) => {
    try {
        const lowPriceHotels = await HotelModel.find({ price: { $lte: 200 } });
        console.log("Low prices by: ", lowPriceHotels);
        res.status(200).json(lowPriceHotels);
    } catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }

};


export const countAllHotels = async (req, res) => {
    try {
        const countedHotels = await HotelModel.findOne().countDocuments();
        res.status(200).json({TotalHotelRooms: countedHotels})
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
