export async function setUpQuestions() {


  const pressButton = value => {
    console.log(value);
  };

  document.getElementById('choiceA').addEventListener('click', () => pressButton("A"));
  document.getElementById('choiceB').addEventListener('click', () => pressButton("B"));
  document.getElementById('choiceC').addEventListener('click', () => pressButton("C"));
  document.getElementById('choiceD').addEventListener('click', () => pressButton("D"));
  const events = await fetch("/events.json").then(res => res.json());
  console.log(events);
  document.getElementById("loading").style.display = "none";
  document.getElementById("app").style.visibility = "visible";
  document.getElementById("header").style.visibility = "visible";

}

await setUpQuestions();

