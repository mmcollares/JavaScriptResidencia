// let pessoas = [
//     {id: 1, nome: "Arthur", sobreNome: "Ranquine", alimento: "Churrasco" },
//     {id: 2, nome: "Tatiane", sobreNome: "Costa", alimento: "Escondidinho" },
//     {id: 3, nome: "Cristopher", sobreNome: "Costa", alimento: "Escalopinho" },
//     {id: 4, nome: "Arthur", sobreNome: "Vinagre", alimento: "Macarronada" },
//     {id: 5, nome: "Mariana", sobreNome: "Rodrigues", alimento: "Nhoque" }
//     ];

    
//     pessoas.map( ( pessoa ) => {
//             if(pessoa.nome === "Arthur"){
//                 if(pessoa.sobreNome === "Vinagre")
//                     return pessoa.alimento = "Salada";
//                 }
//              });

//     console.log(pessoas);

let elementos = ['1', '2', '3']

function convertInteiros(elemento){
    return parseInt(elemento, 10);
}

// console.log(elementos)

console.log( elementos.map(convertInteiros) )

console.log( ['4', '5', '6'].map(convertInteiros) )
    
    
    
    