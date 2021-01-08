
//Show wat button is active or clicked on
var divName = document.getElementsByClassName("btnForm");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
};

//Show wat page is selected in Second Navigation bar
var divNameLinks = document.getElementsByClassName("links");
var btnAnkerSecondNavJs = document.getElementsByClassName("ankerSecondNavJs");
for (var i = 0; i < btnAnkerSecondNavJs.length; i++) {
  btnAnkerSecondNavJs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeSecondNav");
  current[0].className = current[0].className.replace(" activeSecondNav", "");
  this.className += " activeSecondNav";
  });
};

//Show wat button is active on Form Links
var divNameFormLinks = document.getElementsByClassName("forumStyleAnkerTags");
var formlink = document.getElementsByClassName("formAnkerTags");
for (var i = 0; i < formlink.length; i++) {
  formlink[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeFormLink");
  current[0].className = current[0].className.replace(" activeFormLink", "");
  this.className += " activeFormLink";
  });
};