$(document).ready(function () {
    var x = 1;
    $(".counter .form-input").attr('value', x);
    $(".up").click(function () {
        $(".counter .form-input").attr('value', x++);
    });
    $(".down").click(function () {
        $(".counter .form-input").attr('value', x--);
    });
})