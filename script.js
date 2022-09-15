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
    console.log(`attack is ${attack}`);
    console.log(`defense if ${defense}`);

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
          setTimeout(fire2, 1000);
          break;
        case "FireIce":
          effectiveness = effectiveness * 2;
          fire1();
          setTimeout(fire2, 1000);
          break;
        case "FireGrass":
          effectiveness = effectiveness * 2;
          fire1();
          setTimeout(fire2, 1000);
          break;
        case "FireNormal":
          effectiveness = effectiveness * 1;
          fire1();
          setTimeout(fire2, 1000);
          break;
        case "FireFire":
          effectiveness = effectiveness * 0.5;
          fire1();
          setTimeout(fire2, 1000);
          break;
        case "FireFlying":
          effectiveness = effectiveness * 1;
          fire1();
          setTimeout(fire2, 1000);
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
        console.log("me");
      } else {
        setTimeout(resetMenu, 3000);
        console.log("me");
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
    case 4:
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
    case 5:
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
  currentCP = Math.floor(Math.random() * 5);
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
    case 4:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      document.querySelector("#cpu-pokemon img").style.width = "150px";
      document.querySelector("#cpu-pokemon img").style.height = "150px";

      break;
    case 5:
      setTimeout(sendOutdefText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpu[currentCP].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      document.querySelector("#cpu-pokemon img").style.width = "150px";
      document.querySelector("#cpu-pokemon img").style.height = "150px";

      break;
  }
};

let cpuPokemonName = document.querySelector("#cpu-name");

let sendOutCpu = function () {
  if (currentCP === 0) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src = cpu[0].sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 1) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    console.log("tis me");

    document.querySelector("#cpu-pokemon img").src = cpu[1].sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 2) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src = cpu[2].sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 3) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src = cpu[3].sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 4) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src = cpu[4].sprite;

    document.querySelector("#cpu-actual").style.width =
      200 * cpu[currentCP].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCP === 5) {
    cpuPokemonName.textContent = cpu[currentCP].name;
    document.querySelector("#cpu-pokemon img").src = cpu[5].sprite;

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
          "Water Pulse",
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
          "Water Pulse",
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

  shadowBall: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Shadow Ball",
          80,
          100,
          user[currentUP].type,
          "Ghost",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Shadow Ball",
          80,
          100,
          cpu[currentCP].type,
          "Ghost",
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
  voltTackle: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Volt Tackle",
          120,
          100,
          user[currentUP].type,
          "Electric",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Volt Tackle",
          120,
          100,
          cpu[currentCP].type,
          "Electric",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  gigaImpact: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Giga Impact",
          150,
          90,
          user[currentUP].type,
          "Normal",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Giga Impact",
          150,
          90,
          cpu[currentCP].type,
          "Normal",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  crunch: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Crunch",
          80,
          100,
          user[currentUP].type,
          "Dark",
          cpu[currentCP].type,
          user[currentUP].attack,
          cpu[currentCP].defense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Giga Impact",
          80,
          100,
          cpu[currentCP].type,
          "Dark",
          user[currentUP].type,
          cpu[currentCP].attack,
          user[currentUP].defense
        );
  },
  shadowBall: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Shadow Ball",
          80,
          100,
          user[currentUP].type,
          "Ghost",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Shadow Ball",
          80,
          100,
          cpu[currentCP].type,
          "Ghost",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },

  gigaDrain: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Giga Drain",
          75,
          100,
          user[currentUP].type,
          "Grass",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Giga Drain",
          75,
          100,
          cpu[currentCP].type,
          "Grass",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  frenzyPlant: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Frenzy Plant",
          150,
          90,
          user[currentUP].type,
          "Grass",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Frenzy Plant",
          150,
          90,
          cpu[currentCP].type,
          "Grass",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
  sludgeBomb: function () {
    turnCount === 0
      ? calculate.damageCalc(
          user[currentUP].name,
          "Sludge Bomb",
          90,
          100,
          user[currentUP].type,
          "Poison",
          cpu[currentCP].type,
          user[currentUP].specialAttack,
          cpu[currentCP].specialDefense
        )
      : calculate.damageCalc(
          cpu[currentCP].name,
          "Sludge Bomb",
          90,
          100,
          cpu[currentCP].type,
          "Poison",
          user[currentUP].type,
          cpu[currentCP].specialAttack,
          user[currentUP].specialDefense
        );
  },
};

//Pokemon
class Pokemon {
  constructor(
    name,
    sprite,
    type,
    move1name,
    move1,
    move2name,
    move2,
    move3name,
    move3,
    move4name,
    move4,
    health,
    oldHealth,
    currentHealth,
    percentWidth,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed
  ) {
    this.name = name;
    this.sprite = sprite;
    this.type = type;
    this.move1name = move1name;
    this.move1 = move1;
    this.move2name = move2name;
    this.move2 = move2;
    this.move3name = move3name;
    this.move3 = move3;
    this.move4name = move4name;
    this.move4 = move4;
    this.health = health;
    this.oldHealth = oldHealth;
    this.currentHealth = currentHealth;
    this.percentWidth = percentWidth;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
  }
}

let pikachu = new Pokemon(
  "Pikachu",
  "",
  ["Electric", "Normal"],
  "Volt Tackle",
  moves.voltTackle,
  "Thunderbolt",
  moves.thunderbolt,
  "Iron Tail",
  moves.ironTail,
  "Quick Attack",
  moves.quickAttack,
  274,
  274,
  274,
  1,
  262,
  196,
  378,
  218,
  306
);

let shinyCharizard = new Pokemon(
  "Drogon",
  "https://img.pokemondb.net/sprites/black-white/anim/shiny/charizard.gif",
  ["Fire", "Flying"],
  "Flamethrower",
  moves.flamethrower,
  "Blast Burn",
  moves.blastBurn,
  "Earthquake",
  moves.earthquake,
  "Dragon Pulse",
  moves.dragonPulse,
  360,
  360,
  360,
  1,
  293,
  280,
  348,
  295,
  328
);

let frosslass = new Pokemon(
  "Froslass",
  "https://img.pokemondb.net/sprites/black-white/anim/shiny/froslass.gif",
  ["Ice", "Ghost"],
  "Shadow Ball",
  moves.shadowBall,
  "Ice Beam",
  moves.iceBeam,
  "Shadow Ball",
  moves.shadowBall,
  "Ice Beam",
  moves.iceBeam,
  344,
  344,
  344,
  1,
  284,
  262,
  284,
  262,
  350
);

let lapras = new Pokemon(
  "Lapras",
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif",
  ["Water", "Ice"],
  "Psychic",
  moves.psychic,
  "Water Pulse",
  moves.waterPulse,
  "Body Slam",
  moves.bodySlam,
  "Ice Beam",
  moves.iceBeam,
  464,
  464,
  464,
  1,
  295,
  284,
  295,
  317,
  240
);

let snorlax = new Pokemon(
  "Snorlax",
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/snorlax.gif",
  ["Normal", "Normal"],
  "Shadow Ball",
  moves.shadowBall,
  "Crunch",
  moves.crunch,
  "Ice Beam",
  moves.iceBeam,
  "Giga Impact",
  moves.gigaImpact,
  524,
  524,
  524,
  1,
  350,
  251,
  251,
  350,
  174
);

let charizard = new Pokemon(
  "Charizard",
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
  ["Fire", "Flying"],
  "Blast Burn",
  moves.blastBurn,
  "Flare Blitz",
  moves.flareBlitz,
  "Air Slash",
  moves.airSlash,
  "Dragon Pulse",
  moves.dragonPulse,
  360,
  360,
  360,
  1,
  293,
  280,
  348,
  295,
  328
);

let salamence = new Pokemon(
  "Salamence",
  "https://img.pokemondb.net/sprites/black-white/anim/shiny/salamence.gif",
  ["Dragon", "Flying"],
  "Dragon Pulse",
  moves.dragonPulse,
  "Air Slash",
  moves.airSlash,
  "Flamethrower",
  moves.flamethrower,
  "Crunch",
  moves.crunch,
  394,
  394,
  394,
  1,
  405,
  284,
  350,
  284,
  328
);

let suicune = new Pokemon(
  "Suicune",
  "https://img.pokemondb.net/sprites/black-white/anim/shiny/suicune.gif",
  ["Water", "Normal"],
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  404,
  404,
  404,
  1,
  273,
  361,
  306,
  361,
  295
);

let kyurem = new Pokemon(
  "Kyurem",
  "https://img.pokemondb.net/sprites/black-white/anim/shiny/kyurem.gif",
  ["Dragon", "Ice"],
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  454,
  454,
  454,
  1,
  394,
  306,
  394,
  306,
  317
);

let venusaur = new Pokemon(
  "Venusaur",
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif",
  ["Grass", "Poison"],
  "Frenzy Plant",
  moves.frenzyPlamt,
  "Giga Drain",
  moves.gigaDrain,
  "Sludge Bomb",
  moves.sludgeBomb,
  "Earthquake",
  moves.earthquake,
  364,
  364,
  364,
  1,
  289,
  291,
  328,
  328,
  284
);

let blastoise = new Pokemon(
  "Blastoise",
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif",
  ["Water", "Normal"],
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  "Giga Impact",
  moves.gigaImpact,
  "Dragon Pulse",
  moves.dragonPulse,
  362,
  362,
  362,
  1,
  291,
  328,
  295,
  339,
  280
);

let nidoking = new Pokemon(
  "Nidoking",
  "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif",
  ["Poison", "Ground"],
  "Water Pulse",
  moves.waterPulse,
  "Ice Beam",
  moves.iceBeam,
  "Earthquake",
  moves.earthquake,
  "Sludge Bomb",
  moves.sludgeBomb,
  366,
  366,
  366,
  1,
  333,
  278,
  295,
  273,
  295
);

let user = [pikachu, lapras, snorlax, charizard, venusaur, blastoise];
let cpu = [shinyCharizard, frosslass, salamence, suicune, kyurem, nidoking];

let turn = [user, cpu];

console.log(pikachu);
