const mainContainer = document.querySelector('.mainContainer')

function listarProdutos(listaProduto){
    //PERCORRENDO ARRAY DE ITENS
    for(let i = 0; i < listaProduto.length; i++){
        //ACESSANDO CADA ITEM
        const item = listaProduto[i]
        //console.log(listaProduto[i])
        const cardItens = createCard(item)
        mainContainer.appendChild(cardItens)
    }
}
listarProdutos(data_base)

//1 FUNÇÃO PARA CRIAR O CARD DOS PRODUTOS
function createCard(itensTest){
//1 IMFORMAÇÕES DO PRODUTO    
    const imagem      = itensTest.img
    const name        = itensTest.nameItem
    const description = itensTest.description
    const value       = itensTest.value
    const cart        = itensTest.addCart
    const tag         = itensTest.tag
//2 CRIANDO ELEMENTOS DO CARD
    const divProduct = document.createElement("div");
    const divImgBg   = document.createElement("div");
    const figImg     = document.createElement("figure");
    const tagImg     = document.createElement("img");
    const divInfo    = document.createElement("div");
    const tagLink    = document.createElement("a");
    const tagName    = document.createElement("h3");
    const tagDesc    = document.createElement("p");
    const tagValue   = document.createElement("p");
    const tagBtn     = document.createElement("button");
    tagBtn.addEventListener('click', ()=>{
        adicionarCarrinho(itensTest)
        console.log("click")
    })
//3 ADICIONAR INFORMAÇÃO NAS TAGS CRIADAS
    tagImg.src = `${imagem}`
    tagLink.innerText = tag 
    tagLink.href = '#'
    tagImg.alt = name
    tagName.innerText = `${name}`
    tagDesc.innerText = `${description}`
    tagValue.innerHTML = `<strong>R$: ${value}</strong>`
    tagBtn.innerText = cart
//4 MONTAR O TEMPLATE DO CARD    
    divProduct.appendChild(divImgBg)
    divImgBg.appendChild(figImg)
    figImg.appendChild(tagImg)
    figImg.appendChild(divInfo)
    divImgBg.appendChild(figImg)
    divInfo.appendChild(tagLink)
    divInfo.appendChild(tagName)
    divInfo.appendChild(tagDesc)
    divInfo.appendChild(tagValue)
    divInfo.appendChild(tagBtn)
    
    

//5 ATRIBUINDO CLASSES PARAS AS TAGS
    tagImg.classList.add('product-image')
    divInfo.classList.add('product-info')
    tagLink.classList.add('product-tag')
    tagName.classList.add('product-name')
    tagDesc.classList.add('product-description')
    tagValue.classList.add('product-value')
    tagBtn.classList.add('addCart')
    divProduct.classList.add('product')
    divImgBg.classList.add('product-image-bg')
    tagImg.classList.add('product-image')
//6 RETORNA O CARD
    return divProduct
}

const carrinho = document.querySelector('.cart')
const empty = document.getElementsByClassName('.vazio')




function adicionarCarrinho(itensTest){
    carrinho.classList.remove("vazio")
    carrinho.classList.add(".empty-cart")
    const nomeItemCart = document.createElement('p');
    const imgItemCart = document.createElement('img');
    const valorItemCart = document.createElement('p');
    valorItemCart.innerText = `${itensTest.value}`;
    nomeItemCart.innerText = `${itensTest.nameItem}`;
    carrinho.appendChild(nomeItemCart);
    
}

/*const btnAddCart = document.querySelector('.addCart')
const cart = document.querySelector(".cart")


btnAddCart.addEventListener('click', function(){
    cart.classList.add(".empty-cart")
    console.log("clicou")
})*/