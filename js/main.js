function initMap() {
var alexandria = { lat: 31.2001, lng: 29.9187 }; // Coordinates for Alexandria, Egypt
var newyork = { lat: 40.7128, lng: -74.0060 }; // Coordinates for New York City, USA

// Create the first map centered on Alexandria
var map1 = new google.maps.Map(document.getElementById("map1"), {
    center: alexandria,
    zoom: 20,
});

// Create the second map centered on New York City
var map2 = new google.maps.Map(document.getElementById("map2"), {
    center: newyork,
    zoom: 10,
});

// Create a marker for Alexandria on the first map
var marker1 = new google.maps.Marker({
    position: alexandria,
    map: map1,
    title: "Alexandria, Egypt",
});

// Create a marker for New York City on the second map
var marker2 = new google.maps.Marker({
    position: newyork,
    map: map2,
    title: "New York City, USA",
});

// Set the bounds to include both markers on the first map
var bounds1 = new google.maps.LatLngBounds();
bounds1.extend(marker1.getPosition());
bounds1.extend(marker2.getPosition());
map1.fitBounds(bounds1);

// Set the bounds to include both markers on the second map
var bounds2 = new google.maps.LatLngBounds();
bounds2.extend(marker1.getPosition());
bounds2.extend(marker2.getPosition());
map2.fitBounds(bounds2);
}

// Call the initMap function when the page loads
window.onload = function () {
initMap();
};


