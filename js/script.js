const metaPrice = 0.11,
    minAmount = 10,
    amountQuan = 10,
    totalAmount = document.querySelector('#total-amount'),
    totalPrice = document.querySelector('#total-price'),
    amount = document.querySelector('#amount'),
    headerBtn = document.querySelector('.header-inner__btn');


function minusAmount(){
    if (+amount.innerHTML > minAmount){
        amount.innerHTML = +amount.innerHTML - amountQuan;
        reTotal(+amount.innerHTML); 
    }
}

function plusAmount(){
    amount.innerHTML = +amount.innerHTML + amountQuan;
    reTotal(+amount.innerHTML); 
}

function reTotal(amount){
    totalAmount.innerHTML = amount * 5 + ' $';
    totalPrice.innerHTML = amount * metaPrice + ' ETH';
}

headerBtn.onclick = function(){
    this.classList.toggle('active');
    document.body.classList.toggle('active');

};