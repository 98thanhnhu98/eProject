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

    $(document).ready(function(){
        $(".button").click(function(){
            $("#dp_menu > ul").toggle(500);
            $("#dp_menu").toggleClass("show");
        });
    });


    function myFunction() {
        var x = document.getElementById("menu-child-cart");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function myFunctiontwo() {
        var x = document.getElementById("menu-child-account");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function myFunctionthree() {
        var x = document.getElementById("menu-child-favorite");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }