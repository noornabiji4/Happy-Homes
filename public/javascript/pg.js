pg = [];
pg.database = {};

const loadAssets = function() {
  $.getJSON("/pg/", function(data) {
    pg.database = data;
    console.log(data);
    pg.init();
  });
};
pg.init = function() {
  pg.update();
  pg.new();
  pg.delete();
  pg.generateMarkup();
};
pg.new = function() {
  $(".new").on("click", function() {
    // console.log(id._id);
    $("#addpg").show();
    window.location = "/home";
  });
};
pg.update = function() {
  $(".update").on("click", function() {
    $("#addU").show();
    $("#addU").submit(function(e) {
      e.preventDefault();
      $.post({
        url: "/pg/" + id._id,
        type: "PUT",
        data: {
          address: $("#add1").val(),
          city: $("#add2").val(),
          price: $("#add8").val(),
          bedrooms: $("#add5").val(),
          bathrooms: $("#add6").val(),
          carspaces: $("#add7").val(),
          picture: $("#add9").val()
        }
      });
      window.location = "/home";
    });
  });
};

pg.delete = function() {
  $(".delete").on("click", function() {
    // console.log(id._id)
    url = "/pg/" + id._id;
    $.post({
      url: url,
      method: "DELETE"
    });
    window.location = "/home";
  });
};

pg.generateMarkup = function() {
  var template = "";

  $.each(pg.database, function(index) {
    db = pg.database;
    id = db[index];

    // console.log(id);

    template += '<div class="dataDiv" data-id ="' + id._id + '">';
    template += '<div class="card" style="width: 18rem;">';
    template +=
      '<img class="card-img-top" src="' +
      id.picture +
      '" alt="Card image cap">';
    template += '<div class="card-body">';
    template += '<h5 class="card-title">$' + id.price + "</h5>";
    template += "<p>" + id.city + "</p>";
    template += "<p>" + id.address + "</p>";
    template += '<div id="icon"><p>' + id.bedrooms + "</p></div>";
    template += '<div id="icon"><p>' + id.bathrooms + "</p></div>";
    template += '<div id="icon"><p>' + id.carspaces + "</p></div>";
    template += '<button class="update btn btn-primary">Update pg</button>';
    template += '<button class="delete btn btn-primary">Delete</button>';
    template += "</div>";
    template += "</div>";
    template += "</div>";
  });
  $(".content").append(template);
  pg.delete();
  pg.new();
  pg.update();
};
loadAssets();
