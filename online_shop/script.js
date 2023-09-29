let cart_btn = document.querySelectorAll('.cart-button')
let total = 0
for (let i=0; i < cart_btn.length; i += 1){
    cart_btn[i].addEventListener('click', function(){
        let amount = document.querySelector('.cart-amount')
        amount.innerHTML = +amount.innerHTML + 1
        total += item_prices[i]
        if (cart.innerHTML != 'Корзина'){
            cart.innerHTML = total
        }
    })
}