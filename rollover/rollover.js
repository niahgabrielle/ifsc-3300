"use strict";
$(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute
		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers for changing images
        $(img).mouseover( () => img.src = newURL );
        $(img).mouseout( () => img.src = oldURL);

    });
    

});