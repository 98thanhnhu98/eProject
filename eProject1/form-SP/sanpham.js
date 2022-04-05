$(document).ready(function (){
    $(".image-silder").slick({
        slidesToShow: 4,
        infinite:true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><</button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
        dots : false,
    })
})

//menu cart
function myFunction() {
    var x = document.getElementById("menu-child-cart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//menu account
function myFunctiontwo() {
    var x = document.getElementById("menu-child-account");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const btn = document.querySelectorAll(".btn-cart")

//add to cart
btn.forEach((function (button , index){
    button.addEventListener("click",function (event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".name").innerText
        // console.log(productImg,productName)
        addcart(productImg,productName)
    })
}))
function addcart(productImg,productName) {
    var addtr = document.createElement("li")
    var liname = '<a href="sanpham.html"><li class="child-cart2">\n' +
        '                                <div class="row1-cart2">\n' +
        '                                    <img src="'+productImg+'">\n' +
        '                                </div>\n' +
        '                                <div class="row2-cart2">\n' +
        '                                    <p>'+productName+'</p>\n' +
        '                                </div>\n' +
        '                        </li></a>'
    addtr.innerHTML = liname
    var cartTable = document.querySelector("#menu-child-cart")
    cartTable.append(addtr)
}

//menu favorite
function myFunctionthree() {
    var x = document.getElementById("menu-child-favorite");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const btnt = document.querySelectorAll(".tick")


//add to favorite
btnt.forEach((function (button , index){
    button.addEventListener("click",function (event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector(".name").innerText
        // console.log(productImg,productName)
        addFavorite(productImg,productName)
    })
}))
function addFavorite(productImg,productName) {
    var add = document.createElement("li")
    var li = '<a href="sanpham.html"><li class="child-cart2">\n' +
        '                                <div class="row1-cart2">\n' +
        '                                    <img src="'+productImg+'">\n' +
        '                                </div>\n' +
        '                                <div class="row2-cart2">\n' +
        '                                    <p>'+productName+'</p>\n' +
        '                                </div>\n' +
        '                        </li></a>'
    add.innerHTML = li
    var cartTable = document.querySelector("#menu-child-favorite")
    console.log(cartTable)
    cartTable.append(add)
}
