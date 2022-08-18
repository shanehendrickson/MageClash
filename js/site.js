const possibleChoices = document.querySelectorAll('.magic-type');
const userCastDisplay = document.getElementById('user-cast');
const cpuCastDisplay = document.getElementById('cpu-cast');
const castResultDisplay = document.getElementById('cast-result');
const userHealthDisplay = document.getElementById('user-health');
const cpuHealthDisplay = document.getElementById('cpu-health');

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const newGame = document.querySelector('#new-game');
const clashVictorDisplay = document.getElementById('clashVictor');

let userCast, cpuCast, castResult, clashVictor;
let userHealth = 10;
let cpuHealth = 10;

userHealthDisplay.innerHTML = userHealth;
cpuHealthDisplay.innerHTML = cpuHealth;

// check for magic button clicks
possibleChoices.forEach(pChoice => pChoice.addEventListener('click', (e) => {
  userCast = e.target.id;
  userCastDisplay.className = '';
  switch(userCast) {
    case 'tree': 
      userCastDisplay.innerHTML = '<i id="tree" class="fa-solid fa-leaf"></i>';
      userCastDisplay.classList.add('tree');
      break;
    case 'bolt': 
      userCastDisplay.innerHTML = '<i id="bolt" class="fa-solid fa-bolt"></i>';
      userCastDisplay.classList.add('bolt');
      break;
    case 'wind': 
      userCastDisplay.innerHTML = '<i id="wind" class="fa-solid fa-wind"></i>';
      userCastDisplay.classList.add('wind');
      break;
    case 'flame': 
      userCastDisplay.innerHTML = '<i id="flame" class="fa-solid fa-fire"></i>';
      userCastDisplay.classList.add('flame');
      break;
    case 'wave': 
      userCastDisplay.innerHTML = '<i id="wave" class="fa-solid fa-water"></i>';
      userCastDisplay.classList.add('wave');
  }

  generateCpuCast();
  getResult();
  endGame();

  userHealthDisplay.innerHTML = userHealth;
  cpuHealthDisplay.innerHTML = cpuHealth;
}))

// generate CPU choice
function generateCpuCast() {
  const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
  switch(randomNum) {
    case 1: cpuCast = 'tree'; break;
    case 2: cpuCast = 'bolt'; break;
    case 3: cpuCast = 'wind'; break;
    case 4: cpuCast = 'flame'; break;
    case 5: cpuCast = 'wave'; break;
  }

  cpuCastDisplay.className = '';

  switch(cpuCast) {
    case 'tree': 
      cpuCastDisplay.innerHTML = '<i id="tree" class="fa-solid fa-leaf"></i>';
      cpuCastDisplay.classList.add('tree');
      break;
    case 'bolt': 
      cpuCastDisplay.innerHTML = '<i id="bolt" class="fa-solid fa-bolt"></i>';
      cpuCastDisplay.classList.add('bolt');
      break;
    case 'wind': 
      cpuCastDisplay.innerHTML = '<i id="wind" class="fa-solid fa-wind"></i>';
      cpuCastDisplay.classList.add('wind');
      break;
    case 'flame': 
      cpuCastDisplay.innerHTML = '<i id="flame" class="fa-solid fa-fire"></i>';
      cpuCastDisplay.classList.add('flame');
      break;
    case 'wave': 
      cpuCastDisplay.innerHTML = '<i id="wave" class="fa-solid fa-water"></i>';
      cpuCastDisplay.classList.add('wave');
      break;
  }
}

// get result of casting choices
function getResult() {
  if(userCast === cpuCast) {
    castResult = 'Draw';
  } else if(userCast === 'wind') {
    if(cpuCast === 'wave' || cpuCast === 'flame') {
      castResult = 'You Win';
      cpuHealth -= 1;
    } else if(cpuCast === 'bolt' || cpuCast === 'tree') {
      castResult = 'CPU Wins';
      userHealth -= 1;
    }
} else if(userCast === 'wave') {
    if(cpuCast === 'flame' || cpuCast === 'bolt') {
      castResult = 'You Win';
      cpuHealth -= 1;
    } else if(cpuCast === 'tree' || cpuCast === 'wind') {
      castResult = 'CPU Wins';
      userHealth -= 1;
    }
} else if(userCast === 'flame') {
    if(cpuCast === 'bolt' || cpuCast === 'tree') {
      castResult = 'You Win';
      cpuHealth -= 1;
    } else if(cpuCast === 'wind' || cpuCast === 'wave') {
      castResult = 'CPU Wins';
      userHealth -= 1;
    }  
} else if(userCast === 'bolt') {
    if(cpuCast === 'tree' || cpuCast === 'wind') {
      castResult = 'You Win';
      cpuHealth -= 1;
    } else if(cpuCast === 'wave' || cpuCast === 'flame') {
      castResult = 'CPU Wins';
      userHealth -= 1;
    } 
} else if(userCast === 'tree') {
    if(cpuCast === 'wind' || cpuCast === 'wave') {
      castResult = 'You Win';
      cpuHealth -= 1;
    } else if(cpuCast === 'bolt' || cpuCast === 'flame') {
      castResult = 'CPU Wins';
      userHealth -= 1;
    }
}
castResultDisplay.innerHTML = castResult
}

// test for end game conditions
function endGame() {
  if(userHealth === 0 || cpuHealth === 0) {
    modal.classList.add('open');
    overlay.classList.add('open');

    if(userHealth === 0) {
      clashVictor = 'You LOSE!';
      clashVictorDisplay.innerHTML = clashVictor;
    } else {
      clashVictor = 'You WIN!!!';
      clashVictorDisplay.innerHTML = clashVictor;
    }
  }
}

newGame.addEventListener('click', (e) => {
  location.reload();
})