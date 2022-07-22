obj_bestseller=[
    {
        image1:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-01_700x.jpg?v=1652421642",
        image2:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ManBox-02_1410db0a-914d-4318-a11b-59f3e68c7cc6_360x.jpg?v=1652421646",
        names:"Luxury Perfume For Man",
        quant:"4x20ml",
        category:"Eau De Parfum",
        price:"₹649",
        discount:"₹849", 
    },
    {
        image1:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Kumkumadi-Face-Oil-01_700x.jpg?v=1652341175",
        image2:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/KumkumadiFaceOil-02_360x.jpg?v=1652341175",
        names:"Ayurvedic Kumkumadi Face Oil",
        quant:"30ml",
        category:"Skin Brightening & Hydrating Oil",
        price:"₹649",
        discount:"₹649",
    },
    {
        image1:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_700x.jpg?v=1652169511",
        image2:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-02_360x.jpg?v=1652169511",
        names:"GLOWEY Scrub & Face Wash",
        quant:"100 Gm",
        category:"Cleansing, Hydrating & Reviving",
        price:"₹375",
        discount:"₹399",
    },
]

obj_bestseller.forEach(function(elem){
    div=document.createElement("div")
    let image1=document.createElement("img")
        image1.src=elem.image1
    let names=document.createElement("p")
        let text=elem.names.toUpperCase()
        names.style.color="#475D4B"
        names.style.fontSize="14px"
        names.style.padding="3px 0px 3px 0px"
        names.innerText=text
    let quant=document.createElement("p")
        let text2=elem.quant.toUpperCase()
        quant.style.color="#475D4B"
        quant.style.fontSize="13px"
        quant.innerText=text2
    let category=document.createElement("p")
        category.style.fontSize="13px"
        category.style.padding="3px 0px 3px 0px"
        category.innerText=elem.category
    let price=document.createElement("span")
        price.innerText=elem.price
        price.style.padding="5px 5px 15px 0px"
    let discount=document.createElement("span")
        discount.style.textDecoration="line-through"
        discount.innerText=elem.discount
    let btn=document.createElement("button")
        btn.style.marginTop="15px"
        btn.innerText="ADD TO CART"
    div.append(image1,names,quant,category,price,discount,btn)
    document.querySelector(".bs").append(div)
})