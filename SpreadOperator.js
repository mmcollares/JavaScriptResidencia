let objetoIteravel = [10, 3, 4, 9, 10];
let objetoIteravel2 = [9, 6, 1];

function minhaFuncao(x, y, ...z){
    console.log("X: ", x);
    console.log("Y: ", y);
    console.log("Z: ", ...z);
}

minhaFuncao(...objetoIteravel, 4, 5, 4, 3, 2, 7)

//minhaFuncao(objetoIteravel[0], objetoIteravel[1], objetoIteravel[2]);

//var juncao = [8, 0, ...objetoIteravel, 34, 2, ...objetoIteravel2, 90, 2];



//console.log(...juncao);

//[a, b, ...objetoIteravel] = [1, 2, 3, 4, 5];