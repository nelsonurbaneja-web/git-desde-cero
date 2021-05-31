// let colores = [
//   'rojo',
//   'rojo',
//   'verde',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'amarrillo',
//   'verde',
//   'verde',
//   'azul',
//   'azul',
//   'azul',
//   'azul',
//   'blanco',
//   'negro',
//   'gris'
// ]

// const buscarRepetidos = () => {
//   let coloresRepetidos = {}
//   colores.map(color => {
//     coloresRepetidos[color] = !coloresRepetidos[color] ? 1 : coloresRepetidos[color] += 1
//   })
//   return Object.keys(coloresRepetidos)
//   .map(color => ({nameColor : color, repeat: coloresRepetidos[color]}))
//   .sort((a,b) => b.repeat - a.repeat)
//   .splice(0,5)
//   .map(color => color.nameColor)
// }

// console.log(buscarRepetidos())

const produts = [
  {
    name: 'leche',
    price: 12
  },
  {
    name: 'arroz',
    price: 4
  },
  {
    name: 'pera',
    price: 14
  },
]

const calcCosto = (produts) => {
  let sum = 0
  produts.map(product => {
    sum += product.price
  })

  return sum
}

console.log(calcCosto(produts))