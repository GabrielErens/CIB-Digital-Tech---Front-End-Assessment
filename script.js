function bgChager(){

    //Select a Random number between 1-5
    var randomImg = Math.floor(Math.random() * 5 + 1);


    //selects an random img from the img folder 
    var bgImg = "Image/Image" + randomImg + ".jpg"

      // assigns an random background image to first img
  document.querySelectorAll("img")[0].setAttribute("src", bgImg);

  return bgImg;
}

window.onload = document.body.style.backgroundImage = "url('bgChanger')";

