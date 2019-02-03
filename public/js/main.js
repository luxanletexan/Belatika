$(function () {

    let headerElt = document.getElementById('belatika-header');
    headerElt.addEventListener('mousemove', function (e) {
        moveSpot(headerElt, {x: e.clientX, y: e.clientY});
    });
    headerElt.addEventListener('mouseleave', function () {
        moveSpot(headerElt, {x: 0, y: 0});
    });
    document.getElementById('logo-link').addEventListener('mousemove', function (e) {
        moveSpot(headerElt, {x: e.clientX, y: e.clientY});
    });

    let navElt = document.getElementById('belatika-nav');
    navElt.addEventListener('mousemove', function (e) {
        moveSpot(navElt, {x: e.clientX, y: e.clientY - navElt.getBoundingClientRect().y });
    });
    navElt.addEventListener('mouseleave', function () {
        moveSpot(navElt, {x: 0, y: 0});
    });

    /*$(window).scroll(function () {
        moveSidenav();
    });

    moveSidenav();*/

    function moveSpot(domElt, coord) {
        domElt.style.backgroundPosition = 'calc(' + coord.x + 'px + 100%) calc(' + coord.y + 'px + 100%)';
    }

    function moveSidenav(){
        let scroll = $(document).scrollTop();
        let $belatikaNav = $('#belatika-nav');
        let scrollMax = $('.belatika-content').height() - $belatikaNav.height();
        $belatikaNav.css('margin-top', Math.min(scroll, scrollMax) + 'px');
    }
});

