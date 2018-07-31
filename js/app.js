// Menu górne

var menuElement = document.querySelectorAll(".header__menu--element");

for (var i=0; i<menuElement.length; i++) {
  menuElement[i].addEventListener("mouseover", function(e) {

    var submenu = this.querySelector(".header__submenu");
    submenu.classList.add("visible");

  });

  menuElement[i].addEventListener("mouseout", function(e) {

    var submenu = this.querySelector(".header__submenu");
    submenu.classList.remove("visible");

  });

};


// Dwa bloki (z obrazkami)

var article = document.querySelectorAll(".articles__article");

for (var i=0; i<article.length; i++) {
article[i].addEventListener("mouseover", function(e) {

var articleHeadline = this.querySelector("h3");
articleHeadline.classList.add("hidden");


});

article[i].addEventListener("mouseout", function(e) {
var articleHeadline = this.querySelector("h3");
articleHeadline.classList.remove("hidden");

});
};


// slider (dwa obrazki)

var prevBtn = document.querySelector(".slider__prev");
var nextBtn = document.querySelector(".slider__next");
var liItems = document.querySelectorAll(".slider li");
var index = 0;

liItems[index].classList.add("visible");

prevBtn.addEventListener("click", function(e) {
  liItems[index].classList.remove("visible");
  index -= 1;
  if (index < 0) {
    index = liItems.length - 1;
  };
  liItems[index].classList.add("visible");
});

nextBtn.addEventListener("click", function(e) {
  liItems[index].classList.remove("visible");
  index += 1;
  if (index >= liItems.length) {
    index = 0;
  };
  liItems[index].classList.add("visible");
});
