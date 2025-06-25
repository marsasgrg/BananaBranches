export function setUpQuestions(element) {
   let counter = 0;

  const pressButton = value => {
    console.log(value);
  };

  document.getElementById('choiceA').addEventListener('click', () => pressButton("A"));
  document.getElementById('choiceB').addEventListener('click', () => pressButton("B"));
  document.getElementById('choiceC').addEventListener('click', () => pressButton("C"));
  document.getElementById('choiceD').addEventListener('click', () => pressButton("D"));


}

setUpQuestions(document.getElementById('counter-value'));

