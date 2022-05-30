//array contain all images

var slideImages = ["image/1.jpg", "image/2.jpg", "image/3.jpg"]

//function slideShow
//expression function
var i = 0;
var slide = function() {

    document.slideShow.src = slideImages[i];


    if (i < slideImages.length - 1)
        i++;
    else {
        i = 0;
    }

    setTimeout("slide()", 1000);
}

slide();




















































//