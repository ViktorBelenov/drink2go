
var map = L.map('map').setView([59.968137, 30.316272], 25);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map);


var customIcon = L.icon({
    iconUrl: '../img/map/map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
});

var marker = L.marker([59.968137, 30.316272], { icon: customIcon }).addTo(map);
