const inputData= document.getElementById("data")
const botao= document.getElementById("consultar")
const caixaResul= document.getElementById("resultado")
const dataBase = new Date(2026, 4, 31)


console.log(inputData)
console.log(botao)
console.log(caixaResul)
console.log(dataBase)


botao.addEventListener("click", function() {

    caixaResul.textContent = inputData.value;
    caixaResul.style.backgroundColor = "red";
     const partes = inputData.value.split("-");

    const dataEscolhida = new Date(
        partes[0],
        partes[1] - 1,
        partes[2]
    );
    console.log(dataEscolhida)
    const diferenca = dataEscolhida - dataBase;
    const diasPassados = diferenca / (1000 * 60 * 60 * 24);
    console.log(diasPassados)
    
    const ciclo = diasPassados % 4;

console.log(ciclo);

if(ciclo===0){
    caixaResul.textContent = "Turno A (1/2)"
    caixaResul.style.backgroundColor = "red";
}else if(ciclo===1){
    caixaResul.textContent = "Turno A (2/2)"
    caixaResul.style.backgroundColor = "red";
}else if(ciclo===2){
    caixaResul.textContent = "Turno B (1/2)"
    caixaResul.style.backgroundColor = "green";
}else{
    caixaResul.textContent = "Turno B (2/2)"
    caixaResul.style.backgroundColor = "green";
}
});