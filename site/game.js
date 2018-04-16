var CheminComplet = document.location.href;
var CheminRepertoire  = CheminComplet.substring( 0 ,CheminComplet.lastIndexOf( "/" ) );
var NomDuFichier  = CheminComplet.substring(CheminComplet.lastIndexOf( "/" )+1 );
var tabID = NomDuFichier.split("?")
var id1 = tabID[1];
var id2 = tabID[2];

console.log(id1);
console.log(id2);

let player1 = {};

const joueur1 = (id) => {
  const req = new XMLHttpRequest();
  let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json";

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      const json = JSON.parse(this.responseText);
      document.getElementById('Namej1').innerHTML = json.name;
      document.getElementById('Intelligence1').innerHTML = json.powerstats.intelligence;
      document.getElementById('Force1').innerHTML = json.powerstats.strength;
      document.getElementById('Vitesse1').innerHTML = json.powerstats.speed;
      document.getElementById('Endurence1').innerHTML = json.powerstats.durability;
      document.getElementById('Puissance1').innerHTML = json.powerstats.power;
      document.getElementById('Attaque1').innerHTML = json.powerstats.combat;
      document.getElementById('logo1').src = json.images.lg
      player1 = json;
    }
  }
  req.open('GET', url, true);
  req.send();
};
setTimeout(function(){
},1000)

joueur1(id1)


let player2 = {};
const joueur2 = (id) => {
  const req = new XMLHttpRequest();
  let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json";

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      const json = JSON.parse(this.responseText);
      document.getElementById('Namej2').innerHTML = json.name;
      document.getElementById('Intelligence2').innerHTML = json.powerstats.intelligence;
      document.getElementById('Force2').innerHTML = json.powerstats.strength;
      document.getElementById('Vitesse2').innerHTML = json.powerstats.speed;
      document.getElementById('Endurence2').innerHTML = json.powerstats.durability;
      document.getElementById('Puissance2').innerHTML = json.powerstats.power;
      document.getElementById('Attaque2').innerHTML = json.powerstats.combat;
      document.getElementById('logo2').src = json.images.lg
      player2 = json;
    }
  }
  req.open('GET', url, true);
  req.send();
};
setTimeout(function(){
},1000)
joueur2(id2)


let puissanceAttaque = 0;

let attaquePuissante = () => {
  let perso1 = player1;
  let perso2 = player2;

  let healthJ2 = document.getElementById("healthJ2");
  healthJ2.max = perso2.powerstats.durability;
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.strength/6)));
  let sentence = document.getElementById('sentence-fight');
  if (perso1.powerstats.strength > perso2.powerstats.strength) {
    perso2.powerstats.durability -= puissanceAttaque * 4;
    healthJ2.value -= puissanceAttaque * 4;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`;
  } else if (perso2.powerstats.strength < perso1.powerstats.strength) {
    perso2.powerstats.durability -= puissanceAttaque / 2;
    healthJ2.value -= puissanceAttaque / 2;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts .Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  } else {
    perso2.powerstats.durability -= puissanceAttaque;
    healthJ2.value -= puissanceAttaque ;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts. Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  }

  if (perso2.powerstats.durability < 0) {
    alert(`Le combat ets terminé ! ${perso1.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}

let attaqueSournoise = () => {
  let perso1 = player1;
  let perso2 = player2;
  let healthJ2 = document.getElementById("healthJ2");
  healthJ2.max = perso2.powerstats.durability;
  let sentence = document.getElementById('sentence-fight');
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.intelligence/6)));
  if (perso1.powerstats.intelligence > perso2.powerstats.intelligence) {
    perso2.powerstats.durability -= puissanceAttaque * 4;

    healthJ2.value -= puissanceAttaque * 4;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`;
  } else if (perso2.powerstats.intelligence < perso1.powerstats.intelligence) {
    perso2.powerstats.durability -= puissanceAttaque /2;

    healthJ2.value -= puissanceAttaque /2;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts. Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  } else {
    perso2.powerstats.durability -= puissanceAttaque;

    healthJ2.value -= puissanceAttaque ;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts. Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  }
  if (perso2.powerstats.durability < 0) {
    alert(`Le combat ets terminé ! ${perso1.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}

let attaqueRapide = () => {
  let perso1 = player1;
  let perso2 = player2;
  let healthJ2 = document.getElementById("healthJ2");
  healthJ2.max = perso2.powerstats.durability;
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.speed/6)));
  if (perso1.powerstats.speed > perso2.powerstats.speed) {
    perso2.powerstats.durability -= puissanceAttaque * 4;
    healthJ2.value -= puissanceAttaque * 4;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`;
  } else if (perso2.powerstats.speed < perso1.powerstats.speed) {
    perso2.powerstats.durability -= puissanceAttaque/2;
    healthJ2.value -= puissanceAttaque/2;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts . Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  } else {
    perso2.powerstats.durability -= puissanceAttaque;
    healthJ2.value -= puissanceAttaque;
    document.getElementById('Endurence2').innerHTML = perso2.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts .Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso2.name}`
  }
  if (perso2.powerstats.durability < 0) {
    alert(`Le combat ets terminé ! ${perso1.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}


let attaquePuissante1 = () => {
  let perso1 = player1;
  let perso2 = player2;
  let healthJ1 = document.getElementById("healthJ1");
  healthJ1.max = perso1.powerstats.durability;
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.strength/6)));
  let sentence = document.getElementById('sentence-fight');
  if (perso2.powerstats.strength > perso1.powerstats.strength) {
    perso1.powerstats.durability -= puissanceAttaque * 4;
    healthJ1.value -= puissanceAttaque * 4;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`;
  } else if (perso1.powerstats.strength < perso2.powerstats.strength) {
    perso1.powerstats.durability -= puissanceAttaque/2;
    healthJ1.value -= puissanceAttaque/2;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque/2} points de dégâts .Il reste ${Math.round(perso2.powerstats.durability)} points d'endurance à ${perso1.name}`
  } else {
    perso1.powerstats.durability -= puissanceAttaque;
    healthJ1.value -= puissanceAttaque;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque} points de dégâts. Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`
  }
  if (perso1.powerstats.durability < 0) {
    alert(`Le combat ets terminé ! ${perso2.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}

let attaqueSournoise1 = () => {
  let perso1 = player1;
  let perso2 = player2;
  let healthJ1 = document.getElementById("healthJ1");
  healthJ1.max = perso1.powerstats.durability;
  let sentence = document.getElementById('sentence-fight');
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.intelligence/6)));
  if (perso2.powerstats.intelligence > perso1.powerstats.intelligence) {
    perso1.powerstats.durability -= puissanceAttaque * 4;
    healthJ1.value -= puissanceAttaque * 4;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`;
  } else if (perso1.powerstats.intelligence < perso2.powerstats.intelligence) {
    perso1.powerstats.durability -= puissanceAttaque/2;
    healthJ1.value -= puissanceAttaque/2;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque/2} points de dégâts. Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`
  } else {
    perso1.powerstats.durability -= puissanceAttaque;
    healthJ1.value -= puissanceAttaque;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque} points de dégâts. Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`
  }
  if (perso1.powerstats.durability < 0) {
    alert(`Le combat ets terminé ! ${perso2.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}

let attaqueRapide1 = () => {
  let perso1 = player1;
  let perso2 = player2;
  let healthJ1 = document.getElementById("healthJ1");
  healthJ1.max = perso1.powerstats.durability;
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.powerstats.speed/6)));
  if (perso2.powerstats.speed > perso1.powerstats.speed) {
    perso1.powerstats.durability -= puissanceAttaque * 4;
    healthJ1.value -= puissanceAttaque * 4;
    document.getElementById('Endurence1').innerHTML = perso2.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque * 4} points de dégâts.
    Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`;
  } else if (perso2.powerstats.speed < perso1.powerstats.speed) {
    perso1.powerstats.durability -= puissanceAttaque/2;
    healthJ1.value -= puissanceAttaque/2;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML = `${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque/2} points de dégâts . Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`
  } else {
    perso1.powerstats.durability -= puissanceAttaque;
    healthJ1.value -= puissanceAttaque;
    document.getElementById('Endurence1').innerHTML = perso1.powerstats.durability;
    let sentence = document.getElementById('sentence-fight');
    sentence.style.display = "block";
    document.getElementById("content-fight").innerHTML =`${perso2.name} attaque ${perso1.name} et inflige ${puissanceAttaque} points de dégâts .Il reste ${Math.round(perso1.powerstats.durability)} points d'endurance à ${perso1.name}`
  }
  if (perso1.powerstats.durability < 0) {
    alert(`Le combat est terminé ! ${perso2.name} est victorieux !! `)
    window.location.href = ('../index.html')
  }
}
















/*
const attack1 = () => {
let attaquant = document.getElementById('Namej1').innerHTML;
let victime = document.getElementById('Namej2').innerHTML;
let name_attaque = document.getElementById('attack1').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;

const attack2 = () => {
let attaquant = document.getElementById('Namej1').innerHTML;
let victime = document.getElementById('Namej2').innerHTML;
let name_attaque = document.getElementById('attack2').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;
}
const attack3 = () => {
let attaquant = document.getElementById('Namej1').innerHTML;
let victime = document.getElementById('Namej2').innerHTML;
let name_attaque = document.getElementById('attack3').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;
}


const attack4 = () => {
let attaquant = document.getElementById('Namej2').innerHTML;
let victime = document.getElementById('Namej1').innerHTML;
let name_attaque = document.getElementById('attack4').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;
}

const attack5 = () => {
let attaquant = document.getElementById('Namej2').innerHTML;
let victime = document.getElementById('Namej1').innerHTML;
let name_attaque = document.getElementById('attack5').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;
}

const attack6 = () => {
let attaquant = document.getElementById('Namej2').innerHTML;
let victime = document.getElementById('Namej1').innerHTML;
let name_attaque = document.getElementById('attack6').innerHTML;
let sentence = document.getElementById('sentence-fight');
sentence.style.display = "block";
document.getElementById("content-fight").innerHTML = attaquant + " attaque " + victime + " avec " + name_attaque;
}

*/
