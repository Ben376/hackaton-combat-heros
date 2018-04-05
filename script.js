// creation de la fonction showhero qui permet de récupérer les info des heros dans la page d'acceuil */

const showhero = (myId) =>{
    const req = new XMLHttpRequest();
    let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" + myId + ".json";

    req.onreadystatechange = function(){
        if (req.readyState === 4 && req.status === 200){
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


const validPerso = () => {
    if (!document.getElementById('Name').innerHTML){
        alert("Merci de choisir un personnage")
    }
    else{
        alert("Votre choix est validé")
    }

}
