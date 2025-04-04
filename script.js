const textElement = document.getElementById("text");
const choicesElement = document.getElementById("choices");

function showScene(text, choices) {
  textElement.innerText = text;
  choicesElement.innerHTML = "";

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = choice.action;
    choicesElement.appendChild(button);
  });
}

function startGame() {
  showScene(
    "Igor acorda faminto. Ele sente um cheiro estranho vindo da cozinha... Será o café da manhã?",
    [
      { text: "Investigar o cheiro", action: cenaCozinha },
      { text: "Voltar a dormir", action: dormir }
    ]
  );
}

function dormir() {
  showScene(
    "Igor volta a dormir e sonha que está comendo... algo suspeito. Fim.",
    [{ text: "Recomeçar", action: startGame }]
  );
}

function cenaCozinha() {
  showScene(
    "Na cozinha, Igor encontra duas opções: uma torrada deliciosa... e um pratinho marrom misterioso.",
    [
      { text: "Comer a torrada", action: finalBom },
      { text: "Provar o prato misterioso", action: finalZika }
    ]
  );
}

function finalBom() {
  showScene(
    "Igor come a torrada e vive um dia feliz, livre de infecções intestinais. Parabéns!",
    [{ text: "Recomeçar", action: startGame }]
  );
}

function finalZika() {
  showScene(
    "Igor prova o conteúdo suspeito... era fezes. Ele ganha superpoderes estranhos, mas perde todos os amigos. Fim.",
    [{ text: "Recomeçar", action: startGame }]
  );
}

startGame();
