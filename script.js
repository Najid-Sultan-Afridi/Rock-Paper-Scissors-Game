let choices = document.querySelectorAll(".choice");
console.log(choices); // returns a node list

let userCount = 0;
let compCount = 0;

let userCountEle = document.querySelector("#user-score");
let compCountEle = document.querySelector("#comp-score");

let msg = document.querySelector(".msg");

let user;
let comp;

let userChoice;

let compChoice = () => {
  let compChoiceArr = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return compChoiceArr[randomIdx];
};

let matchResult = (userCh, compCh) => {
  if (user === true) {
      userCount++;
      userCountEle.textContent = userCount;
      msg.textContent = `You have won your ${userCh} have beaten ${compCh}`;
      msg.classList.remove("draw");
      msg.classList.remove("lost");
      msg.classList.add("won");
      return(`You have won your ${userCh} have beaten ${compCh}`);
  } else if (user === false) {
      compCount++;
      compCountEle.textContent = compCount;
      msg.textContent = `You have lost ${compCh} have beaten your ${userCh}`;
      msg.classList.remove("draw");
      msg.classList.remove("won");
      msg.classList.add("lost");
      return(`You have lost ${compCh} have beaten your ${userCh}`);
  }
};

choices.forEach((choice) => {
  // console.log(choice); // Will return each element of choices nodeList.

  choice.addEventListener("click", () => {
    // console.log("Choice was clicked");
    userChoice = choice.getAttribute("id");
    // console.log(`User: ${userChoice}`);
    // console.log(`Comp: ${compChoice()}`);
    let cc = compChoice();

    if (userChoice === cc) {
      console.log(`Draw please play again`);
      msg.textContent = `Draw please play again`;
      msg.classList.remove("won");
      msg.classList.remove("lost");
      msg.classList.add("draw");
    } else {
      user = true;
      if (userChoice === "rock") {
        if (cc === "paper") {
          user = false;
        } else if (cc === "scissors") {
          user === true;
        }
      } else if (userChoice === "paper") {
        if (cc === "rock") {
          user = true;
        } else if (cc === "scissors") {
          user = false;
        }
      } else if (userChoice === "scissors") {
        if (cc === "rock") {
          user = false;
        } else if (cc === "paper") {
          user = true;
        }
      }
      console.log(matchResult(userChoice, cc));
    }
  });
});
