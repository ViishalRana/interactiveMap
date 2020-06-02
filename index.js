var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

var mongourl = "mongodb+srv://admin:admin@covidtracker-adcjs.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

var dataSchema = new mongoose.Schema({
    day: String,

    confirmed: String,

    active: String,

    recovered: String,

    death: String,

    state: Object
})


var countrySchema = new mongoose.Schema({
    date: String,
    data: Object
})



var country = mongoose.model('Countries', countrySchema);
country.countDocuments(function (err, count) {

    if (!err && count == 0) {
        var countryobj = new country({
            date: "23-may-2020",

            data: {
                India: {
                    name: "India",
                    data: data
                },
                Austrilia:
                {
                    name: "Austrialia",
                    data: data
                }
            }

        })
        countryobj.save();
    }
    else
        console.log(err);


});

mongoose.connection.on('connected', function () {
    console.log("Mongooose connected");

})


var data = {
    confirmed: 0,
    active: 0,
    recovered: 0,
    death: 0
}


var states = {

    sikkim: {
        name: "Sikkim",
        data: data,
        sikkim_d: {
            EastSikkim: data,
            NorthSikkim: data,
            SouthSikkim: data,
            WestSikkim: data
        }
    },

    ArunachalPradesh: {
        name: "Arunachal Pradesh",
        data: data,
        aruhachal_d: {
            Lohit: data,
            Anjaw: data,
            Changlang: data,
            EastKameng: data,
            EastSiang: data,
            Kamle: data,
            KraDaadi: data,
            KurungKumey: data,
            LepaRada: data,
            Longding: data,
            LowerDibangValley: data,
            LowerSiang: data,
            LowerSubansiri: data,
            Namsai: data,
            PakkeKessang: data,
            PapumPare: data,
            ShiYami: data,
            Siang: data,
            Tawang: data,
            Tirap: data,
            UpperDibangValley: data,
            UpperSiang: data,
            UpperSubansiri: data,
            WestKameng: data,
            WestSiang: data
        }

    },

    Nagaland: {
        name: "Nagaland",
        data: data,
        nagaland_d: {
            Dimapur: data,
            Kiphire: data,
            Kohima: data,
            Longleng: data,
            Mokokchung: data,
            Mon: data,
            Peren: data,
            Phek: data,
            Tuensang: data,
            Wokha: data,
            Zunheboto: data,
            Noklak: data
        }
    },

    Manipur:
    {
        name: "Manipur",
        data: data,
        manipur_d: {
            Bishnupur: data,
            Chandel: data,
            Churachandpur: data,
            ImphalEast: data,
            ImphalWest: data,
            Jiribam: data,
            Kakching: data,
            Kamjong: data,
            Kangpokpi: data,
            Noney: data,
            Pherzawl: data,
            Senapati: data,
            Tamenglong: data,
            Tengnoupal: data,
            Thoubal: data,
            Ukhrul: data
        }
    },

    Mizoram:
    {
        name: "Mizoram",
        data: data,
        mizoram_d: {
            Aizawl: data,
            Champhai: data,
            Hnahthial: data,
            Khawzawl: data,
            Kolasib: data,
            Lawngtlai: data,
            Lunglei: data,
            Mamit: data,
            Saiha: data,
            Saitual: data,
            Serchhip: data
        }
    },

    Tripura:
    {
        name: "Tripura",
        data: data,
        tripura_d: {
            Dhalai: data,
            Gomati: data,
            Khowai: data,
            NorthTripura: data,
            Sipahijala: data,
            SouthTripura: data,
            Unokoti: data,
            WestTripura: data

        }


    },

    Meghalaya: {
        name: "Meghalaya",
        data: data,
        meghalaya_d: {
            EastGaroHills: data,
            EastJaintiaHills: data,
            EastKhasiHills: data,
            NorthGaroHills: data,
            Ribhoi: data,
            SouthGaroHills: data,
            SouthWestGaroHills: data,
            SouthWestKhasiHills: data,
            WestGaroHills: data,
            WestJaintiaHills: data,
            WestKhasiHills: data
        }
    },


    Jharkhand:
    {
        name: "Jharkhand",

        data: data,
        jharkhand_d: {
            Ranchi: data,
            Garhwa: data,
            Hazaribagh: data,
            Palamu: data,
            Koderma: data,
            Giridih: data,
            EastSinghbhum: data,
            Bokaro: data,
            Dhanbad: data,
            Deoghar: data,
            Latehar: data,
            Gumla: data,
            Ramgarh: data,
            Simdega: data,
            Dumka: data,
            Jamtara: data,
            Lohardaga: data,
            SaraikelaKharsawan: data,
            Godda: data,
            WestSinghbhum: data,
            Chatra: data,
            Khunti: data,
            Pakur: data,
            Sahibganj: data
        }

    },

    Odisha: {
        name: "Odisha",
        data: data,
        odisha_d: {
            Angul: data,
            Balangir: data,
            Balasore: data,
            Bargarh: data,
            Bhadrak: data,
            Boudh: data,
            Cuttack: data,
            Deogarh: data,
            Dhenkanal: data,
            Gajapati: data,
            Ganjam: data,
            Jagatsinghpur: data,
            Jajpur: data,
            Jharsuguda: data,
            Kalahandi: data,
            Kandhamal: data,
            Kendrapara: data,
            Kendujhar: data,
            Khordha: data,
            Koraput: data,
            Malkangiri: data,
            Mayurbhanj: data,
            Nabarangapur: data,
            Nayagarh: data,
            Nuapada: data,
            Puri: data,
            Rayagada: data,
            Sambalpur: data,
            Subarnapur: data,
            Sundargarh: data
        }
    },

    Bihar: {
        name: "Bihar",
        data: data,
        bihar_d: {
            Patna: data,
            Munger: data,
            Rohtas: data,
            Begusarai: data,
            Madhubani: data,
            Nalanda: data,
            Khagaria: data,
            Buxar: data,
            Gopalganj: data,
            Bhagalpur: data,
            Jehanabad: data,
            Banka: data,
            Siwan: data,
            Kaimur: data,
            Nawada: data,
            Bhojpur: data,
            Katihar: data,
            Purnia: data,
            Muzaffarpur: data,
            Supaul: data,
            Aurangabad: data,
            WestChamparan: data,
            Sheikhpura: data,
            Darbhanga: data,
            Saharsa: data,
            Madhepura: data,
            EastChamparan: data,
            Arwal: data,
            Samastipur: data,
            Jamui: data,
            Vaishali: data,
            Kishanganj: data,
            Lakhisarai: data,
            Saran: data,
            Gaya: data,
            Sitamarhi: data,
            Sheohar: data,
            Araria: data
        }


    },


    Assam:
    {
        name: "Assam",

        data: data,
        assaam_d: {
            KamrupMetropolitan: data,
            Golaghat: data,
            Cachar: data,
            Kamrup: data,
            Jorhat: data,
            Goalpara: data,
            Morigaon: data,
            Nalbari: data,
            Bongaigaon: data,
            Dhubri: data,
            Karimganj: data,
            Nagaon: data,
            Biswanath: data,
            Hojai: data,
            Kokrajhar: data,
            Hailakandi: data,
            Lakhimpur: data,
            Sivasagar: data,
            Sonitpur: data,
            SouthSalmaraMankachar: data,
            Baksa: data,
            Barpeta: data,
            Charaideo: data,
            Chirang: data,
            Darrang: data,
            Dhemaji: data,
            Dibrugarh: data,
            DimaHasao: data,
            KarbiAnglong: data,
            Majuli: data,
            Tinsukia: data,
            Udalguri: data,
            WestKarbiAnglong: data
        }


    },


    westBengal:
    {
        name: "West Bengal",
        data: data,
        westbengal_d: {
            Alipurduar: data,
            Bankura: data,
            Birbhum: data,
            CoochBehar: data,
            DakshinDinajpur: data,
            Darjeeling: data,
            Hooghly: data,
            Howrah: data,
            Jalpaiguri: data,
            Jhargram: data,
            Kalimpong: data,
            Kolkata: data,
            Malda: data,
            Murshidabad: data,
            Nadia: data,
            North24Parganas: data,
            PaschimBardhaman: data,
            PaschimMedinipur: data,
            PurbaBardhaman: data,
            PurbaMedinipur: data,
            Purulia: data,
            South24Parganas: data,
            UttarDinajpur: data
        }


    },

    JK:
    {
        name: "J & K",

        data: data,

        jammukashmir_d: {
            Anantnag: data,
            Kulgam: data,
            Srinagar: data,
            Bandipora: data,
            Baramulla: data,
            Kupwara: data,
            Shopiyan: data,
            Jammu: data,
            Budgam: data,
            Kathua: data,
            Udhampur: data,
            Ramban: data,
            Ganderbal: data,
            Pulwama: data,
            Samba: data,
            Rajouri: data,
            Kishtwar: data,
            Punch: data,
            Reasi: data,
            Doda: data,
            Mirpur: data,
            Muzaffarabad: data
        }



    },

    HimachalPradesh:
    {
        name: "Himachal Pradesh",
        data: data,
        himachalpradesh_d: {
            Kangra: data,
            Una: data,
            Hamirpur: data,
            Chamba: data,
            Solan: data,
            Bilaspur: data,
            Sirmaur: data,
            Mandi: data,
            Kullu: data,
            Shimla: data,
            Kinnaur: data,
            LahaulandSpiti: data
        }

    },

    Rajasthan:
    {
        name: "Rajasthan",
        data: data,
        rajasthan_d: {
            Ajmer: data,
            Alwar: data,
            Banswara: data,
            Baran: data,
            Barmer: data,
            Bharatpur: data,
            Bhilwara: data,
            Bikaner: data,
            BSFCamp: data,
            Bundi: data,
            Chittorgarh: data,
            Churu: data,
            Dausa: data,
            Dholpur: data,
            Dungarpur: data,
            Evacuees: data,
            Ganganagar: data,
            Hanumangarh: data,
            Italians: data,
            Jaipur: data,
            Jaisalmer: data,
            Jalore: data,
            Jhalawar: data,
            Jhunjhunu: data,
            Jodhpur: data,
            Karauli: data,
            Kota: data,
            Nagaur: data,
            Pali: data,
            Pratapgarh: data,
            Rajsamand: data,
            SawaiMadhopur: data,
            Sikar: data,
            Sirohi: data,
            Tonk: data,
            Udaipur: data
        }


    },

    UttarPradesh:
    {
        name: "Uttar Pradesh",

        data: data,

        uttarpradesh_d: {
            Agra: data,
            Aligarh: data,
            AmbedkarNagar: data,
            Amethi: data,
            Amroha: data,
            Auraiya: data,
            Ayodhya: data,
            Azamgarh: data,
            Baghpat: data,
            Bahraich: data,
            Ballia: data,
            Balrampur: data,
            Banda: data,
            Barabanki: data,
            Bareilly: data,
            Basti: data,
            Bhadohi: data,
            Bijnor: data,
            Budaun: data,
            Bulandshahr: data,
            Chandauli: data,
            Chitrakoot: data,
            Deoria: data,
            Etah: data,
            Etawah: data,
            Farrukhabad: data,
            Fatehpur: data,
            Firozabad: data,
            GautamBuddhaNagar: data,
            Ghaziabad: data,
            Ghazipur: data,
            Gonda: data,
            Gorakhpur: data,
            Hamirpur: data,
            Hapur: data,
            Hardoi: data,
            Hathras: data,
            Jalaun: data,
            Jaunpur: data,
            Jhansi: data,
            Kannauj: data,
            KanpurDehat: data,
            KanpurNagar: data,
            Kasganj: data,
            Kaushambi: data,
            Kushinagar: data,
            LakhimpurKheri: data,
            Lalitpur: data,
            Lucknow: data,
            Maharajganj: data,
            Mahoba: data,
            Mainpuri: data,
            Mathura: data,
            Mau: data,
            Meerut: data,
            Mirzapur: data,
            Moradabad: data,
            Muzaffarnagar: data,
            Pilibhit: data,
            Pratapgarh: data,
            Prayagraj: data,
            RaeBareli: data,
            Rampur: data,
            Saharanpur: data,
            Sambhal: data,
            SantKabirNagar: data,
            Shahjahanpur: data,
            Shamli: data,
            Shrawasti: data,
            Siddharthnagar: data,
            Sitapur: data,
            Sonbhadra: data,
            Sultanpur: data,
            Unnao: data,
            Varanasi: data
        }

    },


    Punjab:
    {
        name: "Punjab",

        data: data,

        punjab_d: {
            Amritsar: data,
            Barnala: data,
            Bathinda: data,
            Faridkot: data,
            FatehgarhSahib: data,
            Fazilka: data,
            Ferozepur: data,
            Gurdaspur: data,
            Hoshiarpur: data,
            Jalandhar: data,
            Kapurthala: data,
            Ludhiana: data,
            Mansa: data,
            Moga: data,
            Pathankot: data,
            Patiala: data,
            Rupnagar: data,
            SASNagar: data,
            Sangrur: data,
            ShahidBhagatSinghNagar: data,
            SriMuktsarSahib: data,
            TarnTaran: data
        }



    },

    Uttarakand:
    {
        name: "Uttarakand",

        data: data,


        uttarakand_d: {
            Almora: data,
            Bageshwar: data,
            Chamoli: data,
            Champawat: data,
            Dehradun: data,
            Haridwar: data,
            Nainital: data,
            PauriGarhwal: data,
            Pithoragarh: data,
            Rudraprayag: data,
            TehriGarhwal: data,
            UdhamSinghNagar: data,
            Uttarkashi: data
        }

    },


    Haryana:
    {
        name: "Haryana",
        data: data,
        haryana_d: {
            Gurugram: data,
            Faridabad: data,
            Sonipat: data,
            Jhajjar: data,
            Nuh: data,
            Ambala: data,
            Palwal: data,
            Panipat: data,
            Panchkula: data,
            Jind: data,
            Karnal: data,
            Rohtak: data,
            Mahendragarh: data,
            Hisar: data,
            Rewari: data,
            Fatehabad: data,
            Sirsa: data,
            Yamunanagar: data,
            Bhiwani: data,
            CharkhiDadri: data,
            Kaithal: data,
            Kurukshetra: data,
        }

    },

    Delhi:
    {
        name: "Delhi",
        data: data,
        delhi_d: {
            CentalDelhi: data,
            SouthEastDelhi: data,
            WestDelhi: data,
            SouthDelhi: data,
            NorthDelhi: data,
            Shahdara: data,
            SouthWestDelhi: data,
            EastDelhi: data,
            NewDelhi: data,
            NorthWestDelhi: data,

        }
    },

    Kerala:
    {
        name: "Kerala",

        data: data,
        kerala_d: {
            Kasaragod: data,
            Kannur: data,
            Malappuram: data,
            Kozhikode: data,
            Palakkad: data,
            Ernakulam: data,
            Kollam: data,
            Thrissur: data,
            Kottayam: data,
            Idukki: data,
            Pathanamthitta: data,
            Thiruvananthapuram: data,
            Wayanad: data,
            Alappuzha: data

        }


    },

    TamilNadu:
    {
        name: "Tamil Nadu",

        data: data,
        tamilnadu_d: {
            Ariyalur: data,
            Chengalpattu: data,
            Chennai: data,
            Coimbatore: data,
            Cuddalore: data,
            Dharmapuri: data,
            Dindigul: data,
            Erode: data,
            Kallakurichi: data,
            Kancheepuram: data,
            Kanyakumari: data,
            Karur: data,
            Krishnagiri: data,
            Madurai: data,
            Nagapattinam: data,
            Namakkal: data,
            Nilgiris: data,
            Perambalur: data,
            Pudukkottai: data,
            Ramanathapuram: data,
            Ranipet: data,
            Salem: data,
            Sivaganga: data,
            Tenkasi: data,
            Thanjavur: data,
            Theni: data,
            Thiruvallur: data,
            Thiruvarur: data,
            Thoothukkudi: data,
            Tiruchirappalli: data,
            Tirunelveli: data,
            Tirupathur: data,
            Tiruppur: data,
            Tiruvannamalai: data,
            Vellore: data,
            Viluppuram: data,
            Virudhunagar: data
        }


    },

    Telangana:
    {
        name: "Telangana",

        data: data,
        telangana_d: {
            Adilabad: data,
            BhadradriKothagudem: data,
            Hyderabad: data,
            Jagtial: data,
            Jangaon: data,
            JayashankarBhupalapally: data,
            JogulambaGadwal: data,
            Kamareddy: data,
            Karimnagar: data,
            Khammam: data,
            KomaramBheem: data,
            Mahabubabad: data,
            Mahabubnagar: data,
            Mancherial: data,
            Medak: data,
            MedchalMalkajgiri: data,
            Mulugu: data,
            Nagarkurnool: data,
            Nalgonda: data,
            Narayanpet: data,
            Nirmal: data,
            Nizamabad: data,
            Peddapalli: data,
            RajannaSircilla: data,
            RangaReddy: data,
            Sangareddy: data,
            Siddipet: data,
            Suryapet: data,
            Vikarabad: data,
            Wanaparthy: data,
            WarangalRural: data,
            WarangalUrban: data,
            YadadriBhuvanagiri: data
        }

    },

    AndhraPradesh:
    {
        name: "Andhra Pradesh",
        data: data,
        andhrapradesh_d: {
            Anantapur: data,
            Chittoordistrict: data,
            YSRKadapa: data,
            EastGodavari: data,
            Guntur: data,
            Krishna: data,
            Kurnool: data,
            SPSNellore: data,
            Prakasam: data,
            Srikakulam: data,
            Visakhapatnam: data,
            Vizianagaram: data,
            WestGodavari: data
        }

    },

    Lakshadweep: {
        name: "Lakshadweep",

        data: data,
        lakshadweep_d: {
            Lakshadweep: data
        }
    },

    Puducherry:
    {
        name: "Puducherry",
        data: data,
        puducherry_d: {
            Karaikal: data,
            Mahe: data,
            Puducherry: data,
            Yanam: data
        }

    },

    Chhattisgarh:
    {
        name: "Chhattisgarh",

        data: data,

        chhattisgarh_d: {
            Korba: data,
            Balod: data,
            JanjgirChampa: data,
            Durg: data,
            Kabeerdham: data,
            Raipur: data,
            Surajpur: data,
            BalodaBazar: data,
            Rajnandgaon: data,
            Raigarh: data,
            Bilaspur: data,
            Gariaband: data,
            Koriya: data,
            Surguja: data,
            Balrampur: data,
            Bametara: data,
            Bastar: data,
            Bijapur: data,
            DakshinBastarDantewada: data,
            Dhamtari: data,
            Jashpur: data,
            Kondagaon: data,
            Mahasamund: data,
            Mungeli: data,
            Narayanpur: data,
            Sukma: data,
            UttarBastarKanker: data

        }
    },



    MadhyaPradesh:
    {
        name: "Madhya Pradesh",

        data: data,
        madhyapradesh_d: {
            AgarMalwa: data,
            Alirajpur: data,
            Anuppur: data,
            Ashoknagar: data,
            Balaghat: data,
            Barwani: data,
            Betul: data,
            Bhind: data,
            Bhopal: data,
            Burhanpur: data,
            Chhatarpur: data,
            Chhindwara: data,
            Damoh: data,
            Datia: data,
            Dewas: data,
            Dhar: data,
            Dindori: data,
            Guna: data,
            Gwalior: data,
            Harda: data,
            Hoshangabad: data,
            Indore: data,
            Jabalpur: data,
            Jhabua: data,
            Katni: data,
            Khandwa: data,
            Khargone: data,
            Mandla: data,
            Mandsaur: data,
            Morena: data,
            Narsinghpur: data,
            Neemuch: data,
            Niwari: data,
            Panna: data,
            Raisen: data,
            Rajgarh: data,
            Ratlam: data,
            Rewa: data,
            Sagar: data,
            Satna: data,
            Sehore: data,
            Seoni: data,
            Shahdol: data,
            Shajapur: data,
            Sheopur: data,
            Shivpuri: data,
            Sidhi: data,
            Singrauli: data,
            Tikamgarh: data,
            Ujjain: data,
            Umaria: data,
            Vidisha: data
        }

    },


    Gujarat:
    {
        name: "Gujarat",
        data: data,
        gujarat_d: {
            Ahmedabad: data,
            Surat: data,
            Vadodara: data,
            Gandhinagar: data,
            Bhavnagar: data,
            Banaskantha: data,
            Anand: data,
            Aravalli: data,
            Rajkot: data,
            Mehsana: data,
            Panchmahal: data,
            Botad: data,
            Mahisagar: data,
            Patan: data,
            Kutch: data,
            Kheda: data,
            Sabarkantha: data,
            Jamnagar: data,
            Bharuch: data,
            Dahod: data,
            GirSomnath: data,
            ChhotaUdaipur: data,
            Valsad: data,
            Narmada: data,
            DevbhumiDwarka: data,
            Junagadh: data,
            Surendranagar: data,
            Navsari: data,
            Porbandar: data,
            Tapi: data,
            Amreli: data,
            Dang: data,
            Morbi: data
        }

    },


    DadraNagarHaveli:
    {
        name: "Dadra & Nagar Haveli",
        data: data,
        dadra_d: {
            DadraNagarHaveli: data
        }
    },

    Maharashtra:
    {
        name: "Maharashtra",

        data: data,

        maharashtra_d: {
            Mumbai: data,
            Thane: data,
            Pune: data,
            Aurangabad: data,
            Nashik: data,
            Raigad: data,
            Solapur: data,
            Palghar: data,
            Nagpur: data,
            Akola: data,
            Jalgaon: data,
            Satara: data,
            Kolhapur: data,
            Amravati: data,
            Ratnagiri: data,
            Hingoli: data,
            Yavatmal: data,
            Dhule: data,
            Nanded: data,
            Ahmednagar: data,
            Sangli: data,
            Latur: data,
            Jalna: data,
            Buldhana: data,
            Nandurbar: data,
            Osmanabad: data,
            Sindhudurg: data,
            Parbhani: data,
            Washim: data,
            Bhandara: data,
            Gadchiroli: data,
            Beed: data,
            Chandrapur: data,
            Gondia: data,
            Wardha: data,
            MumbaiSuburban: data
        }


    },


    Goa:
    {
        name: "Goa",

        data: data,

        goa_d: {
            SouthGoa: data,
            NorthGoa: data
        }

    },


    DamanDiu:
    {
        name: "Daman and Diu",
        data: data,
        daman_d: {
            Daman: data,
            Diu: data

        }

    }
}


var state_district = mongoose.model('State_Districts', dataSchema);


state_district.countDocuments(function (err, count) {
    if (count == 0 && !err) {
        var dataobj = new state_district({
            day: "23-may-2020",
            confirmed: "0",
            recovered: "0",
            death: "0",
            active: "0",
            state: states
        });
        dataobj.save();
    }
    else {
        console.log(err);
    }
})




















app.get('/', function (req, res) {
    console.log("Running on 3000");

})

app.listen(3000, function () {
    console.log('Node.js listening ...');
});
