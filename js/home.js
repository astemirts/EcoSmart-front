const HOME_LINK = "home.html";
const START_LINK = "start.html";
const GARBAGE_LINK = "garbage.html";


function load_start() {
    if (window.sessionStorage.getItem("session") === "true") {
        if (window.sessionStorage.getItem("currentView") != null) {
            load_in(window.sessionStorage.getItem("currentView"), "main_content");
            load_shared("menu_elements.html", "menu_elements");
        }
    } else {
        load_view(START_LINK, "main_content");
    }
}

function disconnect() {
    delete_out("menu_elements");
    destroy_session();
    load_start();
}
<<<<<<< HEAD


function load_home() {
    load_shared("menu_elements.html", "menu_elements");
    load_view(HOME_LINK, "main_content");
=======
function load_home(){
  load_shared("menu_elements.html","menu_elements");
  load_view(HOME_LINK,"main_content");
>>>>>>> 20f2807dc8b1df7b3baeb3772dab10ec9043d9f3
}

function load_shared(name, id) {
    load_in("shared/" + name, id);
}

function load_view(name, id) {
    window.location.hash = name;
    window.sessionStorage.setItem("currentView", "views/" + name);
    load_in("views/" + name, id);
}

function load_in(link, id) {
    delete_out(id);
    $.post(link, function (data) {
        $("#" + id).html(data);
    });
}

function delete_out(id) {
    $("#" + id).html("");
}

function load_garbage_page() {
    load_view(GARBAGE_LINK, "main_content");
}

function load_air_page() {
    load_view("air.html", "main_content");
}

<<<<<<< HEAD
function add_details(trash_id) {
    let dt = {id: trash_id, filling: parseFloat($("#txt_" + trash_id).val())}
    $.ajax({
        type: 'POST',
        url: 'http://172.16.3.118:5000/garbagesData',
        data: JSON.stringify(dt),
        error: function (e) {
            $('#modal-description').html("Echec d'ajout des données!");
            $('#modal1').modal('open');
        },
        success: function (data) {
            $('#modal-description').html("Données ajoutées avec succès");
            $('#modal1').modal('open');
        },
        dataType: "json",
        contentType: "application/json"
    });
=======
function add_details(trash_id){
  console.log($("#frng_"+trash_id).val())
  let dt = {id: trash_id, filling: parseFloat($("#frng_"+trash_id).val()/100.0)}
  $.ajax({
    type: 'POST',
    url: 'http://172.16.3.118:5000/garbagesData',
    data: JSON.stringify(dt),
    error: function(e) {
      alert("Echec d'ajout des données!")
    },
    success: function(data){
      alert("Données ajoutées avec succès!")
    },
    dataType: "text",
    contentType: "application/json"
  });
}

function add_garbage(lat,lng){
  let dt = {lat: lat, lng: lng}
  $.ajax({
    type: 'POST',
    url: 'http://172.16.3.118:5000/add',
    data: JSON.stringify(dt),
    error: function(e) {
      alert("Echec d'ajout de poubelle!")
    },
    success: function(data){
      alert("Poubelle ajoutée avec succès!")
    },
    dataType: "text",
    contentType: "application/json"
  });
  load_garbage_page();
}

function get_path(lt, lg){
  let dt = {latitude: lt, longitude: lg}
  $.ajax({
    type: 'POST',
    url: 'http://172.16.3.118:5000/route',
    data: JSON.stringify(dt),
    error: function(e) {
      alert("Echec d'obtention de la route!")
      console.log(JSON.stringify(dt))
    },
    success: function(data){
      console.log(data);
    },
    dataType: "text",
    contentType: "application/json"
  });
}

function delete_garbage(trash_id){
  let dt = {id: trash_id}
  $.ajax({
    type: 'DELETE',
    url: 'http://172.16.3.118:5000/garbages/'+trash_id,
    error: function(e) {
      alert("Echec de suppression de la poubelle!")
    },
    success: function(data){
      alert("Poubelle supprimée avec succès!")
      load_garbage_page();
    }
  });
>>>>>>> 20f2807dc8b1df7b3baeb3772dab10ec9043d9f3
}

function create_session() {
    window.sessionStorage.setItem("session", true);
}

function destroy_session() {
    window.sessionStorage.setItem("session", false);
}

<<<<<<< HEAD
function authentification() {
    create_session();
    load_home();
    return;
    let username = $("#username").val();
    let sha_password = sha256($("#password").val()).toUpperCase();
    let credentials = {username: username, hash: sha_password}
    $.ajax({
        type: 'POST',
        url: 'http://172.16.3.118:5000/auth',
        data: JSON.stringify(credentials),
        error: function (e) {
            $("#notifications").html("<b>Username ou mot de passe incorrects</b>");
        },
        success: function (data) {
            create_session();
            load_home();
        },
        dataType: "text",
        contentType: "application/json"
    });
=======
function authentification(){
  let username = $("#username").val();
  let sha_password = sha256($("#password").val()).toUpperCase();
  let credentials = {username: username, hash: sha_password}
  $.ajax({
    type: 'POST',
    url: 'http://172.16.3.118:5000/auth',
    data: JSON.stringify(credentials),
    error: function(e) {
      $("#notifications").html("<b>Username ou mot de passe incorrects</b>");
    },
    success: function(data){
      create_session();
      load_home();
    },
    dataType: "text",
    contentType: "application/json"
  });
>>>>>>> 20f2807dc8b1df7b3baeb3772dab10ec9043d9f3
}
