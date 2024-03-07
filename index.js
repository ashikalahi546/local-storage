const addProduct = () => {
    const productField = document.getElementById('product');
    const quentityField = document.getElementById('quentity');
    const product = productField.value;
    const quentity = quentityField.value;
    productField.value = '';
    quentityField.value = ''
    console.log(product,quentity);
    displayProduct(product,quentity);
    saveProductToLocalStorage(product,quentity)
}


const displayProduct = (product,quentity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quentity}`
    ul.appendChild(li)
    
}

const getStoredCart = () => {
const storedCart = localStorage.getItem('cart');
let cart = {};
if(storedCart){
cart = JSON.parse(storedCart)
}
return cart

}


const saveProductToLocalStorage = (product,quentity) => {
const cart = getStoredCart();
cart[product] = quentity;
const cartStringified = JSON.stringify(cart);
// console.log(cartStringified)
localStorage.setItem('cart',cartStringified)
}

const displayProductFromLocalStorage = () => {
    const saveCart = getStoredCart();
    console.log(saveCart)
    for(const product in saveCart){
        const quentity = saveCart[product]
        console.log(product,quentity)
        displayProduct(product,quentity)
    }

}
displayProductFromLocalStorage()



        