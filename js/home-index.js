
// static products data
var products = [
  {
    "name": "Product 1",
    "img": "./img/logo-sample.png",
    "details": "Product 01 descptrion"
  },
  {
    "name": "Product 2",
    "img": "./img/logo-sample.png",
    "details": "Product 02 descptrion"
  },
  {
    "name": "Product 3",
    "img": "./img/logo-sample.png",
    "details": "Product 03 descptrion"
  },
  {
    "name": "Product 4",
    "img": "./img/logo-sample.png",
    "details": "Product 04 descptrion"
  },
  {
    "name": "Product 5",
    "img": "./img/logo-sample.png",
    "details": "Product 05 descptrion"
  }
];

// static home information data
var homeInfo = [
  {
    "id": 1,
    "name": "Home Item 01"
  },
  {
    "id": 2,
    "name": "Home Item 02"
  },
  {
    "id": 3,
    "name": "Home Item 03"
  },
  {
    "id": 4,
    "name": "Home Item 04"
  },
  {
    "id": 5,
    "name": "Home Item 05"
  }
];

// static home products data
var homeProducts = [
  {
    "id": 1,
    "name": "Product Item 01"
  },
  {
    "id": 2,
    "name": "Product Item 02"
  },
  {
    "id": 3,
    "name": "Product Item 03"
  },
  {
    "id": 4,
    "name": "Product Item 04"
  },
  {
    "id": 5,
    "name": "Product Item 05"
  }
];

// static home services data
var homeServices = [
  {
    "id": 1,
    "name": "Service Item 01"
  },
  {
    "id": 2,
    "name": "Service Item 02"
  },
  {
    "id": 3,
    "name": "Service Item 03"
  },
  {
    "id": 4,
    "name": "Service Item 04"
  },
  {
    "id": 5,
    "name": "Service Item 05"
  }
];

// static home help data
var homeHelp = [
  {
    "id": 1,
    "name": "Help Item 01"
  },
  {
    "id": 2,
    "name": "Help Item 02"
  },
  {
    "id": 3,
    "name": "Help Item 03"
  },
  {
    "id": 4,
    "name": "Help Item 04"
  },
  {
    "id": 5,
    "name": "Help Item 05"
  }
];

// arraylist name of element id which needs to populate data
var infoEleId = ["home-info", "products-info", "service-info", "help-info"];

// function to auto hide menu
function autoHideMenu() {
  $("<select />").appendTo("#home-navbar");

}

function viewProduct() {
  alert("View product");
}

// populate product in product list to element "home-product"
function populateProducts(productList) {
  $("#home-product-container").empty();
  for(var i = 0; i < productList.length; i++) {
    $("#home-product-container").append(
      '<div class="productItem col-3">' +
        '<div>' +
          '<a>' + productList[i].name + '</a>' +
        '</div>' +
        '<img src=' + productList[i].img + '>' +
        '<div class="product-item-content">' +
          '<div class="product-description">' +
            productList[i].details +
          '</div>' +
          '<div class="product-view-btn">' +
            '<button type="button" class="btn btn-primary btn-lg" onclick="viewProduct()">View</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
}

// populate slide Products
function populateSlideProducts(productList) {
  $("#home-product-container").empty();
  $("#home-product-container").append(
    '<div id="home-product-indicators" class="carousel slide" data-ride="carousel"></div>'
  );
  // product indicator
  $("#home-product-indicators").append(
    '<ol class="carousel-indicators"></ol>'
  );
  for(var i = 0; i < productList.length; i++) {
    if(i == 0) {
      $("#home-product-indicators ol").append(
        '<li data-target="#home-product-indicators"' +
        'data-slide-to="' + i + '"' +
        'class="active"></li>'
      );
    } else {
      $("#home-product-indicators ol").append(
        '<li data-target="#home-product-indicators"' +
        'data-slide-to="' + i + '"></li>'
      );
    }
  }
  // product slide
  $("#home-product-indicators").append(
    '<div id="slide-product-inner" class="carousel-inner"></div>'
  );
  for(var i = 0; i < productList.length; i++) {
    var slideClass = "carousel-item";
    if(i == 0) {
      slideClass = slideClass + " active";
    }
    // $("#slide-product-inner").append(
    //   '<img class="d-block w-100' + slideClass + '" src="./img/logo-sample.png">'
    // );
    // productItem col-3
    $("#slide-product-inner").append(
      '<div class="' + slideClass + '">' +
        '<div>' +
          '<a>' + productList[i].name + '</a>' +
        '</div>' +
        '<img src=' + productList[i].img + '>' +
        '<div class="product-item-content">' +
          '<div class="product-description">' +
            productList[i].details +
          '</div>' +
          '<div class="product-view-btn">' +
            '<button type="button" class="btn btn-primary btn-lg" onclick="viewProduct()">View</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
  // product left and right
  $("#home-product-indicators").append(
    '<a class="carousel-control-prev" href="#home-product-indicators" role="button" data-slide="prev">' +
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
      '<span class="sr-only">Previous</span>' +
    '</a>'
  );
  $("#home-product-indicators").append(
    '<a class="carousel-control-next" href="#home-product-indicators" role="button" data-slide="next">' +
      '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
      '<span class="sr-only">Next</span>' +
    '</a>'
  );
}

// populate item in info list
function populateInfo() {
  for(var i = 0; i < infoEleId.length; i++) {
    populateItem(infoEleId[i]);
  }
}

// populate Item according to element id
function populateItem(id) {
  id = id + "-div";
  var select = document.getElementById(id);
  var itemArray;
  if(id == "home-info-div") {
    itemArray = homeInfo;
  } else if(id == "products-info-div") {
    itemArray = homeProducts;
  } else if(id == "service-info-div") {
    itemArray = homeServices;
  } else if(id == "help-info-div") {
    itemArray = homeHelp;
  }

  for(var i = 0; i < itemArray.length; i++) {
    var menuItem = itemArray[i];
    var el = document.createElement("div");
    // el.className = "created-div";
    el.textContent = menuItem.name;
    el.value = menuItem.name;
    select.appendChild(el);
  }
}

// enable collapse effect for element "home-page-info"
function enableCollapse() {
  for(var i = 0; i < infoEleId.length; i++) {
    enableEleCollapse("#" + infoEleId[i]);
  }
}

// disable collapse effect for element "home-page-info"
function disableCollapse() {
  for(var i = 0; i < infoEleId.length; i++) {
    disableEleCollapse(infoEleId[i]);
  }
}

function enableEleCollapse(eleId) {
  $(eleId + " a").attr("data-toggle", "collapse");
  $(eleId + " a").attr("data-target", eleId + "-div");
  $(eleId + "-div").addClass("collapse");
}

function disableEleCollapse(eleId) {
  $(eleId + " a").removeAttr("data-toggle");
  $(eleId + " a").attr("data-target");
  $(eleId + "-div").removeClass("collapse");
}

// hide or show nav bar
function checkNavBarShow() {
  console.log("ssssssssssssssss");
  if($("#home-navbar").css('visibility') == "hidden") {
    $("#home-navbar").css({
      'visibility': 'visible',
      'position': 'fixed'
    });
  } else if($("#home-navbar").css('visibility') == "visible") {
    $("#home-navbar").css('visibility', 'hidden');
  }
}

$(document).ready(function() {
  $("#navbardrop").hover(
    function() {
      console.log("hover");
    }
  );
  $("#menu-btn").click(
    function() {
      console.log("click menu btn");
      console.log($("#home-navbar").css('visibility'));
      if($("#home-navbar").css('visibility') == "hidden") {
        $("#home-navbar").css('visibility', 'visible');
      } else if($("#home-navbar").css('visibility') == "visible") {
        $("#home-navbar").css('visibility', 'hidden');
      }
      // $("#home-navbar").css('visibility', 'visible');
    }
  );

  if($(window).width() <= 992) {
    $("#menu-div").show();
    $("#home-title-search").show();
    $("#empty-div").hide();
    $("#welcome-search").hide();

    enableCollapse();
    populateSlideProducts(products);
  } else {
    // $("#menu-div").remove();
    $("#menu-div").hide();
    $("#home-title-search").hide();
    $("#home-navbar").show();
    $("#empty-div").show();
    $("#welcome-search").show();
    disableCollapse();
    populateProducts(products);
  }

  // action for windows resize
  $(window).resize(function() {
    if($(window).width() <= 992) {
      // show menu button and search btton
      $("#menu-div").show();
      $("#home-title-search").show();
      $("#empty-div").hide();
      $("#home-navbar").css('visibility', 'hidden');
      $("#welcome-search").hide();
      // change banner size
      $("#banner-one").addClass("col-12");
      $("#banner-two").addClass("col-12");

      // make info collapse
      enableCollapse();
      populateSlideProducts(products);
    } else {
      // hide menu button and search btton
      $("#menu-div").hide();
      $("#home-title-search").hide();
      $("#empty-div").show();
      // $("#home-navbar").show();
      $("#home-navbar").css('visibility', 'visible');
      $("#welcome-search").show();
      // if($(window).width() == 993) {
        // checkNavBarShow();
      // }

      // recover banner size
      $("#banner-one").removeClass("col-12");
      $("#banner-two").removeClass("col-12");
      // remove info collapse
      disableCollapse();
      populateProducts(products);
    }
  });
});

// populateProducts(products);

populateInfo();

// module.exports = {
//   test: function() {
//     console.log("This is test");
//     a();
//   }
// }
