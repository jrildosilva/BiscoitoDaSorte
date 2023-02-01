const main = document.querySelector(".main");
const fortune = document.querySelector(".fortune");

const fortuneCookie = document.getElementById("fortune-cookie");
const cookieMessage = document.getElementById("message");

const openCookie = document.getElementById("open-cookie");

const messages = [
  "Quanto mais você trabalha mais sorte você tem.",
  "Mantenha o foco, a vitória está próxima",
  "Camarão que dorme a onda leva",
  "Foco, força e fé",
  "O melhor amuleto da sorte é a fé",
  "Lucky strike",
  "Eu quero uma rede para descansar, somente nos finais de semana e feriados.",
  "Sorte? ou foco ou fé, bola pra frente.",
  "Gato preto sorte de quem tem um",
  "Sorte, sou capitão da minha alma e senhor do meu destino",
  "A sorte está dentro de cada um de nós, há de ter fé pra encontra-lá",
  "Tenho sorte no amor e azar na sorte, quanta sorte!",
  " A sorte é determinada pelas as oportunidades dentro do espectro de opções que nós procuramos por vontade ou determinação a nós imposta por nossa permissão ou potência de vontade. ",
  "Quem não tem sorte observa a vida",
  "Quem tem sorte vive, eu tenho sorte.",
  "Todos nós temos luzes e trevas dentro de nós mas o que nos define é o lado o qual nós escolhemos viver."
]

function spectrumRandomMessage() {
   const totalMessages = messages.length;
   const RandomNumber = Math.floor(Math.random() * totalMessages);

   cookieMessage.innerHTML = messages[RandomNumber];
   
}


function ToggleClassHide() {
  main.classList.toggle("hide");
  fortune.classList.toggle("hide");
}

document.addEventListener("keypress", (e) => {
  if (e.key == 'Enter') {
      ToggleClassHide();
      spectrumRandomMessage();
  }
});

fortuneCookie.addEventListener('click', () => {
  ToggleClassHide();
  spectrumRandomMessage();
});

openCookie.addEventListener('click', () => {
  ToggleClassHide();
  spectrumRandomMessage();
});
