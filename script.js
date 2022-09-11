//moves
//charizard moves
let flamethrower = 90;
let airSlash = 75;
let dragonClaw = 80;
let dragonDance = 0;
//blaziken moves
let blazeKick = 85;
let closeCombat = 120;
let thunderPunch = 75;
let roost = 0;

let woodHammer = 120;
let bugBite = 60;
let stringShot = 20;
let taunt = 20;
let shadowBall = 80;
let nastyPlot = 20;
let recover = 20;
let dragonTail = 60;
let meteorStrike = 150;
let wingAttack = 60;
let earthquake = 100;
let iceRush = 80;
let blizzard = 110;
let surf = 90;
let aquaVeil = 20;
let psychic = 90;
let leechSeed = 20;
let grassKnot = 20;
let glare = 20;

//pokemon objects
let charizardStats = {
  name: "Charizard",
  sprite:
    "https://img.pokemondb.net/sprites/firered-leafgreen/back-normal/charizard.png",
  type1: "fire",
  type2: "flying",
  health: 360,
  currentHealth: 360,
  oldHealth: 360,
  percentWidth: 1,
  attack: 348,
  defense: 295,
  speed: 328,
  move1: "Flamethrower",
  move2: "Air Slash",
  move3: "Dragon Claw",
  move4: "Dragon Dance",
  move1Power: flamethrower,
  move2Power: airSlash,
  move3Power: dragonClaw,
  move4Power: dragonDance,
};

let blastoiseStats = {
  name: "Blastoise",
  sprite:
    "https://img.pokemondb.net/sprites/firered-leafgreen/back-normal/blastoise.png",
  type1: "steel",
  type2: "grass",
  health: 375,
  currentHealth: 375,
  oldHealth: 375,
  percentWidth: 1,
  attack: 50,
  defense: 200,
  speed: 24,
  move1: "Steel Sound",
  move2: "Harden",
  move3: "Metal Claw",
  move4: "Wood Hammer",
  move1Power: "",
  move2Power: "harden",
  move3Power: "metalClaw",
  move4Power: "woodHammer",
};

let sceptileStats = {
  name: "Sceptile",
  sprite: "https://img.pokemondb.net/sprites/emerald/back-normal/sceptile.png",
  type1: "bug",
  type2: "fighting",
  health: 225,
  currentHealth: 225,
  oldHealth: 225,
  percentWidth: 1,
  attack: 125,
  defense: 75,
  speed: 125,
  move1: "Close Combat",
  move2: "Bug Bite",
  move3: "String Shot",
  move4: "Taunt",
  move1Power: closeCombat,
  move2Power: bugBite,
  move3Power: stringShot,
  move4Power: taunt,
};

let salamenceStats = {
  name: "Salamence",
  sprite: "https://img.pokemondb.net/sprites/emerald/back-normal/salamence.png",
  type1: "dragon",
  type2: "dark",
  health: 525,
  currentHealth: 525,
  oldHealth: 525,
  percentWidth: 1,
  attack: 75,
  defense: 50,
  speed: 100,
  move1: "Flamethrower",
  move2: "Shadow Ball",
  move3: "Nasty Plot",
  move4: "Recover",
  move1Power: flamethrower,
  move2Power: shadowBall,
  move3Power: nastyPlot,
  move4Power: recover,
};

let blazikenStats = {
  name: "Blaziken",
  type1: "fire",
  type2: "fighting",
  health: 364,
  currentHealth: 364,
  oldHealth: 364,
  percentWidth: 1,
  attack: 372,
  defense: 262,
  speed: 284,
  move1Power: blazeKick,
  move2Power: closeCombat,
  move3Power: thunderPunch,
  move4Power: roost,
};

let swampertStats = {
  name: "Swampert",
  type1: "dragon",
  type2: "dark",
  health: 300,
  currentHealth: 300,
  oldHealth: 300,
  percentWidth: 1,
  attack: 135,
  defense: 135,
  speed: 30,
  move1Power: dragonClaw,
  move2Power: "roar",
  move3Power: flamethrower,
  move4Power: dragonTail,
};

let venasaurStats = {
  name: "Venasaur",
  type1: "dragon",
  type2: "dark",
  health: 375,
  currentHealth: 375,
  oldHealth: 375,
  percentWidth: 1,
  attack: 125,
  defense: 125,
  speed: 25,
  move1Power: meteorStrike,
  move2Power: wingAttack,
  move3Power: earthquake,
  move4Power: "harden",
};

let dragoniteStats = {
  name: "Dragonite",
  type1: "water",
  type2: "ice",
  health: 150,
  currentHealth: 150,
  oldHealth: 150,
  percentWidth: 1,
  attack: 50,
  defense: 125,
  speed: 175,
  move1Power: iceRush,
  move2Power: blizzard,
  move3Power: surf,
  move4Power: aquaVeil,
};

//team arrays
let userPokemon = [];
let cpuPokemon = [blazikenStats, swampertStats, venasaurStats, dragoniteStats];

//start screen
let counter = 0;

let charizard = document.querySelector("#charizard");
let blastoise = document.querySelector("#blastoise");
let sceptile = document.querySelector("#sceptile");
let salamence = document.querySelector("#salamence");

charizard.addEventListener("click", function () {
  if (counter === 0) {
    charizard.textContent = "Charizard 1";
    document.querySelector("#charizard").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(charizardStats);
  } else if (counter === 1) {
    charizard.textContent = "Charizard 2";
    document.querySelector("#charizard").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(charizardStats);
  } else if (counter === 2) {
    charizard.textContent = "Charizard 3";
    document.querySelector("#charizard").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(charizardStats);
  } else if (counter === 3) {
    charizard.textContent = "Charizard 4";
    document.querySelector("#charizard").style.backgroundColor = "palegreen";
    counter = counter + 1;
    greenLight();
    userPokemon.push(charizardStats);
  }
});

blastoise.addEventListener("click", function () {
  if (counter === 0) {
    blastoise.textContent = "Blastoise 1";
    document.querySelector("#blastoise").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(blastoiseStats);
  } else if (counter === 1) {
    blastoise.textContent = "Blastoise 2";
    document.querySelector("#blastoise").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(blastoiseStats);
  } else if (counter === 2) {
    blastoise.textContent = "Blastoise 3";
    document.querySelector("#blastoise").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(blastoiseStats);
  } else if (counter === 3) {
    blastoise.textContent = "Blastoise 4";
    document.querySelector("#blastoise").style.backgroundColor = "palegreen";
    counter = counter + 1;
    greenLight();
    userPokemon.push(blastoiseStats);
  }
});

sceptile.addEventListener("click", function () {
  if (counter === 0) {
    sceptile.textContent = "Sceptile 1";
    document.querySelector("#sceptile").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(sceptileStats);
  } else if (counter === 1) {
    sceptile.textContent = "Sceptile 2";
    document.querySelector("#sceptile").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(sceptileStats);
  } else if (counter === 2) {
    sceptile.textContent = "Sceptile 3";
    document.querySelector("#sceptile").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(sceptileStats);
  } else if (counter === 3) {
    sceptile.textContent = "Sceptile 4";
    document.querySelector("#sceptile").style.backgroundColor = "palegreen";
    counter = counter + 1;
    greenLight();
    userPokemon.push(sceptileStats);
  }
});

salamence.addEventListener("click", function () {
  if (counter === 0) {
    salamence.textContent = "Salamence 1";
    document.querySelector("#salamence").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(salamenceStats);
  } else if (counter === 1) {
    salamence.textContent = "Salamence 2";
    document.querySelector("#salamence").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(salamenceStats);
  } else if (counter === 2) {
    salamence.textContent = "Salamence 3";
    document.querySelector("#salamence").style.backgroundColor = "palegreen";
    counter = counter + 1;
    userPokemon.push(salamenceStats);
  } else if (counter === 3) {
    salamence.textContent = "Salamence 4";
    document.querySelector("#salamence").style.backgroundColor = "palegreen";
    counter = counter + 1;
    greenLight();
    userPokemon.push(salamenceStats);
  }
});

let greenLight = function () {
  document.querySelector("#start-button").style.backgroundColor = "lightgreen";
  document.querySelector("#reset").style.backgroundColor = "#fd5c63";
};

let reset = document.querySelector("#reset");

reset.addEventListener("click", function () {
  charizard.textContent = "Charizard";
  blastoise.textContent = "Blastoise";
  sceptile.textContent = "Sceptile";
  salamence.textContent = "Salamence";
  document.querySelector("#charizard").style.backgroundColor = "lightblue";
  document.querySelector("#blastoise").style.backgroundColor = "lightblue";
  document.querySelector("#sceptile").style.backgroundColor = "lightblue";
  document.querySelector("#salamence").style.backgroundColor = "lightblue";
  counter = 0;
  userPokemon = [];
});

let mainSoundHolder = "";

let showGame = function () {
  newUserPokemon();
  console.log(userPokemon[1]);
  console.log("hi");
  document.querySelector("#game").style.display = "block";
  document.querySelector("#start-screen").style.display = "none";
  //mainSoundHolder = new Audio("143-last battle (vs rival).mp3");
  mainSoundHolder.play();
};

let newUserPokemon = function () {
  switch (currentUserPokemon) {
    case 0:
      userPokemonName.textContent = userPokemon[currentUserPokemon].name;
      document.querySelector("#user-pokemon img").src =
        userPokemon[currentUserPokemon].sprite;
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 1:
      userPokemonName.textContent = userPokemon[currentUserPokemon].name;
      document.querySelector("#user-pokemon img").src =
        userPokemon[currentUserPokemon].sprite;
      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 2:
      userPokemonName.textContent = userPokemon[currentUserPokemon].name;
      document.querySelector("#user-pokemon img").src =
        userPokemon[currentUserPokemon].sprite;

      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
    case 3:
      userPokemonName.textContent = userPokemon[currentUserPokemon].name;
      document.querySelector("#user-pokemon img").src =
        userPokemon[currentUserPokemon].sprite;

      document.querySelector("#user-actual").style.width =
        200 * userPokemon[currentUserPokemon].percentWidth + "px";
      if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
        document.querySelector("#user-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#user-actual").style.backgroundColor =
          "lightgreen";
      }
      currentHealthNum.textContent = `${Math.floor(
        userPokemon[currentUserPokemon].currentHealth
      )}/${userPokemon[currentUserPokemon].health}`;
      break;
  }
  if (turnCounter === 7) {
    turnCounter = 1;
    setTimeout(cpuTurn, 3000);
    console.log("me");
  }
};

//display
let currentHealthNum = document.querySelector("#currentHealthNum");

//counters
let currentCpuPokemon = 0;
let currentUserPokemon = 0;
let powerSaver = 0;
let moveNameSaver = 0;
let mainTree = 0;
let speedCounter = 1;

//input tree
const slot1 = document.querySelector("#slot1");
const slot2 = document.querySelector("#slot2");
const slot3 = document.querySelector("#slot3");
const slot4 = document.querySelector("#slot4");

slot1.addEventListener("click", function () {
  if (mainTree === 0) {
    slot1.textContent = userPokemon[currentUserPokemon].move1;
    slot2.textContent = userPokemon[currentUserPokemon].move2;
    slot3.textContent = userPokemon[currentUserPokemon].move3;
    slot4.textContent = userPokemon[currentUserPokemon].move4;
    title.textContent = `What will ${userPokemon[currentUserPokemon].name} do?`;
    description.textContent = "";
    mainTree = 1;
  } else if (mainTree === 1) {
    powerSaver = 1;
    moveNameSaver = userPokemon[currentUserPokemon].move1;
    speedCalc(userPokemon[currentUserPokemon].move1Power);
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

let speedCalc = function (power) {
  if (
    userPokemon[currentUserPokemon].speed >= cpuPokemon[currentCpuPokemon].speed
  ) {
    calcDamage(power);
    console.log("test");
  } else {
    console.log("me");
    cpuFaster();
  }
};

let cpuFaster = function () {
  speedCounter = 11;
  console.log("also me");
  cpuTurn();
};

let soundHolder = "";

let superEffectiveSound = new Audio("hit-super-effective.mp3");

let sound = function (power) {
  switch (power) {
    case flamethrower:
      console.log("audio test");
      soundHolder = new Audio("flamethrower.mp3");

      soundHolder.play();
      break;

    case airSlash:
      soundHolder = new Audio("Quick Attack.mp3");
      soundHolder.play();
      break;
  }
};

let damage = 0;

let calcDamage = function (power) {
  document.querySelector("#action-box div").style.flexBasis = `100%`;
  document.querySelector("#action-box div").style.marginTop = `25px`;
  critCalc();
  stabCalc(power);
  effectiveness1Calc(power);
  effectiveness2Calc(power);
  sound(power);
  console.log("another fucking test");
  if (turnCounter === 0) {
    slot1.textContent = `${userPokemon[currentUserPokemon].name} used ${moveNameSaver}`;
    slot2.textContent = "";
    slot3.textContent = "";
    slot4.textContent = "";

    damage =
      ((((2 * 50 * critical) / 5 + 2) *
        power *
        userPokemon[currentUserPokemon].attack) /
        cpuPokemon[currentCpuPokemon].defense /
        50 +
        2) *
      stab *
      effectiveness1 *
      effectiveness2;

    document
      .querySelector("#user-pokemon img")
      .classList.add("userAttackAnimation");

    if (power === dragonDance) {
      userPokemon[currentUserPokemon].attack =
        userPokemon[currentUserPokemon].attack * 1.25;
      userPokemon[currentUserPokemon].speed =
        userPokemon[currentUserPokemon].speed * 1.25;
    }

    if (power === flamethrower) {
      document.querySelector("#game").classList.add("flamethrower");
    }

    setTimeout(effectivenessText, 1250);

    console.log(`power is ${power}`);
    console.log(`effectiveness1=${effectiveness1}`);
    console.log(`effectiveness2=${effectiveness2}`);
    console.log(`stab= ${stab}`);
    console.log(`crit = ${critical}`);
    console.log(`damage is ${damage}`);
    setTimeout(inflictDamage, 750);
  } else if (turnCounter === 1) {
    damage =
      ((((2 * 50 * critical) / 5 + 2) *
        power *
        cpuPokemon[currentCpuPokemon].attack) /
        userPokemon[currentUserPokemon].defense /
        50 +
        2) *
      stab *
      effectiveness1 *
      effectiveness2;

    console.log(`power is ${power}`);
    console.log(`effectiveness1=${effectiveness1}`);
    console.log(`effectiveness2=${effectiveness2}`);
    console.log(`stab= ${stab}`);
    console.log(`crit = ${critical}`);
    console.log(`damage is ${damage}`);

    if (power === roost) {
      console.log("me");
      cpuPokemon[currentCpuPokemon].currentHealth =
        cpuPokemon[currentCpuPokemon].currentHealth * 1.5;
      cpuPokemon[currentCpuPokemon].percentWidth =
        cpuPokemon[currentCpuPokemon].currentHealth /
        cpuPokemon[currentCpuPokemon].health;

      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      }

      document.querySelector("#cpu-actual").style.width =
        200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
    }

    setTimeout(effectivenessText, 1250);

    inflictComputerDamage();
  }
};

let effectivenessText = function () {
  if (effectiveness1 * effectiveness2 < 1) {
    slot1.textContent = "It's not very effective";
  } else if (effectiveness1 * effectiveness2 > 1) {
    slot1.textContent = "It's super effective!";
  }
};

let stabCalc = function (power) {
  if (
    (power === flamethrower &&
      userPokemon[currentUserPokemon].type1 === "fire") ||
    (power === flamethrower &&
      userPokemon[currentUserPokemon].type2 === "fire") ||
    (power === blazeKick && cpuPokemon[currentCpuPokemon].type1 === "fire") ||
    (power === blazeKick && cpuPokemon[currentCpuPokemon].type2 === "fire") ||
    (power === airSlash &&
      userPokemon[currentUserPokemon].type1 === "flying") ||
    (power === airSlash && userPokemon[currentUserPokemon].type2 === "flying")
  ) {
    stab = 1.5;
    console.log("stab");
  } else {
    stab = 1;
  }
};

let effectiveness1Calc = function (power) {
  if (
    //flamethrower *2
    (power === flamethrower &&
      cpuPokemon[currentCpuPokemon].type1 === "grass") ||
    (power === flamethrower && cpuPokemon[currentCpuPokemon].type1 === "bug") ||
    //airSlash *2
    (power === airSlash &&
      cpuPokemon[currentCpuPokemon].type1 === "fighting") ||
    //thunderPunch *2
    (power === thunderPunch &&
      userPokemon[currentUserPokemon].type1 === "flying") ||
    (power === thunderPunch &&
      userPokemon[currentUserPokemon].type1 === "water")
  ) {
    effectiveness1 = 2;
    superEffectiveSound.play();
  } else if (
    (power === flamethrower &&
      cpuPokemon[currentCpuPokemon].type1 === "flying") ||
    (power === airSlash && cpuPokemon[currentCpuPokemon].type1 === "fire")
  ) {
    effectiveness1 = 1;
  } else if (
    power === flamethrower &&
    cpuPokemon[currentCpuPokemon].type1 === "fire"
  ) {
    effectiveness1 = 0.5;
  }
};

let effectiveness2Calc = function (power) {
  if (
    //flamethrower *2
    (power === flamethrower &&
      cpuPokemon[currentCpuPokemon].type2 === "grass") ||
    (power === flamethrower && cpuPokemon[currentCpuPokemon].type2 === "bug") ||
    //airSlash *2
    (power === airSlash &&
      cpuPokemon[currentCpuPokemon].type2 === "fighting") ||
    //thunderPunch *2
    (power === thunderPunch &&
      userPokemon[currentUserPokemon].type2 === "flying") ||
    (power === thunderPunch &&
      userPokemon[currentUserPokemon].type2 === "water")
  ) {
    effectiveness2 = 2;
    superEffectiveSound.play();
  } else if (
    (power === flamethrower &&
      cpuPokemon[currentCpuPokemon].type2 === "flying") ||
    (power === airSlash && cpuPokemon[currentCpuPokemon].type2 === "fire")
  ) {
    effectiveness2 = 1;
  } else if (
    power === flamethrower &&
    cpuPokemon[currentCpuPokemon].type2 === "fire"
  ) {
    effectiveness2 = 0.5;
  }
};

let changeHealth = function (i) {
  setTimeout(function () {
    cpuPokemon[currentCpuPokemon].percentWidth =
      i / cpuPokemon[currentCpuPokemon].health;

    if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
      document.querySelector("#cpu-actual").style.backgroundColor = "red";
    }

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";
  }, (cpuPokemon[currentCpuPokemon].oldHealth - i) * 10);
};

let inflictDamage = function () {
  title.textContent = "nicely done!";
  description.textContent = "";
  document.querySelector("#game").classList.remove("flamethrower");

  if (damage >= cpuPokemon[currentCpuPokemon].currentHealth) {
    cpuPokemon[currentCpuPokemon].oldHealth =
      cpuPokemon[currentCpuPokemon].currentHealth;
    cpuPokemon[currentCpuPokemon].currentHealth = 0;

    console.log("what the fuck");

    for (
      let i = cpuPokemon[currentCpuPokemon].oldHealth;
      i >= cpuPokemon[currentCpuPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);
    }
    document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");

    console.log(currentCpuPokemon);
    setTimeout(faintedCPU, 4000);
    turnCounter = 1;
  } else if (
    damage < cpuPokemon[currentCpuPokemon].currentHealth &&
    speedCounter === 1
  ) {
    title.textContent = "";
    description.textContent = "";

    cpuPokemon[currentCpuPokemon].oldHealth =
      cpuPokemon[currentCpuPokemon].currentHealth;
    cpuPokemon[currentCpuPokemon].currentHealth =
      cpuPokemon[currentCpuPokemon].currentHealth - damage;

    for (
      let i = cpuPokemon[currentCpuPokemon].oldHealth;
      i >= cpuPokemon[currentCpuPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);
    }
    document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");
    turnCounter = 1;
    console.log(cpuPokemon[currentCpuPokemon].oldHealth);
    console.log(cpuPokemon[currentCpuPokemon].currentHealth);
    setTimeout(cpuTurn, 2500);
  } else if (
    damage < cpuPokemon[currentCpuPokemon].currentHealth &&
    speedCounter === 11
  ) {
    title.textContent = "";
    description.textContent = "";

    cpuPokemon[currentCpuPokemon].oldHealth =
      cpuPokemon[currentCpuPokemon].currentHealth;
    cpuPokemon[currentCpuPokemon].currentHealth =
      cpuPokemon[currentCpuPokemon].currentHealth - damage;

    for (
      let i = cpuPokemon[currentCpuPokemon].oldHealth;
      i >= cpuPokemon[currentCpuPokemon].currentHealth;
      i--
    ) {
      changeHealth(i);
    }
    document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");
    turnCounter = 1;
    console.log(cpuPokemon[currentCpuPokemon].oldHealth);
    console.log(cpuPokemon[currentCpuPokemon].currentHealth);
    setTimeout(resetMenu, 1500);
  }
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
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }
      break;
    case 1:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 2:
      setTimeout(sendOutCpuText, 3000);
      setTimeout(sendOutCpu, 4000);
      if (cpuPokemon[currentCpuPokemon].percentWidth < 0.25) {
        document.querySelector("#cpu-actual").style.backgroundColor = "red";
      } else {
        document.querySelector("#cpu-actual").style.backgroundColor =
          "lightgreen";
      }

      break;
    case 3:
      setTimeout(sendOutCpuText, 3000);
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

let sendOutCpuText = function () {
  slot1.textContent = `Chad sent out ${cpuPokemon[currentCpuPokemon].name}`;
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
  console.log(`current cpu is ${currentCpuPokemon}`);
};

let animationBugFix = function () {
  document.querySelector("#cpu-pokemon img").classList.add("damageFlicker");
};

let sendOutCpu = function () {
  if (currentCpuPokemon === 0) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/emerald/normal/blaziken.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 1) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    console.log("tis me");
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/emerald/normal/swampert.png";
    console.log(`current cpu is ${currentCpuPokemon}`);
    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 2) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/venusaur.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  } else if (currentCpuPokemon === 3) {
    cpuPokemonName.textContent = cpuPokemon[currentCpuPokemon].name;
    document.querySelector("#cpu-pokemon img").src =
      "https://img.pokemondb.net/sprites/firered-leafgreen/normal/dragonite.png";

    document.querySelector("#cpu-actual").style.width =
      200 * cpuPokemon[currentCpuPokemon].percentWidth + "px";

    setTimeout(resetMenu, 2000);
    turnCounter = 0;
  }
};

let changeUserHealth = function (i) {
  setTimeout(function () {
    userPokemon[currentUserPokemon].percentWidth =
      i / userPokemon[currentUserPokemon].health;

    if (userPokemon[currentUserPokemon].percentWidth < 0.25) {
      document.querySelector("#user-actual").style.backgroundColor = "red";
    }

    document.querySelector("#user-actual").style.width =
      200 * userPokemon[currentUserPokemon].percentWidth + "px";

    currentHealthNum.textContent = `${Math.floor(i)}/${
      userPokemon[currentUserPokemon].health
    }`;

    setTimeout(timeFill, 1500);
  }, (userPokemon[currentUserPokemon].oldHealth - i) * 10);
};

let timeFill = function () {
  document.querySelector("#action-box div").style.marginTop = `25px`;
  document.querySelector("#action-box div").style.flexBasis = `100%`;
  slot1.textContent = "game is thinking...";
  slot2.textContent = "";
  slot3.textContent = "";
  slot4.textContent = "";
};

let inflictComputerDamage = function (power) {
  if (damage >= userPokemon[currentUserPokemon].currentHealth) {
    userPokemon[currentUserPokemon].oldHealth =
      userPokemon[currentUserPokemon].currentHealth;
    userPokemon[currentUserPokemon].currentHealth = 0;
    console.log(userPokemon[currentUserPokemon]);
    document.querySelector("#game").classList.add("thunderpunch");
    for (
      let i = userPokemon[currentUserPokemon].oldHealth;
      i >= userPokemon[currentUserPokemon].currentHealth;
      i--
    ) {
      changeUserHealth(i);
      currentHealthNum.textContent = `${userPokemon[currentUserPokemon].currentHealth}/${userPokemon[currentUserPokemon].health}`;
    }

    document.querySelector("#user-pokemon img").classList.add("damageFlicker");

    turnCounter = 0;
    setTimeout(faintedUser, 5000);
    console.log("test");
  } else if (damage < userPokemon[currentUserPokemon].currentHealth) {
    if (speedCounter === 11) {
      userPokemon[currentUserPokemon].oldHealth =
        userPokemon[currentUserPokemon].currentHealth;
      userPokemon[currentUserPokemon].currentHealth =
        userPokemon[currentUserPokemon].currentHealth - damage;

      for (
        let i = userPokemon[currentUserPokemon].oldHealth;
        i >= userPokemon[currentUserPokemon].currentHealth;
        i--
      ) {
        changeUserHealth(i);
      }
      turnCounter = 0;
      console.log("RIGHT HERE");
      console.log(powerSaver);
      if (powerSaver === 1) {
        calcDamage(userPokemon[currentUserPokemon].move1Power);
      } else if (powerSaver === 2) {
        calcDamage(userPokemon[currentUserPokemon].move2Power);
      } else if (powerSaver === 3) {
        calcDamage(userPokemon[currentUserPokemon].move3Power);
      } else if (powerSaver === 4) {
        calcDamage(userPokemon[currentUserPokemon].move4Power);
      }
    } else {
      userPokemon[currentUserPokemon].oldHealth =
        userPokemon[currentUserPokemon].currentHealth;
      userPokemon[currentUserPokemon].currentHealth =
        userPokemon[currentUserPokemon].currentHealth - damage;

      for (
        let i = userPokemon[currentUserPokemon].oldHealth;
        i >= userPokemon[currentUserPokemon].currentHealth;
        i--
      ) {
        changeUserHealth(i);
      }

      document
        .querySelector("#user-pokemon img")
        .classList.add("damageFlicker");
      turnCounter = 0;
      setTimeout(resetMenu, 5000);
    }
  }
};

let faintedUser = function () {
  delete userPokemon[currentUserPokemon];

  if (userPokemon[0] === undefined && userPokemon[1] === undefined) {
    console.log("YOU LOSE");
  } else {
    setTimeout(pickNewPokemon, 500);
    mainTree = 2;
  }
};

let critical = 1;
let randomNum = 1;

let critCalc = function () {
  randomNum = Math.random() * 100;
  if (randomNum <= 6.25) {
    critical = 2;
  } else {
    critical = 1;
  }
};

let effectiveness1 = 1;
let effectiveness2 = 1;

const userPokemonName = document.querySelector("#user-name");
const cpuPokemonName = document.querySelector("#cpu-name");

const cpuPokemonImage = document.querySelector("#cpu-pokemon img");

let stab = 1.5;

let turnCounter = 0;

let pickNewPokemon = function () {
  document.querySelector("#action-box div").style.marginTop = `0px`;
  document.querySelector("#action-box div").style.flexBasis = `50%`;
  if (userPokemon[0] === undefined) {
    slot1.textContent = "Fainted";
  } else {
    slot1.textContent = userPokemon[0].name;
  }
  if (userPokemon[1] === undefined) {
    slot2.textContent = "Fainted";
  } else {
    slot2.textContent = userPokemon[1].name;
  }
  if (userPokemon[2] === undefined) {
    slot3.textContent = "Fainted";
  } else {
    slot3.textContent = userPokemon[2].name;
  }
  if (userPokemon[3] === undefined) {
    slot4.textContent = "Fainted";
  } else {
    slot4.textContent = userPokemon[3].name;
  }
};

let cpuTurn = function () {
  if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 0
  ) {
    console.log("guin turn");
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      turnCounter = 1;
      console.log("me");
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Blaze Kick`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(blazeKick);
    } else if (randomNum > 25 && randomNum <= 50) {
      turnCounter = 1;
      console.log("me");
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Close Combat`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(closeCombat);
    } else if (randomNum > 50 && randomNum <= 75) {
      turnCounter = 1;
      console.log("me");
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Thunder Punch`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(thunderPunch);
      document.querySelector("#game").classList.add("thunderpunch");
    } else if (randomNum > 75 && randomNum <= 100) {
      turnCounter = 1;
      console.log("me");
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Roost`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(roost);
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 1
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Dragon Claw`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(dragonClaw), 1000);
      console.log("test");
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Roar`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(roar), 1000);
      console.log("test");
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used flamethrower`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(flamethrower), 1000);
      console.log("test");
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Dragon Tail`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      setTimeout(calcDamage(dragonTail), 1000);
      console.log("test");
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 2
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Meteor Strike`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(meteorStrike);
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Wing Attack`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(wingAttack);
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Earthquake`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(earthquake);
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Harden`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(harden);
    }
  } else if (
    cpuPokemon[currentCpuPokemon].currentHealth > 0 &&
    currentCpuPokemon === 3
  ) {
    randomNum = Math.random() * 100;
    if (randomNum <= 25) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Ice Rush`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(iceRush);
    } else if (randomNum > 25 && randomNum <= 50) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Blizzard`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(blizzard);
    } else if (randomNum > 50 && randomNum <= 75) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Surf`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(surf);
    } else if (randomNum > 75 && randomNum <= 100) {
      slot1.textContent = `${cpuPokemon[currentCpuPokemon].name} used Aqua Veil`;
      slot2.textContent = "";
      slot3.textContent = "";
      slot4.textContent = "";
      calcDamage(aquaVeil);
    }
  } else {
    console.log(
      "remove current pokemon from array and randomly select a new one"
    );
    faintedCPU();
  }
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
  document
    .querySelector("#user-pokemon img")
    .classList.remove("userAttackAnimation");
  document.querySelector("#user-pokemon img").classList.remove("damageFlicker");
  document
    .querySelector("#cpu-pokemon img")
    .classList.remove("cpuFaintAnimation");
};

let title = document.querySelector("#title");
let description = document.querySelector("#description");

let mouseOver = function () {
  if (slot1.textContent === "flamethrower") {
    title.textContent = "flamethrower";
    description.textContent =
      "The user slashes the foe the instant an opportunity arises. It has a high critical-hit ratio.";
    console.log("test");
  }
};

let mouseOver2 = function () {
  if (slot2.textContent === "Roar") {
    title.textContent = "Roar";
    description.textContent =
      "The target is scared off and a different Pokémon is dragged out. In the wild, this ends a battle against a single Pokémon.";
  }
};

let mouseOver3 = function () {
  if (slot3.textContent === "Quick Attack") {
    title.textContent = "Quick Attack";
    description.textContent = "uwu";
  }
};

let mouseOver4 = function () {
  if (slot4.textContent === "Fairy Wind") {
    title.textContent = "Fairy Wind";
    description.textContent = "asdfsef";
  }
};

let mouseLeave = function () {
  title.textContent = `What will ${userPokemon[currentUserPokemon].name} do?`;
  description.textContent = "";
};

console.log("test");
console.log("test");
