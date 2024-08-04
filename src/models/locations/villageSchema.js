/*
import mongoose from "mongoose";
import {neighborhoodSchema} from "./neighborhoodSchema.js";

const villageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: [
            // Muqdisho
            'Afgooye', 'Jowhar', 'Balcad',
            // Hargeysa
            'Arabsiyo', 'Gabiley', 'Berbera',
            // Boosaaso
            'Qardho', 'Carmo', 'Iskushuban',
            // Kismaayo
            'Afmadow', 'Dhobley', 'Badhaadhe',
            // Baydhabo
            'Buurhakaba', 'Diinsoor', 'Qansax Dheere',
            // Garoowe
            'Burtinle', 'Eyl', 'Dangorayo',
            // Beledweyne
            'Buuloburde', 'Jalalaqsi', 'Matabaan',
            // Gaalkacyo
            'Hobyo', 'Xarardheere', 'Galdogob',
            // Jowhar
            'Balcad', 'Mahadaay', 'Warsheekh',
            // Baraawe
            'Marka', 'Qoryooley', 'Kurtunwarey'
        ],
    },
    neighborhoods: [neighborhoodSchema]
})

const neighborhoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: [
            // Afgooye
            'Buulo Mareer', 'Lafoole', 'Ceelasha Biyaha',
            // Jowhar
            'Buurane', 'Qalimow', 'Warshiikh',
            // Balcad
            'Gololey', 'Garas Balley', 'Ceel Macaan',
            // Arabsiyo
            'Dacar Budhuq', 'Toon', 'Qool Cadey',
            // Gabiley
            'Agabar', 'Wajaale', 'Allaybaday',
            // Berbera
            'Sheekh', 'Karin', 'Biyo Guure',
            // Qardho
            'Waaciye', 'Ufeyn', 'Xingalool',
            // Carmo
            'Bender Qassim', 'Laasqoray', 'Qandala',
            // Iskushuban
            'Baargaal', 'Caluula', 'Murcanyo',
            // Afmadow
            'Hosingow', 'Bilis Qooqaani', 'Taabta',
            // Dhobley
            'Kulbiyow', 'Dhoobley', 'Tabta',
            // Badhaadhe
            'Ras Kamboni', 'Kudhaa', 'Bula Xaaji',
            // Buurhakaba
            'Goofgaduud', 'Daynuunay', 'Deyr',
            // Diinsoor
            'Ufurow', 'Waajid', 'Yeed',
            // Qansax Dheere
            'Berdaale', 'Tiyeglow', 'Rabdhuure',
            // Burtinle
            'Garowe', 'Galdogob', 'Bursaalax',
            // Eyl
            'Jariiban', 'Godobjiraan', 'Gumburka Cagaare',
            // Dangorayo
            'Qardho', 'Ufeyn', 'Waaciye',
            // Buuloburde
            'Halgan', 'Moqokori', 'Ceel Cali',
            // Jalalaqsi
            'Buq Aqable', 'Ceelbaraf', 'Ceel Gaal',
            // Matabaan
            'Mahaas', 'Ceel Dheere', 'Ceel Lahelay',
            // Hobyo
            'Wisil', 'Bacaadweyn', 'Ceelhuur',
            // Xarardheere
            'Ceeldibir', 'Ceelgula', 'Ceelgula',
            // Galdogob
            'Bursaalax', 'Godinlabe', 'Galinsoor',
            // Balcad
            'Gololey', 'Garas Balley', 'Ceel Macaan',
            // Mahadaay
            'Ceelbaraf', 'Qalimow', 'Buurane',
            // Warsheekh
            'Adale', 'Cadale', 'Ceelbaraf',
            // Marka
            'Shalambood', 'Jilib Marka', 'Ceel Jaale',
            // Qoryooley
            'Sablale', 'Mubaarak', 'Janaale',
            // Kurtunwarey
            'Buulo Mareer', 'Golweyn', 'Dhanaane'
        ],

    }
});

export {villageSchema}

export const Village = mongoose.model("Village", villageSchema);*/
