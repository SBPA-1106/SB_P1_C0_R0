/*Copyright © 2025 Kamenska-Knjiga Group. All rights reserved.*/

let Heading = document.querySelector(".Heading");
let Logo = document.querySelector(".Logo");

let OpenMenuButton = document.querySelector(".OpenMenuButton");
let CloseMenuButton = document.querySelector(".CloseMenuButton");

let ImpresumButton = document.querySelector("#Menu-Element-1");
let ContractButton = document.querySelector("#Menu-Element-2");
let PostImageButton = document.querySelector("#Menu-Element-3");
let YearMenuButton = document.querySelector("#Menu-Element-4");

let MenuBar = document.querySelector(".Container-Menu");
let YearMenu = document.querySelector(".Container-Year-Menu")

let Open2025Button = document.querySelector("#Year-Menu-2025");

OpenMenuButton.addEventListener('click', OpenMenu);
CloseMenuButton.addEventListener('click', CloseMenu);
ImpresumButton.addEventListener('click', OpenImpresum);
ContractButton.addEventListener('click', OpenContract);
PostImageButton.addEventListener('click', OpenPostImage);
Open2025Button.addEventListener('click', Open2025Gallery);
YearMenuButton.addEventListener('click', OpenYearMenu);

function OpenMenu(){
  MenuBar.style.right = "0vw";
}

function CloseMenu(){
  MenuBar.style.right = "-51vw";
  YearMenu.style.right = "-35vw";
}
 
function OpenImpresum(){
  window.location.href = "Page2.html";
}

function OpenContract(){
  window.location.href = "Page3.html";
}

function OpenPostImage(){
  window.location.href = "Page4.html";
}

function OpenYearMenu(){
  YearMenu.style.right = "50vw";
}

function Open2025Gallery(){
  window.location.href = "Page5C.html";
}

document.addEventListener("DOMContentLoaded", function () {

const LogoWidth = Logo.offsetWidth;

Heading.style.left = `calc(${LogoWidth}px + 4%)`;

  const PreviewPosts = [
    'https://github.com/SBPA-1106/SB_Example-Posts_C0_G/blob/main/Preview-Post-1.png',
    'https://github.com/SBPA-1106/SB_Example-Posts_C0_G/blob/main/Preview-Post-2.png',
    'https://github.com/SBPA-1106/SB_Example-Posts_C0_G/blob/main/Preview-Post-3.png',
    'https://github.com/SBPA-1106/SB_Example-Posts_C0_G/blob/main/Preview-Post-4.png',
    'https://github.com/SBPA-1106/SB_Example-Posts_C0_G/blob/main/Preview-Post-5.png',
  ];
  
  let currentImgIndex = 0;
  const PreviewPost = document.querySelector(".Preview-Post");

  function UpdatePreviewPost(index) {
    PreviewPost.src = PreviewPosts[index];
  }

  function ChangePreviewPost() {
    currentImgIndex = (currentImgIndex + 1) % PreviewPosts.length;
    UpdatePreviewPost(currentImgIndex);
  }

  UpdatePreviewPost(currentImgIndex);

  setInterval(ChangePreviewPost, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const WelcomeWords = [
    'Dobrodošli',
    'Welcome',
    'Willkommen',
    'Bienvenue',
    'Welkom',
    'Velkommen',
    'Fáilte',
    'Velkominn',
    'Wëllkomm',
    'Velkommen',
    'Välkommen',
    'Tervetuloa',
    'Tere tulemast',
    'Laipni lūdzam',
    'Sveiki atvykę',
    'Bienvenido',
    'Vitajte',
    'Bine ați venit',
    'Bem-vindo',
    'Üdvözöljük',
    'Vítejte',
    'Dobre doshli',
    'Witaj',
    'Merħba',
    'Καλώς ήρθατε',
    'Mirësevini',
    'Καλώς ορίσατε',
    'Benvenuto'
  ];
  
  let currentWordIndex = 0;
  const WelcomeText = document.querySelector(".Welcome-Text");
  function UpdateWelcomeWord(index) {
    WelcomeText.style.opacity = 0;
    setTimeout(() => {
      WelcomeText.textContent = WelcomeWords[index];
      WelcomeText.style.opacity = 1;
    }, 500);
}

  function ChangeWelcomeWord() {
      currentWordIndex = (currentWordIndex + 1) % WelcomeWords.length;
      UpdateWelcomeWord(currentWordIndex);
  }

  UpdateWelcomeWord(currentWordIndex);

  setInterval(ChangeWelcomeWord, 5000);
});

let ChildIcon1 = TW1.querySelector('.Menu-Icons'); 
let ChildIcon2 = TW2.querySelector('.Menu-Icons'); 
let ChildIcon3 = TW3.querySelector('.Menu-Icons'); 
let ChildIcon4 = TW4.querySelector('.Menu-Icons'); 

function Translation() {
  let HTMLLangTag = document.documentElement.lang;

  if (HTMLLangTag == 'hr') {
    document.getElementById("TW1").innerHTML = "Više od nama";
    document.getElementById("TW2").innerHTML = "Uvjeti ugovora";
    document.getElementById("TW3").innerHTML = "Pošaljite sliku";
    document.getElementById("TW4").innerHTML = "Slike";

    TW1.appendChild(ChildIcon1);
    TW2.appendChild(ChildIcon2);
    TW3.appendChild(ChildIcon3);
    TW4.appendChild(ChildIcon4);
  }

  if (HTMLLangTag == 'en') {
    document.getElementById("TW1").innerHTML = "About us";
    document.getElementById("TW2").innerHTML = "Therms of contract";
    document.getElementById("TW3").innerHTML = "Send an image";
    document.getElementById("TW4").innerHTML = "Images";

    TW1.appendChild(ChildIcon1);
    TW2.appendChild(ChildIcon2);
    TW3.appendChild(ChildIcon3);
    TW4.appendChild(ChildIcon4);
  }

  if (HTMLLangTag == 'de') {
    document.getElementById("TW1").innerHTML = "Impressum";
    document.getElementById("TW2").innerHTML = "AGB";
    document.getElementById("TW3").innerHTML = "Bildeinreichung";
    document.getElementById("TW4").innerHTML = "Bilder";

    TW1.appendChild(ChildIcon1);
    TW2.appendChild(ChildIcon2);
    TW3.appendChild(ChildIcon3);
    TW4.appendChild(ChildIcon4);
  }
}

function changeLanguage(lang) {
  document.documentElement.lang = lang;
}

const langTagObserver = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
      Translation(); 
    }
  }
});

const targetNode = document.documentElement;

const config = { attributes: true, attributeFilter: ['lang'] };

langTagObserver.observe(targetNode, config);
