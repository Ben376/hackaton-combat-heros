// creation de la fonction showhero qui permet de récupérer les info des heros dans la page d'acceuil */
const showhero = (myId) => {
    const req = new XMLHttpRequest();
    let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + myId + ".json";

    req.onreadystatechange = function() {
        if (req.readyState === 4 && req.status === 200) {
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
            document.getElementById('myId').innerHTML = json.id;
            }
    }
    req.open('GET', url, true);
    req.send();
};


const validPerso1 = () => {
        let bouton = document.getElementById("bouton_j1");
        if (!document.getElementById('Name').innerHTML) {
            alert("Merci de choisir un personnage")
        }
        else {
            let perso1 = {
                id: document.getElementById('myId').innerHTML,
                name: document.getElementById('Name').innerHTML,
                Genre: document.getElementById('Genre').innerHTML,
                Race: document.getElementById('Race').innerHTML,
                Taille: document.getElementById('Taille').innerHTML,
                Poids: document.getElementById('Poids').innerHTML,
                Intelligence: document.getElementById('Intelligence').innerHTML,
                Force: document.getElementById('Force').innerHTML,
                Vitesse: document.getElementById('Vitesse').innerHTML,
                Endurence: document.getElementById('Endurence').innerHTML,
                Puissance: document.getElementById('Puissance').innerHTML,
                Attaque: document.getElementById('Attaque').innerHTML,
        }
            bouton.style.display = "none"
            console.log(perso1);
            alert("Vous avez choisi " + perso1.name)
            return perso1
        }
    }


        const validPerso2 = () => {
            let bouton = document.getElementById("bouton_j2");
            if (!document.getElementById('Name').innerHTML) {
                alert("Merci de choisir un personnage")
            } else {
                let perso2 = {
                    id: document.getElementById('myId').innerHTML,
                    name: document.getElementById('Name').innerHTML,
                    Genre: document.getElementById('Genre').innerHTML,
                    Race: document.getElementById('Race').innerHTML,
                    Taille: document.getElementById('Taille').innerHTML,
                    Poids: document.getElementById('Poids').innerHTML,
                    Intelligence: document.getElementById('Intelligence').innerHTML,
                    Force: document.getElementById('Force').innerHTML,
                    Vitesse: document.getElementById('Vitesse').innerHTML,
                    Endurence: document.getElementById('Endurence').innerHTML,
                    Puissance: document.getElementById('Puissance').innerHTML,
                    Attaque: document.getElementById('Attaque').innerHTML,

            }
                console.log(perso2)
                bouton.style.display = "none"
                alert("Vous avez choisi " + perso2.name)
                //return perso2
            }
        }



        /* Script suivant de la deuxième page */



        class player {
           constructor (name, speed, power, strength, intelligence,durability) {
               this.name = name;
               this.speed = speed;
               this.power = power;
               this.strength = strength;
               this.power = power;
               this.intelligence = intelligence;
               this.durability = durability;
           }
        }

        let fighter = [];

        function createPlayer1() {
        idArray = [620, 149, 680, 687, 720, 717, 346, 370, 659, 69, 561, 644, 263, 630, 383, 404, 450, 228, 541, 418, 729, 208, 207, 176]
        for (var i = 0; i < idArray.length; i++) {
        let id = idArray[i]
        window.fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`)
            .then(res => res.json())
            .then(resJson => {
             fighter[i] = new player(resJson.name, resJson.powerstats.power, resJson.powerstats.speed, resJson.powerstats.strength, resJson.powerstats.intelligence, resJson.powerstats.durability);
                });
            }

        }

        console.log(fighter);
        createPlayer1();

        setTimeout(function() {
           console.log("war1 : ", player1);
        }, 2000)




















/*

idArray = [620, 149, 680, 687, 720, 717, 346, 370, 659, 69, 561, 644, 263, 630, 383, 404, 450, 228, 541, 418, 729, 208, 207, 176]
for (var i= 0; i < idArray.length; i++) {
        let id = idArray[i]
       console.log("id de l'objet " + id);
       let maRequete = new XMLHttpRequest();
       let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + id + ".json"
       maRequete.open("GET", url, true);
       maRequete.responseType = 'json';
       maRequete.send();
       maRequete.onload = function () {
           // MON OBJ dans un variable
           let superHeroes = maRequete.response;
           let heroe_obj = JSON.parse(superHeroes)
           console.log(heroe_obj)
       }
   }

*/


/*
 Solution mais pas tip top

let Perso1 = {
    id : '',
    name : '',
    Genre : '',
    Race : '',
    Taille : '',
    Poids : '',
    Intelligence : '',
    Force : '',
    Vitesse : '',
    Endurence  :'',
    Puissance : '',
    Attaque : ''
}
console.log(Perso1);

const validPerso10 = (_obj) => {

                _obj.id = document.getElementById('myId').innerHTML,
                _obj.name = document.getElementById('Name').innerHTML,
                _obj.Genre = document.getElementById('Genre').innerHTML,
                _obj.Race = document.getElementById('Race').innerHTML,
                _obj.Taille = document.getElementById('Taille').innerHTML,
                _obj.Poids = document.getElementById('Poids').innerHTML,
                _obj.Intelligence = document.getElementById('Intelligence').innerHTML,
                _obj.Force = document.getElementById('Force').innerHTML,
                _obj.Vitesse = document.getElementById('Vitesse').innerHTML,
                _obj.Endurence = document.getElementById('Endurence').innerHTML,
                _obj.Puissance = document.getElementById('Puissance').innerHTML,
                _obj.Attaque = document.getElementById('Attaque').innerHTML,

            console.log(Perso1);
            return Perso1;
        //}
    }

validPerso1(Perso1);
console.log(Perso1);

*/
