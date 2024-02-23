export function resinForTalents(talentLevels, booksInventory, xingqiuBonus, condensed) {
  const TALENT_BOOKS_BASE_VALUES = [3, 6, 12, 18, 27, 36, 54, 108, 144];
  const TALENT_BOOKS = [3, 2, 4, 6, 9, 4, 6, 12, 16];
  const BOOK_VALUES = {
      "blue": 3,
      "purple": 9
  }
  let totalBooksNeeded = {
    greenBooks: 0,
    blueBooks: 0,
    purpleBooks: 0
  };
  let remainingBooksNeeded = {
    greenBooks: 0,
    blueBooks: 0,
    purpleBooks: 0
  };
  let domainRuns = {
    avg: 0,
    avgResinNeeded: 0,
    avgDays: 0
  };

  const WEEKLY_BOSS_MATS = [0, 0, 0, 0, 0, 1, 1, 2, 2];
  let weeklyBossRuns = {
    min: 0,
    minResinNeeded: 0,

    max: 0,
    maxResinNeeded: 0,

    avg: 0,
    avgResinNeeded: 0,

    weeklyBossMatsNeeded: 0
  };

  let bookValueNeeded = 0;
  for (let x = 0; x < talentLevels.length; x++) {
    for (let i = talentLevels[x][0] - 1; i < talentLevels[x][1] - 1; i++) {
      weeklyBossRuns.weeklyBossMatsNeeded += WEEKLY_BOSS_MATS[i];
      bookValueNeeded += TALENT_BOOKS_BASE_VALUES[i];
      if (i == 0) {
        totalBooksNeeded.greenBooks += TALENT_BOOKS[i];
      } else if (i > 0 && i < 5) {
        totalBooksNeeded.blueBooks += TALENT_BOOKS[i];
      } else {
        totalBooksNeeded.purpleBooks += TALENT_BOOKS[i];
      }
    }
  }

  remainingBooksNeeded.greenBooks = totalBooksNeeded.greenBooks - booksInventory[0];
  remainingBooksNeeded.blueBooks = totalBooksNeeded.blueBooks - booksInventory[1];
  remainingBooksNeeded.purpleBooks = totalBooksNeeded.purpleBooks - booksInventory[2];

  while (
    remainingBooksNeeded.greenBooks > 0 || 
    remainingBooksNeeded.blueBooks > 0 || 
    remainingBooksNeeded.purpleBooks > 0) {
      let simulatedRun = simulateDomainRun();
      domainRuns.avg += 1;
      remainingBooksNeeded.greenBooks -= simulatedRun.green;
      remainingBooksNeeded.blueBooks -= simulatedRun.blue;
      remainingBooksNeeded.purpleBooks -= simulatedRun.purple;
      
      while (remainingBooksNeeded.greenBooks <= -3) {
          remainingBooksNeeded.blueBooks -= 1;
          remainingBooksNeeded.greenBooks += 3;
          if (xingqiuBonus && Math.random() < 0.25) {
            remainingBooksNeeded.greenBooks -= 1;
          }
      }
      while (remainingBooksNeeded.blueBooks <= -3) {
          remainingBooksNeeded.purpleBooks -= 1;
          remainingBooksNeeded.blueBooks += 3; 
          if (xingqiuBonus && Math.random() < 0.25) {
            remainingBooksNeeded.blueBooks -= 1;
          }            
      }
    }
  
  domainRuns.avgResinNeeded = domainRuns.avg * 20;
  domainRuns.avgDays = parseFloat((domainRuns.avgResinNeeded / 180).toFixed(2));
  if (condensed) {
    domainRuns.avg = Math.ceil(domainRuns.avg / 2);
  }
  
  weeklyBossRuns.max = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 2);
  weeklyBossRuns.maxResinNeeded = weeklyBossRuns.max * 30;

  weeklyBossRuns.min = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 3);
  weeklyBossRuns.minResinNeeded = weeklyBossRuns.min * 30;

  weeklyBossRuns.avg = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 2.4);
  weeklyBossRuns.avgResinNeeded = weeklyBossRuns.avg * 30;

  return { totalBooksNeeded, weeklyBossRuns, domainRuns };
}

function simulateDomainRun() {
  let numBooks = {
      "green": 0,
      "blue": 0,
      "purple" :0
  }
  numBooks["green"] = Math.random() < 0.8 ? 2 : 3;
  let dropPacksNum = Math.random() < 0.8 ? 2 : 3;
  for (let i = 0; i <dropPacksNum; i++) {
      Math.random() < 0.1 ? numBooks["purple"] += 1 : numBooks["blue"] += 1;
  }
  return numBooks;
}

  
  export function resinForBossMat(level, toLevel, matInventory, currentAscended, desiredAscended) {
    const ASCENSION_LEVELS = [40, 50, 60, 70, 80];
    const CHARACTER_ASCENSION_BOSS_MATERIALS = [2, 4, 8, 12, 20];
    let bossRuns = {
      min: 0,
      minResinNeeded: 0,
      minDays: 0,
  
      max: 0,
      maxResinNeeded: 0,
      maxDays: 0,
  
      avg: 0,
      avgResinNeeded: 0,
      avgDays: 0,
  
      materialsNeeded: 0
    };
  
    bossRuns.materialsNeeded = -matInventory;
    if (currentAscended && level % 10 == 0) {
      level += 1;
    }
    if (desiredAscended && toLevel % 10 == 0) {
      toLevel += 1;
    }
    for (let i in ASCENSION_LEVELS) {
      //assumes you have not ascended at current level
      //and will not be ascending at desired level if at one of the ascension levels
      if (ASCENSION_LEVELS[i] < toLevel && ASCENSION_LEVELS[i] >= level) {
        bossRuns.materialsNeeded += CHARACTER_ASCENSION_BOSS_MATERIALS[i];
      }
    }
    bossRuns.min = Math.ceil(bossRuns.materialsNeeded / 3);
    bossRuns.minResinNeeded = bossRuns.min * 40;
    bossRuns.minDays = parseFloat((bossRuns.minResinNeeded / 180).toFixed(2));
  
    bossRuns.max = bossRuns.materialsNeeded / 2;
    bossRuns.maxResinNeeded = bossRuns.max * 40;
    bossRuns.maxDays = parseFloat((bossRuns.maxResinNeeded / 180).toFixed(2));
  
    bossRuns.avg = Math.ceil(bossRuns.materialsNeeded / 2.55);
    bossRuns.avgResinNeeded = bossRuns.avg * 40;
    bossRuns.avgDays = parseFloat((bossRuns.avgResinNeeded / 180).toFixed(2));
  
    return bossRuns;
  }
  
  export function displayTalentInfo() {
    var currentNa = document.getElementById("currentNa").value;
    var desiredNa = document.getElementById("desiredNa").value;
    var currentSkill = document.getElementById("currentSkill").value;
    var desiredSkill = document.getElementById("desiredSkill").value;
    var currentBurst = document.getElementById("currentBurst").value;
    var desiredBurst = document.getElementById("desiredBurst").value;
    var greenBooks = document.getElementById("greenBooks").value;
    var blueBooks = document.getElementById("blueBooks").value;
    var purpleBooks = document.getElementById("purpleBooks").value;
    var xingqiuBonus = document.getElementById("xingqiuBonus").checked;
    var condensedResin = document.getElementById("condensedResin").checked;
    let levelTalents = resinForTalents(
      [
        [currentNa, desiredNa],
        [currentSkill, desiredSkill],
        [currentBurst, desiredBurst]
      ],
      [greenBooks, blueBooks, purpleBooks],
      xingqiuBonus,
      condensedResin
    );
    document.getElementById("matsNeededNum").innerHTML =
      `&ensp;` + levelTalents.totalBooksNeeded.greenBooks +
      "<br>" +
      `&ensp;` + levelTalents.totalBooksNeeded.blueBooks +
      "<br>" +
      `&ensp;` + levelTalents.totalBooksNeeded.purpleBooks +
      "<br><br>";
    document.getElementById("weeklyBossRunsNum").innerHTML =
      `&ensp;` + levelTalents.weeklyBossRuns.min + ` (${levelTalents.weeklyBossRuns.minResinNeeded} resin)` +
      "<br>" + 
      `&ensp;` + levelTalents.weeklyBossRuns.avg + ` (${levelTalents.weeklyBossRuns.avgResinNeeded} resin)` +
      "<br>" +
      `&ensp;` + levelTalents.weeklyBossRuns.max + ` (${levelTalents.weeklyBossRuns.maxResinNeeded} resin)`;
    document.getElementById("weeklyBossRunsMats").innerHTML = 
      `&ensp;` + levelTalents.weeklyBossRuns.weeklyBossMatsNeeded;
    document.getElementById("domainRunsNum").innerHTML =
      `&ensp;` + levelTalents.domainRuns.avg;
    document.getElementById("domainResinNum").innerHTML =
      `&ensp;` + levelTalents.domainRuns.avgResinNeeded;
    document.getElementById("daysTalentsNum").innerHTML =
      `&ensp;` + levelTalents.domainRuns.avgDays;
    
  }
  
  export function displayBossInfo() {
    var currentLvl = parseInt(document.getElementById("currentLvl").value);
    var desiredLvl = parseInt(document.getElementById("desiredLvl").value);
    var invBossMats = parseInt(document.getElementById("invBossMats").value);
    var currentAscended = document.getElementById("current-ascended").checked;
    var desiredAscended = document.getElementById("desired-ascended").checked;
    let charAscension = resinForBossMat(currentLvl, desiredLvl, invBossMats, currentAscended, desiredAscended);
  
    document.getElementById("bossDropsNum").innerHTML =
    `&ensp;` + charAscension.materialsNeeded;
    document.getElementById("bossRunsNum").innerHTML =
    `&ensp;` + charAscension.min + "<br>" + `&ensp;` + charAscension.avg + "<br>" + `&ensp;` + charAscension.max;
    document.getElementById("bossResinNum").innerHTML =
    `&ensp;` + charAscension.minResinNeeded +
      "<br>" +
      `&ensp;` + charAscension.avgResinNeeded +
      "<br>" +
      `&ensp;` + charAscension.maxResinNeeded;
      document.getElementById("bossDaysNum").innerHTML =
    `&ensp;` + charAscension.minDays +
      "<br>" +
      `&ensp;` + charAscension.avgDays +
      "<br>" +
      `&ensp;` + charAscension.maxDays;
  }
  