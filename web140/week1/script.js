let score = 0;

function checkCorrect(correct, outputID)
{let output = document.getElementById(outputID);

  if (correct === true)
  {output.textContent = "Correct!";
    score = score + 1;
  } else {output.textContent = "Wrong Answer!";}

}

let q1A = document.getElementById("q1A");
let q1B = document.getElementById("q1B");
let q1C = document.getElementById("q1C");
let q1D = document.getElementById("q1D");

let q2A = document.getElementById("q2A");
let q2B = document.getElementById("q2B");
let q2C = document.getElementById("q2C");
let q2D = document.getElementById("q2D");

let q3A = document.getElementById("q3A");
let q3B = document.getElementById("q3B");
let q3C = document.getElementById("q3C");
let q3D = document.getElementById("q3D");

let q4A = document.getElementById("q4A");
let q4B = document.getElementById("q4B");
let q4C = document.getElementById("q4C");
let q4D = document.getElementById("q4D");

let q5A = document.getElementById("q5A");
let q5B = document.getElementById("q5B");
let q5C = document.getElementById("q5C");
let q5D = document.getElementById("q5D");

let scoreOutput = document.getElementById("scoreLine");
let scoreButton = document.getElementById("scoreButton");

q1A.addEventListener("click", function() {checkCorrect(false, "output1");});
q1B.addEventListener("click", function() {checkCorrect(false, "output1");});
q1C.addEventListener("click", function() {checkCorrect(true, "output1");});
q1D.addEventListener("click", function() {checkCorrect(false, "output1");});

q2A.addEventListener("click", function() {checkCorrect(false, "output2");});
q2B.addEventListener("click", function() {checkCorrect(true, "output2");});
q2C.addEventListener("click", function() {checkCorrect(false, "output2");});
q2D.addEventListener("click", function() {checkCorrect(false, "output2");});

q3A.addEventListener("click", function() {checkCorrect(false, "output3");});
q3B.addEventListener("click", function() {checkCorrect(false, "output3");});
q3C.addEventListener("click", function() {checkCorrect(true, "output3");});
q3D.addEventListener("click", function() {checkCorrect(false, "output3");});

q4A.addEventListener("click", function() {checkCorrect(false, "output4");});
q4B.addEventListener("click", function() {checkCorrect(false, "output4");});
q4C.addEventListener("click", function() {checkCorrect(false, "output4");});
q4D.addEventListener("click", function() {checkCorrect(true, "output4");});

q5A.addEventListener("click", function() {checkCorrect(true, "output5");});
q5B.addEventListener("click", function() {checkCorrect(false, "output5");});
q5C.addEventListener("click", function() {checkCorrect(false, "output5");});
q5D.addEventListener("click", function() {checkCorrect(false, "output5");});

scoreButton.addEventListener("click", function() 
{if (score > 5)
  {score = 5;}

  scoreOutput.textContent = `Your Score: ${score} out of 5`;
  score = 0;
})
