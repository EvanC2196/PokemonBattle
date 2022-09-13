//VARIABLES
let mainTree = 0;
let moveSaver = 0;
let randomNum = 0;
let stab = 0;
let critical = 0;
let speedcount = 0;
let hit = 0;
let turnCount = 0;
let turnCounter = 0;
let effectiveness = 1;
let currentUP = 0;
let currentCP = 0;

//MENU
const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");

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
    console.log(`send out ${user[currentUP].name}`);
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
    currentUPokemon = 1;
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

const test = function () {
  slot1.textContent = `It was super effective`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

let fire1 = function () {
  document.querySelector("#game").classList.add("fire");
};
let fire2 = function () {
  document.querySelector("#game").classList.remove("fire");
};
let electric1 = function () {
  console.log("asdfasdf");
  document.querySelector("#game").classList.add("electric");
};
let electric2 = function () {
  document.querySelector("#game").classList.remove("electric");
};
let water1 = function () {
  document.querySelector("#game").classList.add("water");
};
let water2 = function () {
  document.querySelector("#game").classList.remove("water");
};
let steel1 = function () {
  document.querySelector("#game").classList.add("steel");
};
let steel2 = function () {
  document.querySelector("#game").classList.remove("steel");
};

let notSuper = function () {
  slot1.textContent = `It was not very effective`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

//CALCULATIONS
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
        setTimeout(test, 750);

        break;
      case 0.5:
        console.log("It was not very effective");
        setTimeout(notSuper, 750);
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
          fire1();
          setTimeout(fire2, 100);
          break;
        case "FireIce":
          effectiveness = effectiveness * 2;
          fire1();
          setTimeout(fire2, 100);
          break;
        case "FireGrass":
          effectiveness = effectiveness * 2;
          fire1();
          setTimeout(fire2, 100);
          break;
        case "FireNormal":
          effectiveness = effectiveness * 1;
          fire1();
          setTimeout(fire2, 100);
          break;
        case "FireFire":
          effectiveness = effectiveness * 0.5;
          fire1();
          setTimeout(fire2, 100);
          break;
        case "FireFlying":
          effectiveness = effectiveness * 1;
          fire1();
          setTimeout(fire2, 100);
          break;
        case "ElectricGrass":
          effectiveness = effectiveness * 0.5;
          electric1();
          setTimeout(electric2, 1000);
          break;
        case "ElectricNormal":
          effectiveness = effectiveness * 1;
          electric1();
          setTimeout(electric2, 1000);
          break;
        case "ElectricWater":
          effectiveness = effectiveness * 2;
          electric1();
          setTimeout(electric2, 1000);
          break;
        case "ElectricFlying":
          effectiveness = effectiveness * 2;
          electric1();
          setTimeout(electric2, 1000);
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
        case "WaterFire":
          effectiveness = effectiveness * 2;
          break;
        case "WaterElectric":
          effectiveness = effectiveness * 1;
          water1();
          setTimeout(water2, 1000);
          break;
        case "WaterNormal":
          effectiveness = effectiveness * 1;
          water1();
          setTimeout(water2, 1000);
          break;
        case "SteelNormal":
          effectiveness = effectiveness * 1;
          steel1();
          setTimeout(steel2, 1000);
          break;
        case "SteelWater":
          effectiveness = effectiveness * 0.5;
          steel1();
          setTimeout(steel2, 1000);
          break;
        case "SteelFlying":
          effectiveness = effectiveness * 0.5;
          steel1();
          setTimeout(steel2, 1000);
          break;
        case "GroundElectric":
          effectiveness = effectiveness * 2;

          break;
        case "GroundNormal":
          effectiveness = effectiveness * 1;

          break;
        case "PsychicFire":
          effectiveness = effectiveness * 1;

          break;
        case "PsychicFlying":
          effectiveness = effectiveness * 1;

          break;
        default:
          effectiveness = effectiveness * 1;
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
      setTimeout(faintedCPU, 1000);
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
      if (speedcount === 1) {
        setTimeout(resetMenu, 3000);
      } else {
        setTimeout(cpuMoveSelect, 3000);
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

        setTimeout(faintedUser, 3000);
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
      if (speedcount === 1) {
        setTimeout(moveSaver, 3000);
      } else {
        setTimeout(resetMenu, 3000);
      }
    }
  },
};

//CPU TURN
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

//RESET MENU
let resetMenu = function () {
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  document.querySelector("#action-box div").style.marginTop = `0px`;
  slot1.textContent = "Fight";
  slot2.textContent = "Pokemon";
  slot3.textContent = "Bag";
  slot4.textContent = "Run";
  mainTree = 0;
  turnCount = 0;
  console.log("test");
};

let faintedUser = function () {
  slot1.textContent = `${user[currentUP].name} fainted`;
  slot2.textContent = ``;
  slot3.textContent = ``;
  slot4.textContent = ``;
  delete user[currentUP];
  console.log("me");

  if (user[0] === undefined && user[1] === undefined) {
    console.log("YOU LOSE");
  } else {
    setTimeout(pickNewPokemon, 2000);
    mainTree = 2;
  }
};

let pokemon1 = document.querySelector("#pokemon1");
let pokemon2 = document.querySelector("#pokemon2");
let pokemon3 = document.querySelector("#pokemon3");
let pokemon4 = document.querySelector("#pokemon4");
let pokemon5 = document.querySelector("#pokemon5");
let pokemon6 = document.querySelector("#pokemon6");

let pickNewPokemon = function () {
  slot1.textContent = `Pick new Pokemon`;
  slot2.textContent = ``;
  slot3.textContent = ``;
  slot4.textContent = ``;
  document.querySelector("#action-box div").style.marginTop = `0px`;
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  if (user[0] === undefined) {
    pokemon1.textContent = "Fainted";
  } else {
    pokemon1.textContent = user[0].name;
  }
  if (user[1] === undefined) {
    pokemon2.textContent = "Fainted";
  } else {
    pokemon2.textContent = user[1].name;
  }
  if (user[2] === undefined) {
    pokemon3.textContent = "Fainted";
  } else {
    pokemon3.textContent = user[2].name;
  }
  if (user[3] === undefined) {
    pokemon4.textContent = "Fainted";
  } else {
    pokemon4.textContent = user[3].name;
  }
  if (user[4] === undefined) {
    pokemon5.textContent = "Fainted";
  } else {
    pokemon5.textContent = user[4].name;
  }
  if (user[5] === undefined) {
    pokemon6.textContent = "Fainted";
  } else {
    pokemon6.textContent = user[5].name;
  }
};

pokemon1.addEventListener("click", function () {
  currentUP = 0;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

pokemon2.addEventListener("click", function () {
  currentUP = 1;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

pokemon3.addEventListener("click", function () {
  currentUP = 2;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

pokemon4.addEventListener("click", function () {
  currentUP = 3;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

pokemon5.addEventListener("click", function () {
  currentUP = 4;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

pokemon6.addEventListener("click", function () {
  currentUP = 5;
  if (currentUP != undefined) {
    newUserPokemon();
  }
});

let userPokemonName = document.querySelector("#user-name");

let newUserPokemon = function () {
  switch (currentUP) {
    case 0:
      userPokemonName.textContent = user[currentUP].name;
      document.querySelector("#user-pokemon img").src = user[currentUP].sprite;
      document.querySelector("#user-actual").style.width =
        200 * user[currentUP].percentWidth + "px";
      if (user[currentUP].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        user[currentUP].currentHealth
      )}/${user[currentUP].health}`;
      resetMenu();
      break;
    case 1:
      userPokemonName.textContent = user[currentUP].name;
      document.querySelector("#user-pokemon img").src = user[currentUP].sprite;
      document.querySelector("#user-actual").style.width =
        200 * user[currentUP].percentWidth + "px";
      if (user[currentUP].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        user[currentUP].currentHealth
      )}/${user[currentUP].health}`;
      resetMenu();
      break;
    case 2:
      userPokemonName.textContent = user[currentUP].name;
      document.querySelector("#user-pokemon img").src = user[currentUP].sprite;

      document.querySelector("#user-actual").style.width =
        200 * user[currentUP].percentWidth + "px";
      if (user[currentUP].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        user[currentUP].currentHealth
      )}/${user[currentUP].health}`;
      resetMenu();
      break;

    case 3:
      userPokemonName.textContent = user[currentUP].name;
      document.querySelector("#user-pokemon img").src = user[currentUP].sprite;

      document.querySelector("#user-actual").style.width =
        200 * user[currentUP].percentWidth + "px";
      if (user[currentUP].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        user[currentUP].currentHealth
      )}/${user[currentUP].health}`;
      resetMenu();
      break;
  }
  if (turnCounter === 7) {
    turnCounter = 1;
    setTimeout(cpuTurn, 3000);
    console.log("me");
  }
};

let faintedCPU = function () {
  delete cpu[currentCP];
  if (
    cpu[0] === undefined &&
    cpu[1] === undefined &&
    cpu[2] === undefined &&
    cpu[3] === undefined &&
    cpu[4] === undefined &&
    cpu[5] === undefined
  ) {
    console.log("YOU WIN");
  } else {
    console.log(cpu);
    checkUndefined();
  }
};

let checkUndefined = function () {
  currentCP = Math.floor(Math.random() * 2);
  console.log(currentCP);
  if (cpu[currentCP] === undefined) {
    checkUndefined();
    console.log("run again");
  } else {
    newCpuPokemon();
    console.log("me");
  }
};

let newCpuPokemon = function () {
  switch (currentCP) {
    case 0:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      break;
    case 1:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 2:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 3:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
  }
};

let cpuPokemonName = document.querySelector("#cpu-name");

let sendOutCpu = function () {
  if (currentCP === 0) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/emerald/normal/blaziken.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 1) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    console.log("tis me");
    document.querySelector("#cpu-pokemon img").src = pokemon.mightyena.sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 2) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/venusaur.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 3) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/dragonite.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  }
};

let sendOutdefText = function () {
  slot1.textContent = `Chad sent out ${cpu[currentCP].name}`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

//MOVES
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
  bodySlam: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Body Slam",
          85,
          100,
          user[currentUP].type,
          "Normal",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Body Slam",
          85,
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

  blastBurn: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Blast Burn",
          150,
          90,
          user[currentUP].type,
          "Fire",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Blast Burn",
          150,
          90,
          cpu[currentCP].type,
          "Fire",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  psychic: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Psychic",
          90,
          100,
          user[currentUP].type,
          "Psychic",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Psychic",
          90,
          100,
          cpu[currentCP].type,
          "Psychic",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },

  airSlash: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Air Slash",
          75,
          95,
          user[currentUP].type,
          "Flying",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Air Slash",
          75,
          95,
          cpu[currentCP].type,
          "Flying",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },

  dragonPulse: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Dragon Pulse",
          85,
          100,
          user[currentUP].type,
          "Dragon",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Dragon Pulse",
          85,
          100,
          cpu[currentCP].type,
          "Dragon",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },

  flareBlitz: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Flare Blitz",
          120,
          100,
          user[currentUP].type,
          "Fire",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Flare Blitz",
          120,
          100,
          cpu[currentCP].type,
          "Fire",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },

  earthquake: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Earthquake",
          100,
          100,
          user[currentUP].type,
          "Ground",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Earthquake",
          100,
          100,
          cpu[currentCP].type,
          "Ground",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
};

//POKEMON
let pokemon = {
  pikachu: {
    name: "Pikachu",
    type: ["Electric", "Electric"],
    move1name: "Volt Tackle",
    move1: moves.voltTackle,
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
    attack: 262,
    defense: 196,
    specialAttack: 378,
    specialDefense: 218,
    speed: 306,
  },

  charmander: {
    name: "Charmander",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif",
    type: ["Fire", "Normal"],

    move1name: "Flamethrower",
    move1: moves.flamethrower,
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
    attack: 1000,
    defense: 251,
    specialAttack: 1000,
    specialDefense: 249,
    speed: 203,
  },

  bulbasaur: {
    name: "Bulbasaur",
    type: ["Grass", "Normal"],
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

  frosslass: {
    name: "Frosslass",
    type: ["Ghost", "Ice"],
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

  shinyCharizard: {
    name: "Drogon",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/shiny/charizard.gif",
    type: ["Fire", "Flying"],
    move1name: "Flamethrower",
    move1: moves.flamethrower,
    move2name: "Blast Burn",
    move2: moves.blastBurn,
    move3name: "Earthquake",
    move3: moves.earthquake,
    move4name: "Dragon Pulse",
    move4: moves.dragonPulse,
    health: 360,
    oldHealth: 360,
    currentHealth: 360,
    health: 360,
    percentWidth: 1,
    attack: 293,
    defense: 280,
    specialAttack: 348,
    specialDefense: 295,
    speed: 328,
  },
  aegislash: {
    name: "Longclaw",
    type: ["Ghost", "Steel"],
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
  mightyena: {
    name: "Ghost",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/mightyena.gif",
    type: ["Dark", "Dark"],
    move1name: "Quick Attack",
    move1: moves.quickAttack,
    move2name: "Water Pulse",
    move2: moves.waterPulse,
    move3name: "Headbutt",
    move3: moves.headButt,
    move4name: "Ice Beam",
    move4: moves.iceBeam,
    health: 344,
    oldHealth: 344,
    currentHealth: 344,
    health: 344,
    percentWidth: 1,
    attack: 306,
    defense: 262,
    specialAttack: 240,
    specialDefense: 240,
    speed: 262,
  },
  salamence: {
    name: "Salamence",
    type: ["Dragon", "Flying"],
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
  suicune: {
    name: "Suicune",
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

  lapras: {
    name: "Lapras",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif",

    type: ["Water", "Ice"],
    move1name: "Psychic",
    move1: moves.psychic,
    move2name: "Water Pulse",
    move2: moves.waterPulse,
    move3name: "Body Slam",
    move3: moves.bodySlam,
    move4name: "Ice Beam",
    move4: moves.iceBeam,
    health: 464,
    oldHealth: 464,
    currentHealth: 464,
    health: 464,
    percentWidth: 1,
    attack: 295,
    defense: 284,
    specialAttack: 295,
    specialDefense: 317,
    speed: 240,
  },

  snorlax: {
    name: "Snorlax",
    type: ["Normal", "Normal"],
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

  venusaur: {
    name: "Venusaur",
    type: ["Grass", "Poison"],
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
  blastoise: {
    name: "Blastoise",
    type: ["Water", "Water"],
    move1name: "Quick Attack",
    move1: moves.quickAttack,
    move2name: "Water Pulse",
    move2: moves.waterPulse,
    move3name: "Headbutt",
    move3: moves.headButt,
    move4name: "Ice Beam",
    move4: moves.iceBeam,
    health: 362,
    oldHealth: 362,
    currentHealth: 362,
    health: 362,
    percentWidth: 1,
    attack: 291,
    defense: 328,
    specialAttack: 295,
    specialDefense: 339,
    speed: 280,
  },
  charizard: {
    name: "charizard",
    sprite:
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
    type: ["Fire", "Flying"],
    move1name: "Blast Burn",
    move1: moves.blastBurn,
    move2name: "Flare Blitz",
    move2: moves.flareBlitz,
    move3name: "Air Slash",
    move3: moves.airSlash,
    move4name: "Dragon Pulse",
    move4: moves.dragonPulse,
    health: 360,
    oldHealth: 360,
    currentHealth: 360,
    health: 360,
    percentWidth: 1,
    attack: 293,
    defense: 280,
    specialAttack: 348,
    specialDefense: 295,
    speed: 328,
  },
};

let user = [
  pokemon.pikachu,
  pokemon.lapras,
  pokemon.snorlax,
  pokemon.venusaur,
  pokemon.charizard,
  pokemon.blastoise,
];
let cpu = [
  pokemon.shinyCharizard,
  pokemon.mightyena,
  pokemon.frosslass,
  pokemon.suicune,
  pokemon.salamence,
  pokemon.aegislash,
];

let turn = [user, cpu];
