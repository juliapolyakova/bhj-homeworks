const quantityControl = document.querySelectorAll('.product__quantity-control');
const productAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

for (let item of quantityControl) {
    item.addEventListener('click', changeQuantity);
}

for (let item of productAdd) {
    item.addEventListener('click', addProduct);
}

function changeQuantity(event) {
    let value = event.target.parentNode.querySelector('.product__quantity-value'); 
    let count = Number(value.innerText);

    if (this.classList.contains('product__quantity-control_inc')) {        
        value.textContent = count + 1;
    } else {
        if (count > 1) {
            value.textContent = count - 1;
        } else {
            value.textContent = 1;
        }
    }
}

function addProduct(event) {
    let id = event.target.closest('.product').dataset.id;
    let count = event.target.closest('.product').querySelector('.product__quantity-value').innerText;
    let image = event.target.closest('.product').querySelector('img').getAttribute('src');

    for (let item of cart.children) {
        if (item.dataset.id === id) {
            let productCount = item.querySelector('.cart__product-count');  
            productCount.textContent = Number((productCount).innerText) + Number(count);
        }
    }

    let content = `<div class="cart__product" data-id="${id}">
                  <img class="cart__product-image" src="${image}">
                  <div class="cart__product-count">${count}</div>
                  </div>`;


    cart.insertAdjacentHTML('beforeend', content);

}


