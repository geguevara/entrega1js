const arrPizzas=[
    {id:1, 
     nombre:'Muzzarella',
     ingredientes:['salsa de tomate', 'queso', 'aceitunas'],
     precio:850
    },
    {id: 2,
    nombre:'Napolitana',
    ingredientes:['salsa de tomate', 'queso', 'anchoas', 'ajo'],
    precio:950
    },
    {id: 3, 
    nombre:'Fugazzeta',
    ingredientes:['cebolla', 'muzzarella', 'parmesano'],
    precio:1090
    },
    {id:4, 
    nombre:'Pepperoni',
    ingredientes:['salsa de tomate', 'queso', 'salame', 'albahaca'],
    precio:1200
    },
    {id:5,
     nombre:'Calzone',
     ingredientes:['tomate', 'queso', 'aceitunas', 'huevo', 'cebolla'],
     precio:1050
    },
    {id:6, 
    nombre:'Hawaina',
    ingredientes:['salsa de tomate', 'queso', 'anana'],
    precio:1150
    }
];

//Pizzas con id impar
const idImpar = arrPizzas.filter ( producto => producto.id % 2 !==0)
idImpar.forEach (producto =>{
    console.log(`La pizza ${producto.nombre} tiene id impar`)
});

//pizza < $600
const precioMenor= (producto, valor) => producto.precio < valor;
const productosMenor = (precio) => {
   arrPizzas .some (producto => precioMenor (producto, precio))
    ? console.log(`Hay pizzas que valgan menos de $ ${precio}`)
    : console.log(`No hay pizzas que valgan menos de $ ${precio}`)
}
productosMenor(600);

//El nombre de c/pizza con su precio
const pizzaPrecio = arrPizzas.filter (producto => producto.nombre && producto.precio)
pizzaPrecio.forEach (producto =>{
    console.log(`La ${producto.nombre} tiene un precio de $${producto.precio}`)
})

//Ingredientes de cada pizza
arrPizzas.forEach ( (producto) =>{
    console.log(`${producto.nombre} consta de estos ingredientes:`);
    producto.ingredientes.forEach( (i) =>{
        console.log(`  ${i}`)
    })
}
)