$(document).ready(function(){
    let slide1 = $("#slide1");
    let slide2 = $("#slide2");
    let slide3 = $("#slide3");

    for (let i = 0; i < 10; i++) {
        slide1.animate({ left: '30%' }, 5000);
        slide1.animate({ left: '-50%' }, 5000);
        slide1.animate({ left: '150%' }, 0);

        // slide2.animate({ left: '30%' }, 5000);
        // slide2.animate({ left: '-50%' }, 5000);
        // slide2.animate({ left: '150%' }, 0);

        // slide3.animate({ left: '30%' }, 5000);
        // slide3.animate({ left: '-50%' }, 5000);
        // slide3.animate({ left: '150%' }, 0);

    }
});
