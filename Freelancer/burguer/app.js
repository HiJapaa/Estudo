let listProductHTML = document.querySelector('.listProduct')
let listCartHTML = document.querySelector('.listCart')
let iconCart = document.querySelector('.icon-cart')
let iconCartSpan = document.querySelector('.icon-cart span')
let body = document.querySelector('body')
let closeCart = document.querySelector('.close')
let scrollTop = document.querySelector('.fixed')
let checkOut = document.querySelector('.checkOut')
let products = []
let cart = []

// Navegar para o topo
scrollTop.addEventListener('click', () => {
    scrollTo(0, 0)
})


// Abrir e fechar o carrinho
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    if(products.length > 0) {
        products.map(item => {
            let newProduct = document.createElement('div')
            newProduct.dataset.id = item.id
            newProduct.classList.add('item')

            if(item.ingredients !== undefined) {
                if(item.obs !== undefined) {
                newProduct.innerHTML += `
                <h2>${item.title}</h2>
                <div class="price">${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}</div>
                <div>
                    <p>${item.ingredients}</p>
                    <p class="obs">${item.obs}</p>
                </div>
                <button onClick="teste()" class="addCart">+</button>
                `
                listProductHTML.appendChild(newProduct)
                } else {
                        newProduct.innerHTML += `
                        <h2>${item.title}</h2>
                        <div class="price">${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}</div>
                        <div>
                            <p>${item.ingredients}</p>
                        </div>
                        <button onClick="teste()" class="addCart">+</button>
                        `
                        listProductHTML.appendChild(newProduct)
                    }
            } else {
                newProduct.innerHTML += `
                        <h2>${item.title}</h2>
                        <div class="price">${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}</div>
                        <p></p>
                        <button onClick="teste()" class="addCart">+</button>
                        `
                        listProductHTML.appendChild(newProduct)

            }
            
        })
    }
}

listProductHTML.addEventListener('click', (e) => {
    let positionClick = e.target
    if(positionClick.classList.contains('addCart')) {
        let id_product = positionClick.parentElement.dataset.id
        addToCart(id_product)
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id)
    if(cart.length <= 0) {
        cart = [{
            product_id: product_id,
            quantity: 1
        }]
    } else if(positionThisProductInCart < 0) {
        cart.push({
            product_id: product_id,
            quantity: 1
        })
    } else {
        cart[positionThisProductInCart].quantity += 1
    }
    addCartToHTML()
    addCartToMemory()
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const addCartToHTML = () => {
    listCartHTML.innerHTML = ''
    let totalQuantity = 0
    if(cart.length > 0) {
        cart.map(item => {
            totalQuantity += item.quantity
            let newItem = document.createElement('div')
            newItem.classList.add('item')
            newItem.dataset.id = item.product_id
            let positionProduct = products.findIndex((value) => value.id == item.product_id)
            let info = products[positionProduct]
            listCartHTML.appendChild(newItem)
            newItem.innerHTML = `
                <div class="name">
                    ${info.title}
                </div>
                <div class="totalPrice">
                    ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(info.price * item.quantity)}
                </div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span> ${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `
        })
    }
    iconCartSpan.innerText = totalQuantity
}

listCartHTML.addEventListener('click', (e) => {
    let positionClick = e.target
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id
        let type = 'minus'
        if(positionClick.classList.contains('plus')) {
            type = 'plus'
        }
        changeQuantityCart(product_id, type)
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id)
    if(positionItemInCart >= 0) {
        let info = cart[positionItemInCart]
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity += 1
                break
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1
                if(changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity
                } else {
                    cart.splice(positionItemInCart, 1)
                }
                break
        }
    }
    addCartToHTML()
    addCartToMemory()
}

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data
        addDataToHTML()

        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
            addCartToHTML()
        }
    })
}
initApp()


function teste() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


// Formatar a mensagem!
const mandar = () => {

    let template = ''
    let total = 0
    
    cart.map((item)=> {
        let positionProduct = products.findIndex((value) => value.id == item.product_id)
        let info = products[positionProduct]
        template += `\n ${item.quantity}x  ${info.title}`
        total += info.price
    })

    let message = ''
    message = `🍔 Novo Pedido:
    ${template}
    \n Valor total: ${new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total)}
    `
    texto = window.encodeURIComponent(message)

    let PHONE_NUMBER = "5565992462901"
    let url = `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${texto}`

    alert('Envie junto do seu pedido a localização para entrega!')
    const win = window.open(url, '_blank')
    win.focus()

}

checkOut.addEventListener('click', mandar)