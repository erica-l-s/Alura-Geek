import {api} from "./api.js"

const lista = document.querySelector("[data-lista]")

function card(imagem, nome, preco){
    const produto = document.createElement("div")
    produto.className = "card-produtos"

    produto.innerHTML = `
    <img src="${imagem}" class="img-card">
    <p class="nome-produto">${nome}</p>
    <div class="precos">
    <p class="valor">R$ ${preco}</p>
    <i class="fa fa-trash-o" style="font-size:24px"></i>`
   
return produto
}

async function listCard(){
const cardProduto = await api.getProduct()
cardProduto.forEach(elemento => lista.appendChild(card(elemento.imagem, elemento.nome, elemento.preco)))
}
listCard()

