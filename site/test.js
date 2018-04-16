let player = {};

let fn = (id) => {
  const req = new XMLHttpRequest ();
  let url = "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/" +id + .'json'

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
}

fn(620);

setTimeout(function(){console.log(player);
},1000)
