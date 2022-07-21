let obj_shoplight=[
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Skin_Care_V1_460x460_3c211a79-3489-4914-b8c6-dae23fb195cc_460x460.png?v=1650365344",
        names:"Skin Care"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_V2_460x460.png?v=1651700520",
        names:"Body Care"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_V1.1_1_460x460_2dec5f68-3c7d-4aa3-a3eb-b08c792bc005_460x460.png?v=1650365899",
        names:"Hair Care"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Summer_Essentials_V1_460x460_1962bedb-04b6-4327-9bbe-f7f4bcf1d187_460x460.png?v=1650365075",
        names:"Summer Essentails"
    }
]

obj_shoplight.forEach(function(elem){
    div=document.createElement("div")
    let image=document.createElement("img")
        image.src=elem.image
    let names=document.createElement("p")
        names.style.color="#475D4B"
        names.style.backgroundColor="#E5F0DA"
        names.style.fontSize="13px"
        names.innerText=elem.names
    div.append(image,names)
    document.querySelector(".shoplight").append(div)
})