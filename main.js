const nomes = ["Afonso", "Henriques", "Lagedo"]
nomes.push("Silva")
const lista = document.getElementById("lista")

for (let nome of nomes){
    lista.innerHTML += `<li>${nome}</li>`  
}
