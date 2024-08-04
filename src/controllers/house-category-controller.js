import {HouseCategory} from "../models/house-category.js";




export const createHouseCategory = async (req, res) => {
    try {
        const {name, description,isActive} = req.body;
        const houseCategory = new HouseCategory({name, description, isActive});
        await houseCategory.save();
        return res.status(201).json({message:"House Category created"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getHouseCategories = async (req, res) => {
    try{
        const houseCategories = await HouseCategory.find();
        if(!houseCategories){
            return res.status(404).json({message: 'No House Categories'});
        }
        res.status(200).json(houseCategories);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error "});
    }
}



export const getHouseCategoriesById = async (req, res) => {
    try {
        const {categoryId} = req.params;
        const houseCategory = await HouseCategory.findById(categoryId);
        if (!houseCategory) {
            return res.status(404).json({message: 'No House Category'});
        }
        res.status(200).json(houseCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }

}


    export const updateHouseCategory  = async (req, res) => {

        try {
            const {categoryId} = req.params;
            const updateCategory = await HouseCategory.findByIdAndUpdate(
                categoryId,
                req.body,
            )
            if(!updateCategory){
                return res.status(404).json({message: 'No House Category'});
            }
            res.status(200).json({message: 'House Category Updated Successfully'});
        }

        catch(error){
            console.error(error);
            res.status(500).json({message: "Internal Server Error"});
        }
    }



    export const deleteHouseCategory = async (req, res) => {
        try{
           const {categoryId} = req.params;
           const houseCategory = await HouseCategory.findByIdAndDelete(categoryId)
            if (!houseCategory){
                return res.status(404).json({message: 'No House Category'});
            }
            res.status(200).json({message: 'House Category Deleted Successfully'});
        }

        catch (e) {
            console.log(e)
            res.status(500).json({message: "Internal Server Error"});
        }

}