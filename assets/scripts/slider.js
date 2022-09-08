function build(){
    var images = ['assets/img/1.jpg','assets/img/2.jpg','assets/img/3.png','assets/img/4.jpg','assets/img/5.jpg'];
    jQuery.each(images, function(i, val){
        $('#photocontainer').append('<img src="' + val + '">');
    });
    $('#photocontainer img:eq(0)').addClass('active');
    $('#photocontainer img').click(function(){
        nextImg();
    });
}

function nextImg(){
    if ($('#photocontainer img.active').is('#photocontainer img:last-child')) {
        $('#photocontainer img.active').removeClass('active');
        $('#photocontainer img:eq(0)').addClass('active');
    } else {
        $('#photocontainer img.active').removeClass('active').next('img').addClass('active');
    }

}

$(document).ready(function(){
    build();  
});


$('img').atrr('src', 'new.png');

