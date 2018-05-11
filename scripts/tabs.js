$(document).ready(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    var x = 1;
    $(".form-input input").attr('value', x);
    $(".up").click(function () {
        $(".form-input input").attr('value', x++);
    });
    $(".down").click(function () {
        $(".form-input input").attr('value', x--);
    });
    $(".first").click(function(){
        $(".four").removeClass("active");
        $(this).addClass("active");
        $(".main-img img").attr("src", "images/product-10-421x388.jpg");
    })
    $(".second").click(function(){
        $(".first").removeClass("active");
        $(this).addClass("active");
        $(".main-img img").attr("src", "images/product-11-421x388.jpg");
    })
    $(".third").click(function(){
        $(".second").removeClass("active");
        $(this).addClass("active");
        $(".main-img img").attr("src", "images/product-12-421x388.jpg");
    })
    $(".four").click(function(){
        $(".third").removeClass("active");
        $(this).addClass("active");
        $(".main-img img").attr("src", "images/product-13-421x388.jpg");
    })
    
})