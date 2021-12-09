/* JavaScript Prototype Epika - 1er VaporWave */

/****************************/
/*  JAVASCRIPT FOR SHIFUMI  */
/****************************/

var userScore = 0;
var botScore = 0;

const plateauShifumi = document.getElementById('shifumi-box');
const pierre = document.getElementById('pierre__input');
const feuille = document.getElementById('feuille__input');
const ciseaux = document.getElementById('ciseaux__input');
/*const userChoice = document.getElementById('user-choice');
const botChoice = document.getElementById('my-choice');*/
const displayUserScore = document.getElementById('display-user-score');
const displayBotScore = document.getElementById('display-my-score');

plateauShifumi.addEventListener('submit', function(event) {
  event.preventDefault();
  var calcBotChoice = Math.floor(Math.random() * 3);

  if (pierre.checked) {
/*    userChoice.innerHTML = "Pierre";*/
    
    switch ((calcBotChoice + 1) % 3) {
      case 0:
        userScore++;
/*        botChoice.innerHTML = "Ciseaux";*/
        break;
      case 1:
/*        botChoice.innerHTML = "Pierre";*/
        break;
      case 2:
        botScore++;
 /*       botChoice.innerHTML = "Feuille";*/
        break
    }
  }
  
  if (feuille.checked) {
/*    userChoice.innerHTML = "Feuille";*/
    
    switch ((calcBotChoice + 1) % 3) {
      case 0:
        botScore++;
/*        botChoice.innerHTML = "Ciseaux";*/
        break;
      case 1:
        userScore++
/*        botChoice.innerHTML = "Pierre";*/
        break;
      case 2:
/*        botChoice.innerHTML = "Feuille";*/
        break;
    }
  }
  
  if (ciseaux.checked) {
/*    userChoice.innerHTML = "Ciseaux";*/
    
    switch ((calcBotChoice + 1) % 3) {
      case 0:
/*        botChoice.innerHTML = "Ciseaux";*/
        break;
      case 1:
        botScore++;
/*        botChoice.innerHTML = "Pierre";*/
        break;
      case 2:
        userScore++;
/*       botChoice.innerHTML = "Feuille";*/
        break;
    }
  }
  displayUserScore.innerHTML = userScore;
  displayBotScore.innerHTML = botScore;
});



/***********************************/
/*  JAVASCRIPT FOR INFINITE SWORD  */
/***********************************/

const swordSheath = document.getElementById('fourreau')
const sword = document.getElementById('sword');
const blade = document.getElementById('sword__blade');
const tip = document.getElementById('sword__tip');
var toTheTip = 1000;

/* On créé l'observer de nom "observer" */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addBlade(entry);
    }
  })
}, {
  rootMargin: "0px 0px 200% 0px"
});



/* Puis on indique l'élément à observer */

observer.observe(blade);

function  addBlade(entry) {
  toTheTip--;

  // On arrête d'observer l'ancienne lame.
  observer.unobserve(entry.target);

  if (toTheTip > 0) {
    // On clone notre lame pour en ajouter une en dessous
    let clonedBlade = blade.cloneNode(true);
    // On ajoute la nouvelle lame à l'épée
    sword.appendChild(clonedBlade);
    // On observe le dernier bout de lame (càd la lame clonée)
    observer.observe(clonedBlade);
  } else {
    let clonedTip = tip.cloneNode(true);
    sword.appendChild(clonedTip);
    clonedTip.classList.remove("hide");
  }
}

/* Affichage des Mini-Jeux */

const toggleShifumi = document.getElementById('shifumi__toggle__input');

toggleShifumi.addEventListener('click', function(e) {
	if (toggleShifumi.checked) {
		plateauShifumi.classList.replace("hide", "show");
	}
	else if (toggleShifumi.checked == false) {
		plateauShifumi.classList.replace("show", "hide");
	}
});

const toggleInfiniteSword = document.getElementById('sword-toggle__input');

toggleInfiniteSword.addEventListener('click', function(e) {
	if (toggleInfiniteSword.checked) {
		swordSheath.classList.replace("hide", "show");
	}
	else if (toggleInfiniteSword.checked == false) {
		swordSheath.classList.replace("show", "hide");
	}
});