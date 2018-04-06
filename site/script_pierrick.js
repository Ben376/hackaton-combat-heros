// creation de la fonction showhero qui permet de récupérer les info des heros dans la page d'acceuil */

const showhero = (myId) =>{
    const req = new XMLHttpRequest();
    let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + myId + ".json";

    req.onreadystatechange = function(){
        if (req.readyState === 4 && req.status === 200){
            let id_joueur = myId;
            const json = JSON.parse(this.responseText);
            document.getElementById('Name').innerHTML = json.name;
            document.getElementById('Genre').innerHTML = json.appearance.gender;
            document.getElementById('Race').innerHTML = json.appearance.race;
            document.getElementById('Taille').innerHTML = json.appearance.height[1];
            document.getElementById('Poids').innerHTML = json.appearance.weight[1];
            document.getElementById('Intelligence').innerHTML = json.powerstats.intelligence;
            document.getElementById('Force').innerHTML = json.powerstats.strength;
            document.getElementById('Vitesse').innerHTML = json.powerstats.speed;
            document.getElementById('Endurence').innerHTML = json.powerstats.durability;
            document.getElementById('Puissance').innerHTML = json.powerstats.power;
            document.getElementById('Attaque').innerHTML = json.powerstats.combat;
        }
    }
    req.open('GET', url, true);
    req.send();
};


const validPerso1 = () => {
    let bouton = document.getElementById("bouton_j1");
    if (!document.getElementById('Name').innerHTML){
        alert("Merci de choisir un personnage")
    }
    else{
    let perso1 = {
            name : document.getElementById('Name').innerHTML,
            Genre : document.getElementById('Genre').innerHTML,
            Race : document.getElementById('Race').innerHTML,
            Taille : document.getElementById('Taille').innerHTML,
            Poids : document.getElementById('Poids').innerHTML,
            Intelligence : document.getElementById('Intelligence').innerHTML,
            Force : document.getElementById('Force').innerHTML,
            Vitesse : document.getElementById('Vitesse').innerHTML,
            Endurence : document.getElementById('Endurence').innerHTML,
            Puissance : document.getElementById('Puissance').innerHTML,
            Attaque : document.getElementById('Attaque').innerHTML,
            KO : false
        }
        console.log(perso1)
        bouton.style.display = "none"
        alert("Votre choix est validé")
    }
}



const validPerso2 = () => {
    let bouton = document.getElementById("bouton_j2");
    if (!document.getElementById('Name').innerHTML){
        alert("Merci de choisir un personnage")
    }
    else{
    let perso2 = {
            name : document.getElementById('Name').innerHTML,
            Genre : document.getElementById('Genre').innerHTML,
            Race : document.getElementById('Race').innerHTML,
            Taille : document.getElementById('Taille').innerHTML,
            Poids : document.getElementById('Poids').innerHTML,
            Intelligence : document.getElementById('Intelligence').innerHTML,
            Force : document.getElementById('Force').innerHTML,
            Vitesse : document.getElementById('Vitesse').innerHTML,
            Endurence : document.getElementById('Endurence').innerHTML,
            Puissance : document.getElementById('Puissance').innerHTML,
            Attaque : document.getElementById('Attaque').innerHTML,
            KO : false
        }
        console.log(perso2)
        bouton.style.display = "none"
        alert("Votre choix est validé")
    }
}

let persoX = {
    name : 'Jean',
    Intelligence : 40,
    Force : 54,
    Vitesse : 19,
    Endurence : 57,
    Puissance : 80,
    Attaque : 30,
}

let persoY = {
    name : 'René',
    Intelligence : 30,
    Force : 60,
    Vitesse : 80,
    Endurence : 38,
    Puissance : 53,
    Attaque : 90,
}


let puissanceAttaque = 0;

let attaquePuissante = (perso1, perso2) => {
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.Force/6)));
  if (perso1.Force > perso2.Force) {
    perso2.Endurence -= puissanceAttaque * 4;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else if (perso2.Force < perso1.Force) {
    perso2.Endurence -= puissanceAttaque;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else {
    perso2.Endurence -= puissanceAttaque/2;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  }
}


let attaqueSournoise = (perso1, perso2) => {
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.Intelligence/6)));
  if (perso1.Intelligence > perso2.Intelligence) {
    perso2.Endurence -= puissanceAttaque * 4;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else if (perso2.Intelligence < perso1.Intelligence) {
    perso2.Endurence -= puissanceAttaque;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else {
    perso2.Endurence -= puissanceAttaque/2;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  }
}

let attaqueRapide = (perso1, perso2) => {
  puissanceAttaque = Math.round(Math.random() * (Math.round(perso1.Vitesse/6)));
  if (perso1.Vitesse > perso2.Vitesse) {
    perso2.Endurence -= puissanceAttaque * 4;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque * 4} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else if (perso2.Vitesse < perso1.Vitesse) {
    perso2.Endurence -= puissanceAttaque;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  } else {
    perso2.Endurence -= puissanceAttaque/2;
    return(`${perso1.name} attaque ${perso2.name} et inflige ${puissanceAttaque/2} points de dégâts`);
    return(`Il reste ${Math.round(perso2.Endurence)} points d'endurance à ${perso2.name}`);
  }
}

let attaqueUltime = (perso1, perso2) => {
  if (perso1.Ultime === 0) {
    // Diminue la vie de l'adversaire
    puissanceAttaque = Math.floor(Math.random() * Math.floor(perso1.Puissance / 2));
    perso2.Endurence = perso2.Endurence - puissanceAttaque;
    // Diminue la vie de l'attaquant
    perso1.Endurence = Math.floor(perso1.Endurence - perso1.Force / 10);
    // Incrémente le nombre d'attaques ultimes
    perso1.Ultime = perso1.Ultime + 1;
    // Renvoie les valeurs
    return perso1.Endurence;
    return perso2.Endurence;
  } else if (perso1.Ultime > 0) {
    return(`Vous avez déjà utilisé votre attaque ultime`);
  }
}
