// What is the DOM
// What is the Browser Dom
// What is the HTML Dom
// What is DOM Node
// When an HTML document is loaded into a web browser, it becomes a document object.
// What is the document Node The document object is the root node of the HTML document and the "owner" of all other nodes:
// (element nodes, text nodes, attribute nodes, and comment nodes).
// This is important The document object provides properties and methods to access all node objects, from within JavaScript.
// This is important  The document is a part of the Window object and can be accessed as window.document.
// Certain types of nodes inherit methods and properties that others do not
// Check out the methods and properties of the DOM Api for the document  http://www.w3schools.com/jsref/dom_obj_document.asp
// Here are more examples of properties and methods available to elements http://www.w3schools.com/jsref/dom_obj_all.asp


$(document).ready(function() {

    // jQuery Example

    //var sideOut =   $('.side-slideout');
    //    sideOut.hide();

    //$('#menu').click(function(){
    //    var isShown =  sideOut.is(':visible');
    //   if(isShown ){
    //       sideOut.hide(300)
    //   }else {
    //       sideOut.show(300)
    //   }
    //});

    // Pure Javascript

    var slideOutMenu = document.querySelector('.side-slideout'),
        menuButton = document.getElementById('menu');

    function showMenu() {
         slideOutMenu.classList.add('showMenu');
         slideOutMenu.classList.remove('hideMenu');
         slideOutMenu.classList.remove('hideDefault');

    }

    function hideMenu(){
        slideOutMenu.classList.add('hideMenu');
        slideOutMenu.classList.remove('showMenu');
        slideOutMenu.classList.add('hideDefault');
    }

    menuButton.addEventListener('click', function(){
        var isMenuShown = slideOutMenu.classList.contains('showMenu');
            if(isMenuShown) hideMenu();
            if(!isMenuShown) showMenu();

    })



});