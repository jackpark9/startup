// Initialize Google Maps
let map;
let markers = [];

function initMap() {
  const vancouver = { lat: 49.2827, lng: -123.1207 }; // Default center

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: vancouver,
  });

  // Add sample markers
  addMarker({ lat: 49.2827, lng: -123.1207 }, "Downtown Apartment");
  addMarker({ lat: 49.2681, lng: -123.1689 }, "Kitsilano Apartment");
}

function addMarker(position, title) {
  const marker = new google.maps.Marker({
    position,
    map,
    title,
  });
  markers.push(marker);
}

function focusOnLocation(lat, lng) {
  map.setZoom(14);
  map.setCenter({ lat, lng });
}

function searchListings() {
  const query = document.getElementById("search-input").value.toLowerCase();
  alert(`Search feature is not implemented yet. Query: ${query}`);
}

// Load map on page load
window.onload = initMap;
