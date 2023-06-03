// By HugoJuniorDev

/* Targeting Main Semantic Tag Start */
const mainParent = document.getElementById("main-section");
/* Targeting Main Semantic Tag End */

/* Creation Of ChanceCounter Variable Code Start */
let chanceCounter = 10;
/* Creation Of ChanceCounter Variable Code End */

/* Header Tag Creation Start */
const headerTag = document.createElement("h1");
headerTag.id = "headerText";
headerTag.className = "text-light fs-1 fw-bold py-5 mx-auto";
headerTag.innerHTML = `${chanceCounter} chances you have, currently!`;
/* Header Tag Creation End */

/* Input Element Creation Code Start */
const inputElement = document.createElement("input");
inputElement.className = "form-control form-control-lg rounded-4 mx-auto";
inputElement.id = "main-input";
inputElement.type = "text";
inputElement.placeholder = "Guess the secret number!";
inputElement.setAttribute("aria-label", ".form-control-lg example");
/* Input Element Creation Code End */

/* Button Tag Creation Start */
const btnElement = document.createElement("button");
btnElement.className =
  "btn btn-primary text-center mx-auto fs-4 fw-semibold my-5";
btnElement.innerHTML = "Topdim";
/* Button Tag Creation End */

mainParent.appendChild(headerTag);
mainParent.appendChild(inputElement);
mainParent.appendChild(btnElement);

/* Game Logic Start */

/* Random Number Creation Start */
const randNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number: ${randNumber}`);
/* Random Number Creation End */

/* Audio Target Start */
const audioWinner = new Audio("../audios/Winner-Cheers-Claps.mp3");
const audioLooser = new Audio("../audios/LooserAudio.mp3");
/* Audio Target End */
/* Audio Popup Code Start */
const modalPopup = document.getElementById("popup-1");
const textAreaModal = document.getElementById("headerTextModal");
const absoluteImage = document.getElementById("absolute-image");
const content = document.getElementById("content");
/* Audio Popup Code End */

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputElement.value == randNumber) {
      absoluteImage.src = "../images/WonImage.png";
      absoluteImage.classList.remove("d-none");
      content.style.backgroundImage = "url('../images/RectangleWon.jpg')";
      btnElement.setAttribute("onclick", togglePopup());
      audioWinner.play();
      setTimeout(function () {
        location.reload();
      }, 10000);
    } else {
      chanceCounter -= 1;
      inputElement.value = "";
      console.log(`Chance Counter: ${chanceCounter}`);
      headerTag.innerHTML = `${chanceCounter} chances left!`;
      if (chanceCounter == 0) {
        absoluteImage.src = "../images/LoseImage.png";
        content.style.backgroundImage = "url('../images/RectangleLose.jpg')";
        absoluteImage.classList.remove("d-none");
        textAreaModal.innerHTML = "We wanted you to win... You Lose...";
        audioLooser.play();
        btnElement.setAttribute("onclick", togglePopup());
        setTimeout(function () {
          location.reload();
        }, 2000);
      }
      while (chanceCounter < 0) {
        alert("You wanted to do something unknown, Please Reopen The Page!");
      }
    }
  } else {
    btnElement.onclick = () => {
      if (inputElement.value == randNumber) {
        btnElement.setAttribute("onclick", togglePopup());
        absoluteImage.src = "../images/WonImage.png";
        content.style.backgroundImage = "url('../images/RectangleWon.jpg')";
        absoluteImage.classList.remove("d-none");
        audioWinner.play();
        setTimeout(function () {
          location.reload();
        }, 10000);
      } else {
        chanceCounter -= 1;
        inputElement.value = "";
        console.log(`Chance Counter: ${chanceCounter}`);
        headerTag.innerHTML = `${chanceCounter} chances left!`;
        if (chanceCounter == 0) {
          audioLooser.play();
          absoluteImage.src = "../images/LoseImage.png";
          content.style.backgroundImage = "url('../images/RectangleLose.jpg')";
          absoluteImage.classList.remove("d-none");
          textAreaModal.innerHTML = "We wanted you to win... You Lose...";
          btnElement.setAttribute("onclick", togglePopup());
          setTimeout(function () {
            location.reload();
          }, 2000);
        }
        while (chanceCounter < 0) {
          alert("You wanted to do something unknown, Please Reopen The Page!");
        }
      }
    };
  }
});

/* Game Logic End */

/* Popup Code Start */
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
/* Popup Code End */

// By HugoJuniorDev
