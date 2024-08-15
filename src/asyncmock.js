const items =[
    {id:0,
        nombre:"torta",
        precio:30000,
        stock:15,
        categoria: "tortas",
        image:"https://www.coques.com.ar/wp-content/uploads/2023/07/Torta-Tematica-en-Buttercream-01.jpg"

    },
    {id:1,
        nombre:"galletas",
        precio:5000,
        stock:10,
        categoria: "galletas",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tvNgBjP56Bje3W9-svCCH9bb_ib1E2tz4Q&s"

    },
    {id:2,
        nombre:"budin",
        precio:1000,
        stock:5,
        categoria: "tortas",
        image:"https://www.recetasnestle.com.ar/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/35f1fb00fc30fb33fa09a0528c87a2c2.jpg?itok=je0vGI5p"

    },
    {id:3,
        nombre:" Alfajor ",
        precio:3000,
        stock:10,
        categoria: "alfajor",
        image:"https://es.pampadirect.com/product_images/uploaded_images/alfajor-negro-relleno-de-dulce-de-leche.jpg"

    },
    {id:4,
        nombre:"Mouse",
        precio:3000,
        stock:10,
        categoria: "tortas",
        image:"https://cdn.recetasderechupete.com/wp-content/uploads/2021/05/Tarta-mousse-de-chocolate-1200x828.jpg"

    },
    {id:5,
        nombre:"cupcakes",
        precio:3000,
        stock:10,
        categoria: "alfajor",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07h-wpR8mNt0dtx5LqKEic4x3f-REQfqqaQ&s"

    },
]

export const getProducts= ()=>{
    return new Promise( (resolve, reject) =>  {
    setTimeout (() => {
        resolve( items)
    }, 500);
    })
}

export const getProductById = (id)=>{
    return new Promise( (resolve, reject) =>  {
    setTimeout (() => {
        resolve( items.find (e=> e.id === id*1))
    }, 3000);
    })
}
