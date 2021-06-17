(function(){
    console.log(`Chamada imediatamente`);
    })();

let pessoa = {
primeiroNome: "Marcelo",
segundoNome: "Collares"
};

(function(){
console.log(`${pessoa.primeiroNome} ${pessoa.segundoNome}`);
})(pessoa);