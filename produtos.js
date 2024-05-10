import {api} from "./api.js"

const lista = document.querySelector("[data-lista]")

function card(imagem, nome, preco,id){
    const produto = document.createElement("div")
    produto.className = "card-produtos"

    produto.innerHTML = `
    <img src="${imagem}" class="img-card">
    <p class="nome-produto">${nome}</p>
    <div class="precos">
    <p class="valor">R$ ${preco},00</p>
    <i id="delete-${id}" class="fa fa-trash-o delete-icon" style="font-size:24px" data-product-id="${id}"></i>`
   
    const deleteIcon = produto.querySelector(`#delete-${id}`);
    deleteIcon.addEventListener('click', async function(_event) {
        const productId = deleteIcon.getAttribute('data-product-id');
        const deleted = await api.deleteProduct(productId);
        if (!deleted) {
            console.error("Erro ao deletar produto.");
        }
    });
    
    return produto

}

async function listCard(){
lista.innerHTML = ""; 
const cardProduto = await api.getProduct()
cardProduto.forEach(elemento => lista.appendChild(card(elemento.imagem, elemento.nome, elemento.preco, elemento.id)))
}
listCard()

