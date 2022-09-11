let mainTree = 0;

const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");

let moveSaver = 0;

slot1.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = user[currentUP].move1name;
    slot2.textContent = user[currentUP].move2name;
    slot3.textContent = user[currentUP].move3name;
    slot4.textContent = user[currentUP].move4name;

    description.textContent = "";
    mainTree = 1;
  } else if (mainTree === 1) {
    if (user[currentUP].speed >= cpu[currentCP].speed) {
      user[currentUP].move1;
      console.log("me");
    } else {
      moveSaver = user[currentUP].move1;
      cpuMoveSelect();
    }
  } else if (mainTree === 2) {
    currentUserPokemon = 0;
    console.log(`send out ${userPokemon[currentUserPokemon].name}`);
    setTimeout(newUserPokemon, 1000);
    mainTree = 0;
  }
});

slot2.addEventListener("click", function () {
  if (mainTree === 0) {
    pickNewPokemon();
    mainTree = 2;
    turnCounter = 7;
    console.log("test");
  } else if (mainTree === 1) {
    powerSaver = 2;
    moveNameSaver = userPokemon[currentUserPokemon].move2;
    calcDamage(userPokemon[currentUserPokemon].move2Power);
  } else if (mainTree === 2) {
    console.log("send out blastoise");
    currentUserPokemon = 1;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

slot3.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = "You have no items, idiot";
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    setTimeout(resetMenu, 2000);
  } else if (mainTree === 1) {
    powerSaver = 3;
    moveNameSaver = userPokemon[currentUserPokemon].move3;
    calcDamage(userPokemon[currentUserPokemon].move3Power);
  } else if (mainTree === 2) {
    console.log("send out blastoise");
    currentUserPokemon = 2;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

slot4.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = "You Lose";
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";
    mainTree = 500;
  } else if (mainTree === 1) {
    powerSaver = 4;
    moveNameSaver = userPokemon[currentUserPokemon].move4;
    calcDamage(userPokemon[currentUserPokemon].move4Power);
  } else if (mainTree === 2) {
    console.log("send out blastoise");
    currentUserPokemon = 3;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

let randomNum = 0;

let cpuMoveSelect = function () {
  turnCount = 1;
  randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  if (randomNum <= 25) {
    cpu[currentCP].move1();
  } else if (randomNum <= 50) {
    cpu[currentCP].move2();
  } else if (randomNum <= 75) {
    cpu[currentCP].move3();
  } else if (randomNum <= 100) {
    cpu[currentCP].move4();
  }
};

let calculate = {
  damageCalc: function (power, acc, mT, type) {
    this.accuracyCalc(acc);
    this.effectivenessCalc(mT, type);
    damage = power * effectiveness * hit;
    console.log(`damage is ${damage}`);

    turnCount === 0 ? this.damageCPU() : this.damageUser();
  },

  effectivenessCalc: function (mT, type) {
    for (i = 0; i <= 1; i++) {
      console.log(mT);
      console.log(type[i]);

      switch (mT + type[i]) {
        case "FireWater":
          effectiveness = effectiveness * 0.5;
          break;
        case "FireGrass":
          effectiveness = effectiveness * 2;
          break;
        case "FireNormal":
          effectiveness = effectiveness * 1;
          break;
        case "FireFire":
          effectiveness = effectiveness * 0.5;
          break;
        case "FireFlying":
          effectiveness = effectiveness * 1;
          break;
        case "ElectricGrass":
          effectiveness = effectiveness * 0.5;
          break;
        case "ElectricNormal":
          effectiveness = effectiveness * 1;
          break;
      }
      console.log(effectiveness);
    }
  },

  accuracyCalc: function (acc) {
    randomNum = Math.floor(Math.random() * 100);
    console.log(`randomNum is ${randomNum}`);
    console.log(`${turn[turnCount][currentUP].move1name} accuracy is ${acc}`);
    randomNum <= acc ? (hit = 1) : (hit = 0);
    hit === 1
      ? console.log(
          `${turn[turnCount][currentUP].name} used ${turn[turnCount][currentUP].move1name}`
        )
      : console.log(`${turn[turnCount][currentUP].name} missed`);
  },

  changeHealth: function (i, side) {
    setTimeout(function () {
      side.percentWidth = i / side.health;

      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      }

      if (user[currentUP].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      }

      side === cpu[currentCP]
        ? (document.querySelector("#cpu-actual").style.width =
            200 * side.percentWidth + "px")
        : (document.querySelector("#user-actual").style.width =
            200 * side.percentWidth + "px");
    }, (side.oldHealth - i) * 10);
  },

  damageCPU: function () {
    if (damage >= cpu[currentCP].currentHealth) {
      cpu[currentCP].oldHealth = cpu[currentCP].currentHealth;
      cpu[currentCP].currentHealth = 0;
      for (
        let i = cpu[currentCP].oldHealth;
        i >= cpu[currentCP].currentHealth;
        i--
      ) {
        this.changeHealth(i, cpu[currentCP]);
      }
    } else if (damage < cpu[currentCP].currentHealth) {
      cpu[currentCP].oldHealth = cpu[currentCP].currentHealth;
      cpu[currentCP].currentHealth = cpu[currentCP].currentHealth - damage;
      console.log("me too");
      for (
        let i = cpu[currentCP].oldHealth;
        i >= cpu[currentCP].currentHealth;
        i--
      ) {
        this.changeHealth(i, cpu[currentCP]);
      }
    }
  },

  damageUser: function () {
    if (damage >= user[currentUP].currentHealth) {
      user[currentUP].oldHealth = user[currentUP].currentHealth;
      user[currentUP].currentHealth = 0;
      for (
        let i = user[currentUP].oldHealth;
        i >= user[currentUP].currentHealth;
        i--
      ) {
        this.changeHealth(i, user[currentUP]);
      }
    } else if (damage < user[currentUP].currentHealth) {
      console.log("das me");
      user[currentUP].oldHealth = user[currentUP].currentHealth;
      user[currentUP].currentHealth = user[currentUP].currentHealth - damage;
      for (
        let i = user[currentUP].oldHealth;
        i >= user[currentUP].currentHealth;
        i--
      ) {
        this.changeHealth(i, user[currentUP]);
      }
      turnCount = 0;
      moveSaver();
    }
  },
};

let hit = 0;
let turnCount = 0;
let effectiveness = 1;
currentUP = 0;
currentCP = 0;

let moves = {
  flamethrower: function () {
    turnCount === 0
      ? calculate.damageCalc(
          30,
          90,
          "Fire",
          cpu[currentUP].type,
          cpu[currentCP].attack
        )
      : calculate.damageCalc(30, 90, "Fire", user[currentUP].type);
  },
  thunder: function () {
    turnCount === 0
      ? calculate.damageCalc(120, 70, "Electric", cpu[currentUP].type)
      : calculate.damageCalc(120, 70, "Electric", user[currentUP].type);
  },
};

let pokemon = {
  pikachu: {
    name: "Pikachu",
    type: ["Electric", "Normal"],
    move1name: "Thunder",
    move1: moves.thunder,
    move2name: "Thunder",
    move2: moves.thunder,
    move3name: "Thunder",
    move3: moves.thunder,
    move4name: "Thunder",
    move4: moves.thunder,
    health: 200,
    oldHealth: 200,
    currentHealth: 200,
    health: 200,
    percentWidth: 1,
    speed: 5,
  },

  charmander: {
    name: "charmander",
    type1: "Fire",
    type2: "Flying",
    move1name: "Flamethrower",
    move1: moves.flamethrower,
    health: 200,
    oldHealth: 200,
    currentHealth: 200,
    health: 200,
    percentWidth: 1,
  },

  squirtle: {
    type: ["Water", "Normal"],
    move1name: "Thunder",
    move1: moves.thunder,
    move2name: "Flamethrower",
    move2: moves.flamethrower,
    move3name: "Thunder",
    move3: moves.thunder,
    move4name: "Thunder",
    move4: moves.thunder,
    health: 200,
    oldHealth: 200,
    currentHealth: 200,
    health: 200,
    percentWidth: 1,
    speed: 75,
  },

  bulbasaur: {
    name: "Bulbasaur",
    type: ["Grass", "Normal"],
    health: 200,
    oldHealth: 200,
    currentHealth: 200,
    health: 200,
    percentWidth: 1,
  },
};

let user = [pokemon.pikachu, pokemon.charmander];
let cpu = [pokemon.squirtle, pokemon.bulbasaur];

let turn = [user, cpu];
