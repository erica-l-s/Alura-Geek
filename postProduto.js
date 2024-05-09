import { api } from "./api.js"

const formulario = document.querySelector("[data-formulario]")

async function criarProduto(event){
    event.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value
    const nome = document.querySelector("[data-nome]").value
    const preco = document.querySelector("[data-preco]").value

    try {
        await api.postProduct(imagem, nome, preco)
        limparCampos()
    } catch (error) {
        console.error("Erro ao criar produto", error)
    }
 
  
}

formulario.addEventListener("submit", event => criarProduto(event))

function limparCampos() {
    document.querySelector("[data-imagem]").value = ""
    document.querySelector("[data-nome]").value = ""
    document.querySelector("[data-preco]").value = ""
}

formulario.addEventListener("reset", event => limparCampos(event))