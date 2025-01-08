// Initialize Google Maps
let map;
let markers = [];

function initMap() {
  const vancouver = { lat: 49.2827, lng: -123.1207 }; // Default center

  // Create map centered on Vancouver
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: vancouver,
  });

  // Add sample markers
  addMarker({ lat: 49.2827, lng: -123.1207 }, "1-Bedroom Apartment in Downtown");
  addMarker({ lat: 49.2681, lng: -123.1689 }, "2-Bedroom in Kitsilano");
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

// Load map after page load
window.onload = initMap;