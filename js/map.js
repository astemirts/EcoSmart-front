$.get("http://172.16.3.118:5000/garbages", data => {
    let map = L.map('map').setView([data[0].latitude, data[0].longitude], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution:    "'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, " +
                        "<a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, " +
                        "Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',",
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: "pk.eyJ1IjoibWFpbm5pbmUiLCJhIjoiY2sxeGg2cDQ3MGJtdjNvcWd4aWplMnFtMCJ9.6QkdiBXn6IMmw8MFEe455g"
    }).addTo(map);

    for (let i = 0; i < data.length; i++) {
        let marker = L.marker([data[i].latitude, data[i].longitude]).addTo(map);
        $.get("views/marker_popup.html", data => marker.bindPopup(data));
    }
});
