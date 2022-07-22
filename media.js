obj_media=[
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/ANI_1_460x460.png?v=1652796529",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/The_Financial_Express_1_460x460.png?v=1652796573",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/POPxo_1_460x460_ba0026a1-f274-4738-b3ec-de133beac9dc_460x460.png?v=1650368104",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Your_Story_11328cdb-2c21-49f0-8f_460x460.png?v=1650368163",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Mint_460x460_554c9975-d981-4b31-8b19-207c9153846e_460x460.png?v=1650368210",
    }
]

obj_media.forEach(function(elem){
    div=document.createElement("div")
    let image=document.createElement("img")
        image.src=elem.image
    div.append(image)
    document.querySelector(".media").append(div)
})