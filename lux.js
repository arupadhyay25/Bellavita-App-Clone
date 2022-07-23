obj_lux=[
    {
        image:"https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_men_680x680.jpg?v=1652265181",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_women_680x680.jpg?v=1652265252",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_little_luxuries_680x680.jpg?v=1652266061",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_unisex_680x680.jpg?v=1652266096",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0561/9256/5292/files/category_tile_giftsets_680x680.jpg?v=1652266120",
    }
]

obj_lux.forEach(function(elem){
    div=document.createElement("div")
    let image=document.createElement("img")
        image.src=elem.image
    div.append(image)
    document.querySelector(".lux").append(div)
})