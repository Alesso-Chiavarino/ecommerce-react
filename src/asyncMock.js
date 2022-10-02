const products = [
    {
        "id": 1,
        "nombre": "Asus Tuf Gaming Nvidia Geforce Rtx 3090",
        "precio": 470000,
        "precio2": "470.000",
        "imagen": "../img/placadevideo1.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 2,
        "nombre": "Procesador gamer AMD Ryzen 5 3600",
        "precio": 30000,
        "precio2": "30.000",
        "imagen": "../img/procesador1.jpg",
        "categoria": "procesador"
    },
    {
        "id": 3,
        "nombre": "Mother Gigabyte B450 M Aorus Elite",
        "precio": 25000,
        "precio2": "25.000",
        "imagen": "../img/placa1.jpg",
        "categoria": "placaMadre"
    },
    {
        "id": 4,
        "nombre": "Fuente Asus ROG Strix ROG-STRIX-750G 750W",
        "precio": 20000,
        "precio2": "20.000",
        "imagen": "../img/fuente1.jpg",
        "categoria": "fuente"
    },
    {
        "id": 5,
        "nombre": "Memoria RAM Spectrix D60G DDR4 16GB",
        "precio": 5000,
        "precio2": "5.000",
        "imagen": "../img/ram1.png",
        "categoria": "memoriaRam"
    },
    {
        "id": 6,
        "nombre": "Disco Rigido PC SATA3 2Tb WD Blue",
        "precio": 11000,
        "precio2": "11.000",
        "imagen": "../img/discoRigido1.jpg",
        "categoria": "discoRigido"
    },
    {
        "id": 7,
        "nombre": "Disco sólido interno Kingston 960G 960GB",
        "precio": 10000,
        "precio2": "10.000",
        "imagen": "../img/discoSolido1.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 8,
        "nombre": "Fan Cooler Gamer Mining Led Rgb 120mm",
        "precio": 1240,
        "precio2": "1.240",
        "imagen": "../img/cooler1.png",
        "categoria": "cooler"
    },
    {
        "id": 9,
        "nombre": "Disco SSD M.2, RGB, XPG Spectrix S40G 256Gb",
        "precio": 9990,
        "precio2": "9.990",
        "imagen": "../img/discom21.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 10,
        "nombre": "Nvidia Gigabyte GeForce GTX 1660 SUPER 6GB",
        "precio": 190000,
        "precio2": "190.000",
        "imagen": "../img/placadevideo2.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 11,
        "nombre": "Nvidia Gigabyte Aorus GeForce RTX 3070",
        "precio": 274000,
        "precio2": "274.000",
        "imagen": "../img/placadevideo3.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 12,
        "nombre": "Nvidia MSI Ventus XS GeForce GTX 1650",
        "precio": 69324,
        "precio2": "69.324",
        "imagen": "../img/placadevideo4.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 13,
        "nombre": "Nvidia Evga FTW3 GEFORCE RTX 3070 8GB",
        "precio": 315499,
        "precio2": "315.499",
        "imagen": "../img/placadevideo5.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 14,
        "nombre": "Pny Geforce Rtx 3090 24gb Xlr8 Epic-x Rgb",
        "precio": 689000,
        "precio2": "689.000",
        "imagen": "../img/placadevideo6.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 15,
        "nombre": "Msi Nvidia Rtx 3070 Ti Gaming X Trio 8gb",
        "precio": 329999,
        "precio2": "329.999",
        "imagen": "../img/placadevideo7.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 16,
        "nombre": "Procesador gamer AMD Ryzen 7 3800XT",
        "precio": 83999,
        "precio2": "83.999",
        "imagen": "../img/procesador2.jpg",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 17,
        "nombre": "Procesador gamer AMD Ryzen 5 5600X",
        "precio": 48598,
        "precio2": "48.598",
        "imagen": "../img/procesador3.webp",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 18,
        "nombre": "AMD Ryzen Threadripper 3970X 64-Thread",
        "precio": 1049200,
        "precio2": "1.049.200",
        "imagen": "../img/procesador4.jpg",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 19,
        "nombre": "Intel Core i7-10700 8 CORE 4.8GHZ",
        "precio": 62699,
        "precio2": "62.699",
        "imagen": "../img/procesador5.jpg",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 20,
        "nombre": "Intel Core i5-10400Fde 6 CORE 4.3G",
        "precio": 30299,
        "precio2": "30.299",
        "imagen": "../img/procesador6.png",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 21,
        "nombre": "Intel Core i9-10900K 10 núcleos 5.3GHz",
        "precio": 122000,
        "precio2": "122.000",
        "imagen": "../img/procesador7.jpg",
        "id2": "btnComprar",
        "categoria": "procesador"
    },
    {
        "id": 22,
        "nombre": "Motherboard Asus Prime B450m-a Ii Am4 Ddr4",
        "precio": 20666,
        "precio2": "20.666",
        "imagen": "../img/placa2.jpg",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 23,
        "nombre": "Motherboard Asus Prime A320m-k Am4 A320",
        "precio": 11499,
        "precio2": "11.499",
        "imagen": "../img/placa3.jpg",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 24,
        "nombre": "Motherboard Msi Am4 A320m-a Pro",
        "precio": 12975,
        "precio2": "12.975",
        "imagen": "../img/placa4.jpg",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 25,
        "nombre": "Msi B460m Pro-vdh Wifi Proseries Motherboard",
        "precio": 49269,
        "precio2": "49.269",
        "imagen": "../img/placa5.jpg",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 26,
        "nombre": "MSI Z370 Z370 Motherboard i7 8700k 64GB DDR4",
        "precio": 480000,
        "precio2": "480.000",
        "imagen": "../img/placa6.png",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 27,
        "nombre": "Msi Mag B460 Tomahawk Gaming Motherboard ",
        "precio": 121999,
        "precio2": "121.999",
        "imagen": "../img/placa7.jpg",
        "id2": "btnComprar",
        "categoria": "placaMadre"
    },
    {
        "id": 28,
        "nombre": "Memoria RAM Vengeance RGB black Pro gamer 16GB",
        "precio": 22990,
        "precio2": "22.990",
        "imagen": "../img/ram2.webp",
        "categoria": "memoriaRam"
    },
    {
        "id": 29,
        "nombre": "Memoria RAM Fury DDR4 RGB gamer8GB 1 HyperX",
        "precio": 11020,
        "precio2": "11.020",
        "imagen": "../img/ram3.jpg",
        "categoria": "memoriaRam"
    },
    {
        "id": 30,
        "nombre": "Memoria Ram Crucial Ballistix Rgb 8gb 3200 Mhz",
        "precio": 16699,
        "precio2": "16.699",
        "imagen": "../img/ram4.webp",
        "categoria": "memoriaRam"
    },
    {
        "id": 31,
        "nombre": "Memoria RAM Vengeance RGB Pro gamer white 16GB",
        "precio": 19999,
        "precio2": "19.999",
        "imagen": "../img/ram5.jpg",
        "categoria": "memoriaRam"
    },
    {
        "id": 32,
        "nombre": "Memoria RAM Trident Z Royal Silver RGB 16GB",
        "precio": 29819,
        "precio2": "29.819",
        "imagen": "../img/ram6.jpg",
        "categoria": "memoriaRam"
    },
    {
        "id": 33,
        "nombre": "Fuente Modular Gigabyte 1000w 80 Plus Gold",
        "precio": 34390,
        "precio2": "34.390",
        "imagen": "../img/fuente2.jpg",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 34,
        "nombre": "Fuente Thermaltake Technology Smart RGB",
        "precio": 15749,
        "precio2": "15.749",
        "imagen": "../img/fuente3.jpg",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 35,
        "nombre": "Fuente Pc Corsair Cx750f Rgb white 750w",
        "precio": 27999,
        "precio2": "27.999",
        "imagen": "../img/fuente4.jpg",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 36,
        "nombre": "Fuente Aerocool Cylon 600W Full Range 600W",
        "precio": 16029,
        "precio2": "16.029",
        "imagen": "../img/fuente5.png",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 37,
        "nombre": "Fuente Asus ROG Thor ROG-THOR-850P 850W black",
        "precio": 61599,
        "precio2": "61.599",
        "imagen": "../img/fuente6.jpg",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 38,
        "nombre": "Fuente Asus Rog Strix 850g 850w Full Modular W",
        "precio": 48436,
        "precio2": "48.436",
        "imagen": "../img/fuente7.jpg",
        "id2": "btnComprar",
        "categoria": "fuente"
    },
    {
        "id": 39,
        "nombre": "Disco Rigido Wd Western Digital Hdd 1tb Blue",
        "precio": 8299,
        "precio2": "8.299",
        "imagen": "../img/discoRigido2.jpg",
        "categoria": "discoRigido"
    },
    {
        "id": 40,
        "nombre": "Disco duro interno Seagate Barracuda 1TB",
        "precio": 9690,
        "precio2": "9.690",
        "imagen": "../img/discoRigido3.jpg",
        "categoria": "discoRigido"
    },
    {
        "id": 41,
        "nombre": "Disco duro interno Western Digital 1TB azul",
        "precio": 9999,
        "precio2": "9.999",
        "imagen": "../img/discoRigido4.jpg",
        "categoria": "discoRigido"
    },
    {
        "id": 42,
        "nombre": "Disco Duro Hp Dell Micron 1tb Hdd Sata 3.5",
        "precio": 9500,
        "precio2": "9.500",
        "imagen": "../img/discoRigido5.jpg",
        "categoria": "discoRigido"
    },
    {
        "id": 43,
        "nombre": "Disco sólido Western Digital WD Green 240GB",
        "precio": 5598,
        "precio2": "5.598",
        "imagen": "../img/discoSolido2.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 44,
        "nombre": "Disco sólido interno Patriot Burst 120GB",
        "precio": 4548,
        "precio2": "4.548",
        "imagen": "../img/discoSolido3.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 45,
        "nombre": "Disco sólido interno Gigabyte 240GB",
        "precio": 4899,
        "precio2": "4.899",
        "imagen": "../img/discoSolido4.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 46,
        "nombre": "Disco sólido Hikvision Minder Series 120GB",
        "precio": 3560,
        "precio2": "3.560",
        "imagen": "../img/discoSolido5.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 47,
        "nombre": "Disco sólido interno HP S650 240GB",
        "precio": 8190,
        "precio2": "8.190",
        "imagen": "../img/discoSolido6.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 48,
        "nombre": "TEAMGROUP T-Force Delta RGB SSD Lite 512 GB",
        "precio": 18600,
        "precio2": "18.600",
        "imagen": "../img/discoSolido7.jpg",
        "categoria": "discoSolido"
    },
    {
        "id": 49,
        "nombre": "Disco Solido SSD 500gb Kingston",
        "precio": 9199,
        "precio2": "9.199",
        "imagen": "../img/discom22.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 50,
        "nombre": "Disco solido Western Digital WD Green, 120 GB",
        "precio": 5376,
        "precio2": "5.376",
        "imagen": "../img/discom23.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 51,
        "nombre": "Disco solido 1TB M2 NVME SPECTRIX XPG S20G RGB",
        "precio": 23990,
        "precio2": "23.990",
        "imagen": "../img/discom24.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 52,
        "nombre": "HD SSD 256GB M.2 GIGABYTE AORUS RGB NVME 250GB",
        "precio": 11540,
        "precio2": "11.540",
        "imagen": "../img/discom25.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 53,
        "nombre": "Disco solido 512GB PATRIOT M2 2280 RGB 3300MB/S",
        "precio": 15990,
        "precio2": "15.990",
        "imagen": "../img/discom26.jpg",
        "categoria": "discoM2"
    },
    {
        "id": 54,
        "nombre": "Gezatek Cooler Fan 120MM Negro Molex 12Cm",
        "precio": 1099,
        "precio2": "1.099",
        "imagen": "../img/cooler2.jpg",
        "categoria": "cooler"
    },
    {
        "id": 55,
        "nombre": "Coolers 120mm Id-cooling Pwm 1800rpm 75cfm",
        "precio": 1230,
        "precio2": "1.230",
        "imagen": "../img/cooler3.jpg",
        "categoria": "cooler"
    },
    {
        "id": 56,
        "nombre": "Cooler para gabinete satellite RGB-75 12X12",
        "precio": 1356,
        "precio2": "1.356",
        "imagen": "../img/cooler4.jpg",
        "categoria": "cooler"
    },
    {
        "id": 57,
        "nombre": "Cooler Cpu Cooler Master Mf 120 Halo Negro Rgb",
        "precio": 6202,
        "precio2": "6.202",
        "imagen": "../img/cooler5.jpg",
        "categoria": "cooler"
    },
    {
        "id": 58,
        "nombre": "COOLER FAN CORSAIR LL120 RGB LED 120MM BLANCO",
        "precio": 2320,
        "precio2": "2.320",
        "imagen": "../img/cooler6.jpg",
        "categoria": "cooler"
    }
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
} 