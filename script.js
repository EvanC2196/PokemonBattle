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

    mainTree = 1;
  } else if (mainTree === 1) {
    if (user[currentUP].speed >= cpu[currentCP].speed) {
      user[currentUP].move1();
    } else {
      speedcount = 1;
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
    if (user[currentUP].speed >= cpu[currentCP].speed) {
      user[currentUP].move2();
    } else {
      speedcount = 1;
      moveSaver = user[currentUP].move2;
      cpuMoveSelect();
    }
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
    if (user[currentUP].speed >= cpu[currentCP].speed) {
      user[currentUP].move3();
    } else {
      speedcount = 1;
      moveSaver = user[currentUP].move3;
      cpuMoveSelect();
    }
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
    if (user[currentUP].speed >= cpu[currentCP].speed) {
      user[currentUP].move4();
    } else {
      speedcount = 1;
      moveSaver = user[currentUP].move4;
      cpuMoveSelect();
    }
  } else if (mainTree === 2) {
    console.log("send out blastoise");
    currentUserPokemon = 3;
    setTimeout(newUserPokemon, 1000);
    console.log("CPU turn");
    mainTree = 0;
  }
});

let randomNum = 0;
let stab = 0;
let critical = 0;

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
  damageCalc: function (N, MN, power, acc, attT, mT, defT, attack, defense) {
    effectiveness = 1;
    console.log(`${N} used ${MN}`);
    slot1.textContent = `${N} used ${MN}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";

    this.stabCalc(attT, mT);
    this.critCalc();
    this.accuracyCalc(acc);
    this.effectivenessCalc(mT, defT);

    switch (effectiveness) {
      case 2:
        console.log("It was super effective");
        break;
      case 0.5:
        console.log("It was not very effective");
    }

    damage =
      ((((2 * 100) / 5 + 2) * power * (attack / defense)) / 50 + 2) *
      stab *
      effectiveness *
      critical *
      hit;

    console.log(`Power is ${power}`);
    console.log(`STAB is ${stab}`);
    console.log(`Effectiveness is ${effectiveness}`);
    console.log(`It did ${damage} damage`);

    turnCount === 0 ? this.damageCPU() : this.damageUser();
  },

  effectivenessCalc: function (mT, defT) {
    for (i = 0; i <= 1; i++) {
      console.log(mT);
      console.log(defT[i]);

      switch (mT + defT[i]) {
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
        case "ElectricWater":
          effectiveness = effectiveness * 2;
          break;
        case "SteelWater":
          effectiveness = effectiveness * 0.5;
          break;
        case "SteelNormal":
          effectiveness = effectiveness * 1;
          break;
        case "NormalElectric":
          effectiveness = effectiveness * 1;
          break;
        case "NormalNormal":
          effectiveness = effectiveness * 1;
          break;
      }
      console.log(effectiveness);
    }
  },

  accuracyCalc: function (acc) {
    randomNum = Math.floor(Math.random() * 100);
    console.log(`randomNum is ${randomNum}`);
    console.log(`accuracy is ${acc}`);
    randomNum <= acc ? (hit = 1) : (hit = 0);
  },

  critCalc: function () {
    randomNum = Math.random() * 100;
    if (randomNum <= 6.25) {
      critical = 2;
    } else {
      critical = 1;
    }
  },

  stabCalc: function (attT, mT) {
    if (attT[0] === mT || attT[1] === mT) {
      stab = 1.5;
    } else {
      stab = 1;
    }
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
      console.log("me");
      faintedCPU();
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
      turnCount = 1;
      setTimeout(cpuMoveSelect, 3000);
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
      speedcount === 1 ? moveSaver : setTimeout(resetMenu, 3000);
    }
  },
};

let resetMenu = function () {
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  document.querySelector("#action-box div").style.marginTop = `0px`;
  slot1.textContent = "Fight";
  slot2.textContent = "Pokemon";
  slot3.textContent = "Bag";
  slot4.textContent = "Run";
  mainTree = 0;
  turnCounter = 0;
  console.log("test");
};

let faintedCPU = function () {
  document.querySelector("#cpu-pokemon img").classList.remove("damageFlicker");
  document.querySelector("#cpu-pokemon img").classList.add("cpuFaintAnimation");
  delete cpuPokemon[currentCpuPokemon];
  if (
    cpuPokemon[0] === undefined &&
    cpuPokemon[1] === undefined &&
    cpuPokemon[2] === undefined &&
    cpuPokemon[3] === undefined
  ) {
    console.log("YOU WIN");
  } else {
    console.log(cpuPokemon);
    checkUndefined();
  }
};

let checkUndefined = function () {
  currentCpuPokemon = Math.floor(Math.random() * 4);
  console.log(currentCpuPokemon);
  if (cpuPokemon[currentCpuPokemon] === undefined) {
    checkUndefined();
    console.log("run again");
  } else {
    newCpuPokemon();
    console.log("me");
  }
};

let newCpuPokemon = function () {
  switch (currentCpuPokemon) {
    case 0:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      break;
    case 1:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 2:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 3:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
  }
};

let sendOutdefText = function () {
  slot1.textContent = `Chad sent out ${cpuPokemon[currentCpuPokemon].name}`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
  console.log(`current cpu is ${currentCpuPokemon}`);
};

let speedcount = 0;
let hit = 0;
let turnCount = 0;
let effectiveness = 1;
currentUP = 0;
currentCP = 0;

let moves = {
  flamethrower: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Flamethrower",
          90,
          100,
          user[currentUP].type,
          "Fire",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Flamethrower",
          90,
          100,
          cpu[currentCP].type,
          "Fire",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  thunder: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Thunder",
          110,
          70,
          user[currentUP].type,
          "Electric",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Thunder",
          120,
          70,
          cpu[currentCP].type,
          "Electric",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  thunderbolt: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Thunderbolt",
          90,
          100,
          user[currentUP].type,
          "Electric",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Thunderbolt",
          90,
          100,
          cpu[currentCP].type,
          "Electric",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  ironTail: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Iron Tail",
          100,
          75,
          user[currentUP].type,
          "Steel",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Iron Tail",
          100,
          75,
          cpu[currentCP].type,
          "Steel",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  quickAttack: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Quick Attack",
          40,
          100,
          user[currentUP].type,
          "Normal",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Quick Attack",
          40,
          100,
          cpu[currentCP].type,
          "Normal",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  waterPulse: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "WaterPulse",
          60,
          100,
          user[currentUP].type,
          "Water",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "WaterPulse",
          60,
          100,
          cpu[currentCP].type,
          "Water",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  headButt: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Headbutt",
          70,
          100,
          user[currentUP].type,
          "Normal",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Headbutt",
          70,
          100,
          cpu[currentCP].type,
          "Normal",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  iceBeam: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Ice Beam",
          90,
          100,
          user[currentUP].type,
          "Ice",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Ice Beam",
          90,
          100,
          cpu[currentCP].type,
          "Ice",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
};

let pokemon = {
  pikachu: {
    name: "Pikachu",
    type: ["Electric", "Normal"],
    move1name: "Thunder",
    move1: moves.thunder,
    move2name: "Thunderbolt",
    move2: moves.thunderbolt,
    move3name: "Iron Tail",
    move3: moves.ironTail,
    move4name: "Quick Attack",
    move4: moves.quickAttack,
    health: 274,
    oldHealth: 274,
    currentHealth: 274,
    health: 274,
    percentWidth: 1,
    attack: 229,
    defense: 196,
    specialAttack: 218,
    specialDefense: 218,
    speed: 306,
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
    name: "Squirtle",
    type: ["Water", "Normal"],
    move1name: "Quick Attack",
    move1: moves.quickAttack,
    move2name: "Water Pulse",
    move2: moves.waterPulse,
    move3name: "Headbutt",
    move3: moves.headButt,
    move4name: "Ice Beam",
    move4: moves.iceBeam,
    health: 292,
    oldHealth: 292,
    currentHealth: 292,
    health: 292,
    percentWidth: 1,
    attack: 214,
    defense: 251,
    specialAttack: 218,
    specialDefense: 249,
    speed: 203,
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
