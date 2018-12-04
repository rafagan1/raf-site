'use strict';
// Return if no JavaScript
(function() {
  if (typeof document.querySelector === 'undefined') {
    return;
  }

  var html = document.querySelector('html');
  html.classList.remove('nojs');
  html.classList.add('js');

  document.addEventListener('DOMContentLoaded', function(e){
    console.log('DOM loaded');

    //=====================NAVIGATION from class demo
    var navigation = document.querySelector('#navigation');
    var nav_list = document.querySelector('.navi');

    // Build the outer heading element
    var nav_heading = document.createElement('h2');
    // Build the inner anchor/link element
    var menu_link = document.createElement('a');
    menu_link.textContent = 'Menu';
    menu_link.setAttribute('id','menu-button');
    menu_link.setAttribute('href','#null');
    menu_link.setAttribute('tabindex', '1');

    // Append the menu_link to the h2 element
    nav_heading.append(menu_link);

    // Finally, append the nav_heading to the nav element
    navigation.insertBefore(nav_heading,nav_list);

    // Listen for clicks on #menu-button and toggle the
    // visible class
    var menu_button = document.querySelector('#menu-button');
    menu_button.addEventListener('click', function(e) {
      nav_list.classList.toggle('visible');
      e.preventDefault();
    });

    // ===============Image gallery
    // Get list of all images
    var trekies = document.querySelectorAll(".gallery li");
  //  console.log(trekies.length);
    for (var i = 0; i < trekies.length; i++) {

      var trek = trekies[i];
      // Create button for each image and add text
      // to the button
      var trek_b = document.createElement('button');
      trek_b.textContent='Click image for message';

      // Add a class attribute to each button
      trek_b.setAttribute('class','treky');

      // Get the id of the list item associated with
      // each image and set a corresponding id on the
      // newly ceated button.
      switch(trek.id) {
      case "enterprise":
        trek_b.setAttribute('id','trek1');
        break;
      case "spock":
        trek_b.setAttribute('id','trek2');
        break;
      case "voy-side":
        trek_b.setAttribute('id','trek3');
        break;
      default:
        console.log('Invalid button id');
        return;
      } // switch

      // Add the newly created button to the list item
      trek.append(trek_b);
    }

    // Return if not on tvland page
    if (trekies.length == 0) {
      return;
    }
    // Get the gallery of star trek images
    var gallery = document.querySelector('.gallery');

    // Listen for clicks on ANY element in the gallery
    gallery.addEventListener('click', function(event) {
      // Get out if anything other than an image or
      // the associated buttonis clicked
      if (event.target.parentNode.tagName !== 'LI') {
        return;
      }

      // Get a collection of all the list items...
      var list_items = document.querySelectorAll('.gallery li');

      // loop through them to remove any existing focus class
      for (var i = 0; i < list_items.length; i++) {
        list_items[i].className = "";
      }
      // Finally, set the focus class on the target image's parent
      // list item:
      event.target.parentNode.className = 'focus';

      // Diagnostic: log the tag name of the parent node that's been clicked
      console.log(event.target.parentNode.tagName);

      // Apply logic to each image identified by the id tag
      // on each associated list item
      //console.log(event.target.parentNode.id);
      switch (event.target.parentNode.id) {
      case "enterprise":
        // Get button (by id) below each image in the list
        // and add replace the text on the button.
        var trek_button = document.getElementById("trek1");
        if (trek_button.textContent == "Click image for message") {
          trek_button.textContent = 'To infinity and beyond!!!';
        } else {
          trek_button.textContent = "Click image for message";
        }
        break;
      case "spock":
        trek_button = document.getElementById("trek2");
        if (trek_button.textContent == "Click image for message") {
          trek_button.textContent = 'Live Long and Prosper';
        } else {
          trek_button.textContent = "Click image for message";
        }
        break;
      case "voy-side":
        trek_button = document.getElementById("trek3");
        if (trek_button.textContent == "Click image for message") {
          trek_button.textContent = 'Space, the final frontier';
        } else {
          trek_button.textContent = "Click image for message";
        }
        break;
      default:
        break;
      } // switch
    }); // Add addEventListener- click
  }); // DOM loaded
})();
