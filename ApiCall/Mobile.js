const get = (request , response) =>{
    response.send([
        {
            id: 1,
            name: "iPhone 13 Pro",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.apple.com/in/iphone-13-pro/images/key-features/hero/hero_alpine-green__fipi3m7a9eum_large.jpg",
            price: "₹119900",
            oPrice: "₹119900"

        },
        {
            id: 2,
            name: "iPhone 13",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.apple.com/in/iphone-13/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg",
            price: "₹69900",
            oPrice: "₹69900"

        },
        {
            id: 3,
            name: "iPhone 12",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://www.apple.com/v/iphone-12/key-features/g/images/overview/hero/hero_purple__b4giljhj5ehe_large.jpg",
            price: "₹59900",
            oPrice: "₹59900"

        },
        {
            id: 4,
            name: "iPhone 11",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-purple-box-2019?wid=213&hei=372&fmt=jpeg&qlt=95&.v=1566845420606",
            price: "₹49900",
            oPrice: "₹49900"

        },
        {
            id: 5,
            name: "APPLE iPhone SE (Black, 64 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/128/128/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjyscxm8fv.jpeg?q=70",
            price: "₹29,999",
            oPrice: "₹39,999"
        },
        {
            id: 6,
            name: "APPLE iPhone 12 (Green, 64 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70",
            price: "₹59,999",
            oPrice: "₹69,999"
        },
        {
            id: 7,
            name: "APPLE iPhone 12 Mini (Black, 128 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwkfrerak.jpeg?q=70",
            price: "₹59,999",
            oPrice: "₹69,999"
        },
        {
            id: 8,
            name: "APPLE iPhone 13 Pro Max (Gold, 1 TB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/v/c/iphone-13-pro-max-mllh3hn-a-apple-original-imag6vpgpycue85h.jpeg?q=70",
            price: "₹1,79,900",
            oPrice: "₹1,89,900"
        },
        {
            id: 9,
            name: "APPLE iPhone 13 Pro Max (Graphite, 128 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/3/e/o/iphone-13-pro-max-mll63hn-a-apple-original-imag6vpgwfgxdsj6.jpeg?q=70",
            price: "₹1,29,900",
            oPrice: "₹1,39,900"
        },
        {
            id: 10,
            name: "APPLE iPhone 12 (Red, 256 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8dbzv8vh7t.jpeg?q=70",
            price: "₹74,999",
            oPrice: "₹78,999"
        },
        {
            id: 11,
            name: "APPLE iPhone 12 Mini (Green, 128 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/h/v/w/apple-iphone-12-mini-dummyapplefsn-original-imafwgb2zkjcwpre.jpeg?q=70",
            price: "₹59,999",
            oPrice: "₹67,000"
        },
        {
            id: 12,
            name: "APPLE iPhone 13 (Starlight, 256 GB)",
            catagory: "Mobile",
            ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
            price: "₹83,999",
            oPrice: "₹87,999"
        },
       
    ])
}

module.exports.apiController = get;