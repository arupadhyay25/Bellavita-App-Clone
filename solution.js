let obj_solution=[
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Tan_Removal_460x460_53aabbb6-f4a1-44f0-b690-659abbbf9a32_460x460.png?v=1650367545",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Brightening_1_20b6b4c3-86f5_460x460.png?v=1650367496",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dry_Dull_Lips_460x460.png?v=1652016690",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Dark_Circles_4_460x460_4bcb3077-0357-4efc-ad06-9b7f7547328c_460x460.png?v=1650367831",
    }
]

obj_solution.forEach(function(elem){
    div=document.createElement("div")
    let image=document.createElement("img")
        image.src=elem.image
    div.append(image)
    document.querySelector(".solution").append(div)
})