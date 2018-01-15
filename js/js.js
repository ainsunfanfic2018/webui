$(document).ready(function () {

    $("#img1").hide();

    $("h1").click(function () {
        $("h2").slideToggle(2000);
        $("#img1").slideToggle(2000);

    });

    $("h4").click(function () {
        $("#img1").slideToggle(1000);

    });
});