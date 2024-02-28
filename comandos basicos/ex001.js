// let objeto1 = {
//   name: {
//     first: "Vitor",
//     last: "Afonso"
//   },
//   age: 2
// }
// const b = [objeto1, objeto1, objeto1]
// console.log(b.map((item) => { return { ...item, house: "Casa" } }))


// window.confirm('está gotando de javascript?')
 
const nome = window.prompt('qual é seu nome?')
window.alert('É um prazer te conhcer, ' + nome + '!') //concatenação
document.write(`<h2>seu nome tem ${nome.length} letras</h2>`)

const n1 = Number(window.prompt('digite um numero'))//um dos jeitos de converter tipo
const n2 = Number(window.prompt('digite outro numero'))
const resultado = n1 + n2
window.alert(`o resultado é ${resultado}`) //interpolação com placeholder em uma template string

// ordem de precedência dos operadores aritiméticos 
// ()
// **
// *
// */%
// +-


title.style.backgroundColor = "#ed5"
title.style.display = "flex"
title.style.alignItems = "center"
title.style.justifyContent = "center"
