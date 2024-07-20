var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { HouseModel } from "../models/houseModel";
import { User } from "../models/User";
export const getHouses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel.find();
        res.status(200).send(houses);
    }
    catch (error) {
        res.status(500).json({ message: "Något gick fel" });
    }
});
export const getHouseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const house = yield HouseModel.findById(req.params.id);
    if (house) {
        res.status(200).send(house);
    }
    res.status(400).json({ success: false, message: "House Not found" });
});
export const createHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { houseType, yearBuilt, squareMeters, price, rooms, wifi, water, toilets, address, location, parking, busConnection, category, user, } = req.body;
        const ownerUser = yield User.findById(req.body.user);
        const newHouse = new HouseModel({
            houseType,
            yearBuilt,
            squareMeters,
            price,
            rooms,
            wifi,
            water,
            toilets,
            address,
            location,
            parking,
            busConnection,
            category,
            user,
        });
        yield newHouse.save();
        console.log("The new House is here ", newHouse);
        res.status(201).json({ message: "One House has been created" });
    }
    catch (error) {
        console.error("Error creating category");
        res.status(500).json({ error: "Internal server error" });
    }
});
export const updateHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const house = yield HouseModel.findByIdAndUpdate(req.params.id, req.body);
        if (!house)
            throw Error("House Not found");
        res.status(200).send();
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
});
export const deleteHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const house = yield HouseModel.findByIdAndDelete(req.params.id);
        if (!house)
            throw Error("No House found");
        res.status(200).send("Deleted");
    }
    catch (error) {
        res.json({ msg: error });
    }
});
// extra functions
export const getHousesWithPagination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentPage = parseInt(req.query.page) || 1; // Aktuell sida (default: 1)
        const pageSize = 10; // Antal objekt per sida
        const houses = yield HouseModel.find();
        const offset = (currentPage - 1) * pageSize;
        const paginatedHouses = houses.slice(offset, offset + pageSize);
        res.status(200).json(paginatedHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med paginated houses" });
    }
});
export const searchHousesByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        const housesSearchedByNames = yield HouseModel.find({ name });
        if (!housesSearchedByNames)
            throw new Error("Name finns inte");
        res.status(200).json(housesSearchedByNames);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});
//high price
export const searchHousesByHighPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel.find();
        const highPriceHouses = houses.filter((house) => house.price >= 200);
        console.log("Low prices: ", highPriceHouses);
        res.status(200).json(highPriceHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med high Price på houses" });
    }
});
//search by low price
export const searchHousesByLowPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houses = yield HouseModel.find();
        const lowPriceHouses = houses.filter((house) => house.price < 200);
        console.log("Low prices: ", lowPriceHouses);
        res.status(200).json(lowPriceHouses);
    }
    catch (e) {
        res.status(500).json({ message: "Fel med low price" });
    }
});
