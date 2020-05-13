$(document).ready(function () {
    $('.editBtn').click(function() { 
        $('#userupdate').val($(this)[0].id)
    });

    $(".toast").toast("show")
});