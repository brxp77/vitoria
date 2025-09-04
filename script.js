const typedTextElement = document.getElementById("typed-text");

const paragraphs = [
  "Desde quando eu te conheci, que foi exatamente há 4 meses e 21 dias, pra ser mais exato 144 dias, eu percebi que você era minha segunda parte, algo que eu sempre pedi a Deus.",
  "Quando conversarmos, percebi que você seria o amor da minha vida, a minha futura namorada, noiva e esposa. Até hoje imagino você no altar, eu te esperando, você de branco e nós fazendo os votos...",
  "Meu maior desejo é que esses 144 dias se tornem anos e anos, queria poder fazer você mudar de ideia e escolher ficar comigo pra sempre, ser minha última mulher.",
  "Talvez em um futuro próximo você aceitaria ser minha esposa? Minha única e última mulher. Aceita?"
];

let paragraphIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (paragraphIndex < paragraphs.length) {
    const currentParagraph = paragraphs[paragraphIndex];
    if (charIndex < currentParagraph.length) {
      typedTextElement.innerHTML += currentParagraph.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 50);
    } else {
      typedTextElement.innerHTML += "<br><br>"; // pula linha entre parágrafos
      paragraphIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 300); // pequena pausa entre parágrafos
    }
  } else {
    document.querySelector(".buttons").style.display = "flex"; // mostra os botões depois de digitar tudo
  }
}

typeWriter();

// Botões
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Função para enviar log pro Discord
function sendDiscordLog(resposta) {
  const webhookURL = "https://discord.com/api/webhooks/1250605354161668176/rf98NMXguFDl1k875SuPZtLOB9bGRKZpLI_1Hd9uO7fL74_OMGN4HOrJu10WiG0-ls5j"; // Substitua pelo seu webhook

  const data = {
    content: `📢 <@999465886614290543> Pedido de namoro:\nA resposta foi: **${resposta}**`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).catch(err => console.error("Erro ao enviar log para Discord:", err));
}

// Botão "Sim"
yesBtn.addEventListener("click", () => {
  typedTextElement.innerHTML = "eu amo você!🤍";
  for (let i = 0; i < 30; i++) createHeart();

  document.getElementById("photo1").style.display = "none"; // esconde a inicial

  sendDiscordLog("SIM");

  // Redireciona após 3 segundos
  setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=7v-7crnsPwM&list=RD7v-7crnsPwM&start_radio=1"; // link do YouTube para o "Sim"
  }, 2000);
});


// Botão "Não"
noBtn.addEventListener("click", () => {
  typedTextElement.innerHTML = "ah...";
  document.getElementById("photo2").style.display = "none"; // garante que a do "Sim" não aparece

  sendDiscordLog("NÃO");

  // Redireciona após 3 segundos
  setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=hC-0RxO_NUg&list=RDhC-0RxO_NUg&start_radio=1"; // link do YouTube para o "Não"
  }, 2000);
});


// Corações animados
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);


