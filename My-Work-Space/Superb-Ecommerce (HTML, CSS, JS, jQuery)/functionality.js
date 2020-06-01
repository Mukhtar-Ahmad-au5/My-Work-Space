var countDownDate = new Date("June 3, 2020 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


$("#cart").click(function () {
    $(".sidebar").css("right", "0")
})
$(".fa-angle-double-right").click(function () {
    $(".sidebar").css("right", "-25%")
})

$(".fa-heart").click(function () {
    if ($(this).css("color") == "rgb(255, 255, 255)") {
        $(this).css("color", "red")
    }
    else {
        $(this).css("color", "white")
    }
});

$(".fa-shopping-cart").click(function () {
    if ($(this).css("color", "white")) {
        $(this).css("color", "skyblue");
    }
});

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

$(".cart").click(function (e) {
    e.preventDefault();
    var getImg = $(this).parents(".card").children(".zoomImg").children("img").attr("src");
    var getName = $(this).parents(".card-body").children(".card-title").text()
    var getPrice = $(this).parents(".card-body").children(".card-text").text()
    var cartlist = Array.from($('.sidebar .card')).map((ele) => (
        ele && ele.children[0].children[0].children[0].getAttribute("src")
    ))
    var qtylist = Array.from($('.sidebar .card')).map((ele) => (
        ele && ele.children[0].children[1].children[0].children[3].innerText.split(":")[1]
    ))
    let qty

    if (getImg !== undefined) {
        let i = cartlist.indexOf(getImg)
        if (i > -1) {
            $('.sidebar .card')[i].remove()
            qty = Number(qtylist[i]) + 1
            console.log(qtylist)
            addtocart(getImg, getName, getPrice, qty)
        }
        else {
            qty = 1
            addtocart(getImg, getName, getPrice, qty)
        }
    }
}); 

$(".checkout .btn").click(function(){
    let done = `<div id="orderplaced" style="font-size:x-large" class="text-center mb-2">Thank You, your order has been placed</div>
    <div class="modalbox success col-md-12 text-center center animate" role="alert">
    <div class="icon">
        <i class="fa fa-check-circle"></i>
    </div>
</div>`
    $("#sidebarScroll").empty();
    $(".fa-shopping-cart").css("color", "white")
    $("#sidebarScroll").append(done);
})

function myFunction2() {
    var x = document.getElementById("snackbar2");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function addtocart(getImg, getName, getPrice, qty) {
    var newItem = `<div class="card mb-3 ml-3" style="width: 90%; height: 100px;">
   <div class="row no-gutters">
     <div class="col-md-4">
       <img height="100" src=${getImg} class="card-img" alt="...">
     </div>
     <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title mb-0">${getName}</h5>
        <span class="trash"><i class="fa fa-trash mt-4" aria-hidden="true"></i></span>
        <span class="text-muted">${getPrice}</span><p class="card-text text-muted"><small>Qty:${qty}</small></p>
       </div>
     </div>
   </div>
 </div>`
    myFunction()
    $("#orderplaced").remove()
    $(".modalbox").remove()
    var Sidebar = $("#sidebarScroll")
    Sidebar.append(newItem)
    $(".trash").click(function(){
        $(this).parents(".card").remove();
        myFunction2();
    })
}
    
