const get = (request , response) =>{
    response.send([
        {
            id: 1,
            name: "OPPO Reno8 5G",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.91-img.com/pictures/148756-v7-oppo-reno8-mobile-phone-medium-1.jpg?tr=q-80",
            price: "₹29,999",
            oPrice: "₹32,000"

        },
        {
            id: 2,
            name: "Nothing Phone 1",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.91-img.com/pictures/150778-v2-nothing-phone-1-mobile-phone-medium-1.jpg?tr=q-80",
            price: "₹32,999",
            oPrice: "₹41,000"

        },
        {
            id: 3,
            name: "OnePlus Nord 2T 5G",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.91-img.com/pictures/149276-v6-oneplus-nord-2t-mobile-phone-medium-1.jpg?tr=q-80",
            price: "₹35,000",
            oPrice: "₹38,499"

        },
        {
            id: 4,
            name: "OnePlus Nord 2T",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
            price: "₹16,500",
            oPrice: "₹19,000"

        },
        {
            id: 5,
            name: "OnePlus Nord CE 2",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg",
            price: "₹23,500",
            oPrice: "₹25,500"

        },
        {
            id: 6,
            name: "Redmi Note 9 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2.jpg",
            price: "₹12,500",
            oPrice: "₹13,500"
        },
        {
            id: 7,
            name: "Redmi Note 10 Lite",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://i02.appmifile.com/644_operator_in/30/09/2021/71bceaa70d1b789429e32134dc332adb.jpg",
            price: "₹14,500",
            oPrice: "₹16,000"
        },
        {
            id: 8,
            name: "Redmi Note 10 Prime",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/817clKAKcqL._SL1500_.jpg",
            price: "₹16,000",
            oPrice: "₹17,500"
        },
        {
            id: 9,
            name: "Redmi Note 11 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/717DeSsnXpL._SL1500_.jpg",
            price: "₹17000",
            oPrice: "₹19,500"
        },
        {
            id: 10,
            name: "Redmi Note 11",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SS450_.jpg",
            price: "₹23500",
            oPrice: "₹25,500"
        },
        {
            id: 11,
            name: "Samsung Galaxy A13 ",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/81i1A1MgXBL._SL1500_.jpg",
            price: "₹14500",
            oPrice: "₹16,499"
        },
        {
            id: 12,
            name: "Samsung Galaxy S20",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71RxOftVoQL._AC_SS450_.jpg",
            price: "₹20500",
            oPrice: "₹21,000"
        },
        {
            id: 13,
            name: "Asus Zenfone 8",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/c05b6491-6d2b-48f0-81f0-d268840208d6/",
            price: "₹15500",
            oPrice: "₹17,000"
        },
        {
            id: 14,
            name: "Asus Zenfone 7",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://dlcdnwebimgs.asus.com/gain/aefee30c-d71b-46ce-9c28-5cf6daf80a03/",
            price: "₹15999",
            oPrice: "₹17,499"
        },
        {
            id: 15,
            name: "Google Pixel 4 XL",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://m.media-amazon.com/images/I/71oTy+incwL._SL1500_.jpg",
            price: "₹16000",
            oPrice: "₹18,000"
        },
        {
            id: 16,
            name:   "Google Pixel 5",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Teaser_Google_Pixel_5.jpg",
            price: "₹17000",
            oPrice: "₹19,500"
        }
    ])
}

module.exports.apiController = get;