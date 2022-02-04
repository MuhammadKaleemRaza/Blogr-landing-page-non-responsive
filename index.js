let productBox = document.querySelector('.product-box')
let productArr = document.querySelector('#pro-arr')
let productList = document.getElementsByClassName('product-box-list')
let comArr = document.getElementById('com-arr')
let comBox = document.querySelector('.company-box')
let connArr = document.getElementById('conn-arr')
let connBox = document.querySelector('.connect-box')


productArr.addEventListener('click', function () {
    if (productBox.style.height === '0px') {
        productBox.style.height = '120px'
    } else if (productBox.style.height = '120px') {
        productBox.style.height = '0px'
    }

    for (let i = 0 ; i < 5; i++) {   
        let elem = document.getElementsByClassName('product-box-list')
        if (elem[i].style.opacity === '0') {
            elem[i].style.opacity = '.9'
        }
        else if (elem[i].style.opacity = '.9') {
            elem[i].style.opacity = '0'
        }
    }

})

comArr.addEventListener('click', function() {
    if (comBox.style.height === '0px') {
        comBox.style.height = '70px'
    } else if (comBox.style.height = '70px') {
        comBox.style.height = '0px'
    }

    for (let i = 0 ; i < 4 ; i++) {
        let elem = document.getElementsByClassName('com-box-list')
        if (elem[i].style.opacity === '0') {
            elem[i].style.opacity = '.9'
        } else if (elem[i].style.opacity = '.9') {
            elem[i].style.opacity = '0'
        }
    }
})

connArr.addEventListener('click', function() {
    if (connBox.style.height === '0px') {
        connBox.style.height = '70px'
    } else if (connBox.style.height = '70px') {
        connBox.style.height = '0px'
    }

    for (let i = 0 ; i < 4 ; i++) {
        let elem = document.getElementsByClassName('conn-box-list')
        if (elem[i].style.opacity === '0') {
            elem[i].style.opacity = '.9'
        } else if (elem[i].style.opacity = '.9') {
            elem[i].style.opacity = '0'
        }
    }
})