// leaflet map
const mymap = L.map('mapid', {
    maxZoom: 18,
    minZoom: 10,
    scrollWheelZoom: "center",
    dragging: false,
}).setView([45.544798, 13.726774], 17);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution}).addTo(mymap);

const toothIcon = L.divIcon({
    html: '<i class="fas fa-tooth fa-3x" style="color: #D02E29"></i>',
    iconSize: [20, 20],
    className: 'mapIcon'
});

L.marker([45.544798, 13.726774], {
    icon: toothIcon
}).addTo(mymap).bindPopup('Zobozdravstvena ordinacija<br>Janez Uran dr. dent. med.')
