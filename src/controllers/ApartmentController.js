import {Category} from "../models/Category.js";
import {ApartmentModel} from "../models/ApartmentModel.js";
import {convertImageToBase64} from "../utils/convertImageTobase64.js"; // Importera Buffer från Node.js

export const getApartments = async (req, res) => {
    try {
        const apartments = await ApartmentModel.find();
        res.status(200).json(apartments); // Skickar tillbaka listan med lägenheter i JSON-format
    } catch (error) {
        res.status(500).json({ message: "Failed to load resource: the server responded with a status of 500 (Internal Server Error)" });
    }
};

export const getApartmentById = async (req, res) => {
    try {
        const apartment = await ApartmentModel.findById(req.params.id);

        if (apartment) {
            res.status(200).send(apartment);
        } else {
            res.status(400).json({ success: false, message: "apartment Not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const createApartment = async (req, res) => {
    try {
        const {
            apartmentName, price, rooms, description,
            apartmentKitchen, apartmentWidth, apartmentHeight,
            squareMeters, available, fromStartDate, toStartDate,
            children, adults, apartmentWifi,
            apartmentWater, toilets,
            apartmentParking, category,
            nonSmokingRooms, teaCoffeeMaker,
            laundry, dailyHousekeeping,
            isEntireApartment
        } = req.body;

        const selectedCategory = await Category.findById(req.body.category);
        if (!selectedCategory) {
            return res.status(404).json({ message: 'No selectedCategory found' });
        }
        console.log("selectedCategory", selectedCategory);
        //convert image to base64
        const images = convertImageToBase64(req);

        const newApartment = new ApartmentModel({
            apartmentName, price, rooms, description,
            apartmentKitchen, apartmentWidth, apartmentHeight,
            squareMeters, available, fromStartDate, toStartDate,
            children, adults, apartmentWifi,
            apartmentWater, toilets,
            apartmentParking, category,
            nonSmokingRooms, teaCoffeeMaker,
            laundry, dailyHousekeeping,
            isEntireApartment
        });
        console.log("New apartment  object with Category ID", newApartment);
        await newApartment.save();
        res.status(201).json({ message: "One Apartment has been created" });
    } catch (error) {
        res.status(500).json({ error: "Fadlan iska hubi inaa buux buuxisay warbixin dhamestiran", msg: error.message });
    }
};

export const updateApartment = async (req, res) => {
    try {
        const apartment = await ApartmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!apartment) throw new Error("Apartment apartment Not found");
        res.status(200).json(apartment); // Returnerar det uppdaterade lägenheten
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const deleteApartment = async (req, res) => {
    try {
        const apartment = await ApartmentModel.findByIdAndDelete(req.params.id);
        if (!apartment) throw new Error("No Apartment found");
        res.status(200).send("Deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// extra functions

export const getApartmentWithPagination = async (req, res) => {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = parseInt(req.query.pageSize) || 10; // Antal objekt per sida (default: 10)

        const totalApartments = await ApartmentModel.countDocuments(); // Totalt antal lägenheter
        const totalPages = Math.ceil(totalApartments / pageSize); // Totalt antal sidor

        const apartments = await ApartmentModel.find()
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({
            apartments,
            currentPage,
            totalPages
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
