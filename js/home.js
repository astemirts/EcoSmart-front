function load_start(){
  load_in("views/start.html","main_content")
}

function load_home(){
  load_in("shared/menu_elements.html","menu_elements")
  load_in("views/home.html","main_content")
}

function load_in(link, id){
  $("#"+id).html("");
  $.post(link, function( data ) {
    $( "#"+id ).html( data );
  });
}

function load_garbage_page(){
  load_in("views/garbage.html","main_content")
}

function add_details(trash_id){
  let dt = {id: trash_id, filling: parseFloat($("#txt_"+trash_id).val())}
  $.ajax({
    type: 'POST',
    url: 'http://172.16.3.118:5000/garbagesData',
    data: JSON.stringify(dt),
    error: function(e) {
      console.log(e);
    },
    success: function(data){
        alert(data)
    },
    dataType: "json",
    contentType: "application/json"
  });
}

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
      alert("success")
      load_home();
    },
    dataType: "text",
    contentType: "application/json"
  });
}
