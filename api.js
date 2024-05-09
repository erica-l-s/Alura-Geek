async function getProduct() {
    try {
        const response = await fetch("http://localhost:3000/produtos")
        const produtos = await response.json()
        console.log(produtos)
    return produtos
        
    } catch (error) {
        console.error("Erro ao buscar produto", error)
    }
  
    
}

async function postProduct(imagem, nome, preco) {
    try {
        const response = await fetch("http://localhost:3000/produtos",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                imagem,
                nome,
                preco
            })
        })
        const produtos = await response.json()
        console.log(produtos)
    return produtos
        
    } catch (error) {
        console.error("Erro ao cadastrar produto", error)
    }
  
    
}

export const api = {
    getProduct,
    postProduct
}
