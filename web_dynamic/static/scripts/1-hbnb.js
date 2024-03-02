$(document).ready(function(){
    // Initialize variable to store checked amenities
    var checkedAmenities = [];

    // Listen for changes on each input checkbox tag
    $('input[type=checkbox]').change(function(){
        // Get Amenity ID and name from the DOM
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, store the Amenity ID
        if ($(this).is(':checked')) {
            // Add Amenity ID to the list
            checkedAmenities.push(amenityId);
        } else {
            // If the checkbox is unchecked, remove the Amenity ID from the list
            var index = checkedAmenities.indexOf(amenityId);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag inside the div Amenities with the list of checked Amenities
        $('#amenities h4').text(checkedAmenities.join(', '));
    });
});
