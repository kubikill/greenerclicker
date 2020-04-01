"use strict";
/* 10 money = $0.01
1000 money = $1*/
let upgrades = [
    // Flower pot
    [{
        name: "Bug Spray",
        description1: "Flower pots generate 3x more money.",
        description2: "Helps you get rid of nasty bugs that could harm your flowers. Doesn't work on programming bugs, though.",
        icon: "fa-spray-can",
        cost: 10000,
        multiplier: 3,
    }, {
        name: "Fertilizer",
        description1: "Flower pots generate 4x more money.",
        description2: "Turns dirt into high-quality dirt and makes flowers grow faster.",
        icon: "fa-fill-drip",
        cost: 100000,
        multiplier: 4,
    }, {
        name: "More Sunlight",
        description1: "Flower pots generate 6x more money.",
        description2: "Move your flower pots somewhere where they'll get more sunlight.",
        icon: "fa-sun",
        cost: 1000000,
        multiplier: 6,
    }, {
        name: "Automatic Watering",
        description1: "Flower pots generate 8x more money.",
        description2: "Buy a robot that'll do the watering for you. Technology is great, isn't it?",
        icon: "fa-tint",
        cost: 35000000,
        multiplier: 8,
    }, {
        name: "Super Hyper Extra Large Pots",
        description1: "Flower pots generate 16x more money.",
        description2: "Give each of your flowers a kingdom of their own.",
        icon: "fab fa-fort-awesome",
        cost: 1000000000,
        multiplier: 16,
    }, ],
    // Pasture upgrades
    [{
            name: "Splish Splash",
            description1: "Pastures generate 2x more money.",
            description2: "Create a small water pond on every pasture.",
            icon: "fa-water",
            cost: 250000,
            multiplier: 2,
        },
        {
            name: "Such Watch, Much Protection",
            description1: "Pastures generate 2.5x more money.",
            description2: "Hire cute dogs to protect your pastures.",
            icon: "fa-dog",
            cost: 1000000,
            multiplier: 2.5,
        },
        {
            name: "Luxury Grass",
            description1: "Pastures generate 3.5x more money.",
            description2: "Buy grass that tastes so good, you'd wish you were born a cow.",
            icon: "fa-leaf",
            cost: 5000000,
            multiplier: 3.5,
        },
        {
            name: "Happy Little Trees",
            description1: "Pastures generate 4x more money.",
            description2: "Plant trees to attract birds that'll sing tunes for the animals.",
            icon: "fa-tree",
            cost: 100000000,
            multiplier: 4,
        },
        {
            name: "Secret Cameras",
            description1: "Pastures generate 6x more money.",
            description2: "Install a 24/7 monitoring system, so local farmers can spy on their animals any time they want.",
            icon: "fa-video",
            cost: 2000000000,
            multiplier: 6,
        },
    ],
    // Gardening Shop
    [{
        name: "Megaphone Cars",
        description1: "Gardening shops generate 2.5x more money.",
        description2: "Annoy everyone in 5 kilometer radius by using megaphone cars to announce the opening of your gardening shops.",
        icon: "fa-bullhorn",
        cost: 10000000,
        multiplier: 2.5,
    }, {
        name: "Home Delivery",
        description1: "Gardening shops generate 3x more money.",
        description2: "Launch a home delivery service.",
        icon: "fa-truck",
        cost: 25000000,
        multiplier: 3,
    }, {
        name: "Gold Tools",
        description1: "Gardening shops generate 4x more money.",
        description2: 'Launch a new set of tools for sale that are "guaranteed to be unbreakable".',
        icon: "fa-toolbox",
        cost: 100000000,
        multiplier: 4,
    }, {
        name: "Please Come Again",
        description1: "Gardening shops generate 6x more money.",
        description2: "Have your staff charm customers to increase sales.",
        icon: "fa-smile-wink",
        cost: 500000000,
        multiplier: 6,
    }, {
        name: "Online Store",
        description1: "Gardening shops generate 10x more money.",
        description2: "Sell gardening equipment in every part of the world. Free shipping included.",
        icon: "fa-shopping-cart",
        cost: 20000000000,
        multiplier: 10,
    }, ],
    // Paint Factory
    [{
        name: "Menn Partnership",
        description1: "Paint factories generate 3x more money.",
        description2: "Strike a deal with a weapon-manufacturing company to sell paint to mercenaries fighting over pits of gravel.",
        icon: "fa-handshake",
        cost: 100000000,
        multiplier: 3,
    }, {
        name: "Bring Your Flower Pot To Work Day, Every Day",
        description1: "Paint factories generate 4x more money.",
        description2: "Staff are now allowed to bring flower pots with themselves every day.",
        icon: "fa-briefcase",
        cost: 600000000,
        multiplier: 4
    }, {
        name: "Biofuel",
        description1: "Paint factories generate 5x more money.",
        description2: 'Replace the factories power source with 100% green biofuel.',
        icon: "fa-tint",
        cost: 1800000000,
        multiplier: 5,
    }, {
        name: "10000 Shades Of Green",
        description1: "Paint factories generate 8x more money.",
        description2: "Hire women to come up with new names of colors similar to green.",
        icon: "fa-female",
        cost: 10000000000,
        multiplier: 8,
    }, ],
    // Corporation
    [{
        name: "PR Campaign",
        description1: "Corporations generate 2x more money.",
        description2: "Start a campaign to convince everyone that green is the best color.",
        icon: "fa-newspaper",
        cost: 1000000000,
        multiplier: 2,
    }, {
        name: "No Cookie Clicking For You",
        description1: "Corporations generate 3x more money.",
        description2: "Begin an all-out war with a rival organization that is trying to turn everything into cookies.",
        icon: "fa-cookie",
        cost: 5000000000,
        multiplier: 3,
    }, {
        name: "Hardline",
        description1: "Corporations generate 3.5x more money.",
        description2: 'Declare everyone who hates green your enemy.',
        icon: "fa-user-slash",
        cost: 10000000000,
        multiplier: 3.5,
    }, {
        name: "Take On The World",
        description1: "<b>Turns the entire world green.</b>",
        description2: "Your goal is finally within reach! Use all of your available resources to <b>to turn everything green!</b>",
        icon: "fa-crown",
        cost: 100000000000,
        multiplier: 9001,
    }],
    // Clicking upgrades
    [{
            name: "Glasses",
            description1: "Clicking generates 3x more money.",
            description2: "Stylish, green glasses to help you see earning opportunities easier.",
            icon: "fa-glasses",
            cost: 15000,
            multiplier: 3,
        },
        {
            name: "Dictionary",
            description1: "Clicking generates 6x more money.",
            description2: "Increases your Speech by 15.",
            icon: "fa-book",
            cost: 500000,
            multiplier: 6,
        },
        {
            name: "Programmer",
            description1: "Clicking generates 10x more money.",
            description2: "Hire a programmer to teach you how to code money.",
            icon: "fa-laptop-code",
            cost: 6000000,
            multiplier: 10,
        },
        {
            name: "Personal Assistant",
            description1: "Clicking generates 20x more money.",
            description2: "Hire a personal assistant who loves green as much as you do.",
            icon: "fa-user",
            cost: 100000000,
            multiplier: 20,
        },
    ]
];
let buildings = [{
    // Flower pot
    cost: 1000,
}, {
    // Pasture
    cost: 15000,
}, {
    // Gardening shop
    cost: 1500000,
}, {
    // Paint factory
    cost: 15000000,
}, {
    // Corporation
    cost: 160000000,
}, ];
let save = {
    numCalc: {
        mPS: 0,
        buildingProfit: [
            // Flower pot
            10,
            // Pasture
            1000,
            // Gardening shop
            12000,
            // Paint factory
            80000,
            // Corporation
            600000,
            // Clicking
            100
        ],
        buildingCost: [
            1000, 15000, 1500000, 15000000, 160000000
        ],
        buildingUnlock: {
            pos: 0,
            num: [400, 35000, 600000, 4000000]
        },
        upgradeUnlock: [{
                pos: 0,
                num: [10, 25, 50, 75, 100]
            },
            {
                pos: 0,
                num: [10, 25, 50, 75, 100]
            },
            {
                pos: 0,
                num: [10, 25, 50, 75, 100]
            },
            {
                pos: 0,
                num: [10, 25, 50, 75]
            },
            {
                pos: 0,
                num: [10, 25, 50, 75]
            },
            {
                pos: 0,
            }
        ]
    },
    buildings: [
        //Flower pot
        0, 0, 0, 0, 0, 0
    ],
    upgrades: [
        //Flower pot
        [

        ],
        [

        ],
        [

        ],
        [

        ],
        [

        ],
        [

        ]
    ],
    money: 0,
    availableUpgrades: [
        [

        ],
        [

        ],
        [

        ],
        [

        ],
        [

        ],
        [

        ]
    ],
    stats: {
        moneySpent: 0,
        playtime: 0,
        clickMoney: 0
    },
    settings: {
        volume: true,
        updateDelay: 0.1
    },
    date: 0
}
let ui = {
    money: document.getElementById("moneyUI"),
    cent: document.getElementById("centUI"),
    clicker: document.getElementById("clicker"),
    mPS: document.getElementById("mps"),
    mPSCent: document.getElementById("mpscent"),
    upgrades: document.getElementById("upgrades"),
    buildingsContainer: document.getElementById("buildings"),
    savedate: document.getElementById("savedate"),
    win: document.getElementById("win"),
    hoursPlaytime: document.getElementById("hoursplaytime"),
    minutesPlaytime: document.getElementById("minutesplaytime"),
    secondsPlaytime: document.getElementById("secondsplaytime"),
    stats: {
        spent: document.getElementById("statsspent"),
        spentCent: document.getElementById("statsspentcent"),
        perClick: document.getElementById("statsclick"),
        perClickCent: document.getElementById("statsclickcent"),
        clickTotal: document.getElementById("statsclicktotal"),
        clickTotalCent: document.getElementById("statsclicktotalcent"),
        flowerPot: document.getElementById("statsflowerpotmps"),
        flowerPotCent: document.getElementById("statsflowerpotmpscent"),
        pasture: document.getElementById("statspasturemps"),
        pastureCent: document.getElementById("statspasturempscent"),
        shop: document.getElementById("statsshopmps"),
        shopCent: document.getElementById("statsshopmpscent"),
        paint: document.getElementById("statspaintmps"),
        paintCent: document.getElementById("statspaintmpscent"),
        corp: document.getElementById("statscorpmps"),
        corpCent: document.getElementById("statscorpmpscent"),
        hours: document.getElementById("hoursstats"),
        minutes: document.getElementById("minutesstats"),
        seconds: document.getElementById("secondsstats")
    },
    buildings: [
        // Flower pot
        {
            mPS: document.getElementById("flowerpotmps"),
            mPSCent: document.getElementById("flowerpotmpscent"),
            price: document.getElementById("flowerpotprice"),
            cent: document.getElementById("flowerpotpricecent"),
            owned: document.getElementById("flowerpotowned"),
        },
        // Pasture
        {
            container: document.getElementById("pasturebuilding"),
            mPS: document.getElementById("pasturemps"),
            mPSCent: document.getElementById("pasturempscent"),
            price: document.getElementById("pastureprice"),
            cent: document.getElementById("pasturepricecent"),
            owned: document.getElementById("pastureowned"),
        },
        // Gardening shop
        {
            container: document.getElementById("shopbuilding"),
            mPS: document.getElementById("shopmps"),
            mPSCent: document.getElementById("shopmpscent"),
            price: document.getElementById("shopprice"),
            cent: document.getElementById("shoppricecent"),
            owned: document.getElementById("shopowned"),
        },
        // Paint factory
        {
            container: document.getElementById("paintbuilding"),
            mPS: document.getElementById("paintmps"),
            mPSCent: document.getElementById("paintmpscent"),
            price: document.getElementById("paintprice"),
            cent: document.getElementById("paintpricecent"),
            owned: document.getElementById("paintowned"),
        },
        // Corporation
        {
            container: document.getElementById("corpbuilding"),
            mPS: document.getElementById("corpmps"),
            mPSCent: document.getElementById("corpmpscent"),
            price: document.getElementById("corpprice"),
            cent: document.getElementById("corppricecent"),
            owned: document.getElementById("corpowned"),
        }
    ]
}
let isClicked = false;

function clickDown() {
    isClicked = true;
    ui.clicker.children[0].style.transform = "scale(0.9)";
}

function clickUp() {
    if (isClicked) {
        ui.clicker.children[0].style.transform = "scale(1)";
        save.money += save.numCalc.buildingProfit[buildings.length];
        save.stats.clickMoney += save.numCalc.buildingProfit[buildings.length];
        isClicked = false;
        ui.money.innerHTML = calcMoney(true, save.money);
        ui.cent.innerHTML = calcMoney(false, save.money);
    }
}

function calcMoney(mode, src) {
    let money = src.toString();
    if (mode) {
        if (money.length <= 3) {
            return "0";
        }
        return money.slice(0, money.length - 3);
    } else {
        if (money.length == 2) {
            return "0" + money.slice(money.length - 2, money.length - 1);
        }
        if (money.length == 1) {
            return "00";
        }
        return money.slice(money.length - 3, money.length - 1);
    }
}

function calcMPS() {
    save.numCalc.mPS = (save.numCalc.buildingProfit[0] * save.buildings[0]) + (save.numCalc.buildingProfit[1] * save.buildings[1]) + (save.numCalc.buildingProfit[2] * save.buildings[2]) + (save.numCalc.buildingProfit[3] * save.buildings[3]) + (save.numCalc.buildingProfit[4] * save.buildings[4]);
    if (save.numCalc.mPS >= save.numCalc.buildingUnlock.num[save.numCalc.buildingUnlock.pos]) {
        showBuilding(save.numCalc.buildingUnlock.pos + 1)
        save.numCalc.buildingUnlock.pos += 1;
    }
}

function autoMoney() {
    save.money += Math.round(save.numCalc.mPS * save.settings.updateDelay);
    ui.money.innerHTML = calcMoney(true, save.money);
    ui.cent.innerHTML = calcMoney(false, save.money);
    if (save.numCalc.upgradeUnlock[upgrades.length - 1].pos <= 3) {
        if (save.money >= upgrades[upgrades.length - 1][save.numCalc.upgradeUnlock[upgrades.length - 1].pos].cost / 2) {
            showUpgrade(upgrades.length - 1, save.numCalc.upgradeUnlock[upgrades.length - 1].pos);
            save.numCalc.upgradeUnlock[upgrades.length - 1].pos += 1;
        }
    }
    save.stats.playtime += 1;
}
let autoMoneyInterval = setInterval(autoMoney, 100);
setInterval(function () {
    document.title = "$" + calcMoney(true, save.money) + "." + calcMoney(false, save.money) + " - Greener Clicker"
}, 2000)

function buyBuilding(id) {
    if (save.money >= save.numCalc.buildingCost[id]) {
        save.money -= save.numCalc.buildingCost[id];
        save.stats.moneySpent += save.numCalc.buildingCost[id];
        save.buildings[id] += 1;
        calcMPS();
        save.numCalc.buildingCost[id] = Math.floor(buildings[id].cost * Math.pow(1.1, save.buildings[id]));
        ui.money.innerHTML = calcMoney(true, save.money);
        ui.cent.innerHTML = calcMoney(false, save.money);
        ui.buildings[id].owned.innerHTML = save.buildings[id];
        ui.buildings[id].price.innerHTML = calcMoney(true, save.numCalc.buildingCost[id]);
        ui.buildings[id].cent.innerHTML = calcMoney(false, save.numCalc.buildingCost[id]);
        ui.mPS.innerHTML = calcMoney(true, save.numCalc.mPS);
        ui.mPSCent.innerHTML = calcMoney(false, save.numCalc.mPS);
        if (save.buildings[id] == save.numCalc.upgradeUnlock[id].num[save.numCalc.upgradeUnlock[id].pos]) {
            showUpgrade(id, save.numCalc.upgradeUnlock[id].pos);
            save.numCalc.upgradeUnlock[id].pos += 1;
        }
    }
}

function buyUpgrade(building, upgrade) {
    if (save.money >= upgrades[building][upgrade].cost && save.upgrades[building][upgrade] == undefined) {
        if (building == 4 && upgrade == 3) {
            endGame();
            return 0;
        }
        save.money -= upgrades[building][upgrade].cost;
        save.stats.moneySpent += upgrades[building][upgrade].cost;
        save.numCalc.buildingProfit[building] *= upgrades[building][upgrade].multiplier;
        save.upgrades[building].push(upgrade);
        calcMPS();
        ui.mPS.innerHTML = calcMoney(true, save.numCalc.mPS);
        ui.mPSCent.innerHTML = calcMoney(false, save.numCalc.mPS);
        ui.money.innerHTML = calcMoney(true, save.money);
        ui.cent.innerHTML = calcMoney(false, save.money);
        if (building != upgrades.length - 1) {
            ui.buildings[building].mPS.innerHTML = calcMoney(true, save.numCalc.buildingProfit[building]);
            ui.buildings[building].mPSCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[building]);
        }
        document.getElementById("upgrade" + building + "x" + upgrade).classList.add("remove");
        setTimeout(function () {
            document.getElementById("upgrade" + building + "x" + upgrade).remove();
        }, 600);
        save.availableUpgrades[building][upgrade] = false;
    }
}

function showUpgrade(building, upgrade) {
    if (save.upgrades[building][upgrade] != undefined) {
        return 0;
    }
    let upgradeHTML = document.createElement("div");
    upgradeHTML.id = 'upgrade' + building + 'x' + upgrade;
    upgradeHTML.innerHTML = '<div class="tile"><div class="tile-icon"><i class="fas ' + upgrades[building][upgrade].icon + ' fa-2x"></i> </div><div class="tile-content"> <p class="tile-title">' + upgrades[building][upgrade].name + '</p><p class="tile-subtitle">' + upgrades[building][upgrade].description1 + '</p><p>' + upgrades[building][upgrade].description2 + '</p><p><button class="btn btn-primary btn-sm" onpointerdown="buyUpgrade(' + building + ', ' + upgrade + ')">Buy for $' + calcMoney(true, upgrades[building][upgrade].cost) + '.' + calcMoney(false, upgrades[building][upgrade].cost) + '</button></p></div></div>';
    ui.upgrades.appendChild(upgradeHTML);
    save.availableUpgrades[building][upgrade] = true;
}

function showBuilding(id) {
    ui.buildings[id].container.classList.remove("hidden");
}

function saveGame() {
    let date = new Date();
    save.date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ", " + date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    ui.savedate.innerHTML = save.date;
    localStorage.setItem('GC_save', JSON.stringify(save));
}
setInterval(saveGame, 60000);
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('GC_save')) {
        save = JSON.parse(localStorage.getItem('GC_save'));
        for (let i = 0; i < save.availableUpgrades.length; i++) {
            for (let ii = 0; ii < save.availableUpgrades[i].length; ii++) {
                if (save.availableUpgrades[i][ii]) {
                    console.log("Upgrade " + ii + " from building " + i);
                    showUpgrade(i, ii);
                }
            }
        }
        for (let i = 0; i <= 4; i++) {
            ui.buildings[i].mPS.innerHTML = calcMoney(true, save.numCalc.buildingProfit[i]);
            ui.buildings[i].mPSCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[i]);
            ui.buildings[i].owned.innerHTML = save.buildings[i];
            ui.buildings[i].price.innerHTML = calcMoney(true, save.numCalc.buildingCost[i]);
            ui.buildings[i].cent.innerHTML = calcMoney(false, save.numCalc.buildingCost[i]);
        }
        if (save.numCalc.buildingUnlock.pos > 0) {
            let temp = save.numCalc.buildingUnlock.pos;
            while (temp > 0) {
                showBuilding(temp);
                temp--;
            }
        }
        ui.savedate.innerHTML = save.date;
        ui.mPS.innerHTML = calcMoney(true, save.numCalc.mPS);
        ui.mPSCent.innerHTML = calcMoney(false, save.numCalc.mPS);
    }
})

function endGame() {
    if (save.money >= 100000000000) {
        ui.win.classList.add("active");
        let endPlaytime = Math.floor(save.stats.playtime / 10);
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        while (endPlaytime > 3600) {
            hours++;
            endPlaytime -= 3600;
        }
        while (endPlaytime > 60) {
            minutes++;
            endPlaytime -= 60;
        }
        seconds = endPlaytime;
        ui.hoursPlaytime.innerHTML = hours;
        ui.minutesPlaytime.innerHTML = minutes;
        ui.secondsPlaytime.innerHTML = seconds;
    }
}

function updateStats() {
    location.href = '#stats';
    ui.stats.spent.innerHTML = calcMoney(true, save.stats.moneySpent);
    ui.stats.spentCent.innerHTML = calcMoney(false, save.stats.moneySpent);
    ui.stats.perClick.innerHTML = calcMoney(true, save.numCalc.buildingProfit[buildings.length]);
    ui.stats.perClickCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[buildings.length]);
    ui.stats.clickTotal.innerHTML = calcMoney(true, save.stats.clickMoney);
    ui.stats.clickTotalCent.innerHTML = calcMoney(false, save.stats.clickMoney);
    ui.stats.flowerPot.innerHTML = calcMoney(true, save.numCalc.buildingProfit[0] * save.buildings[0]);
    ui.stats.flowerPotCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[0] * save.buildings[0]);
    ui.stats.pasture.innerHTML = calcMoney(true, save.numCalc.buildingProfit[1] * save.buildings[1]);
    ui.stats.pastureCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[1] * save.buildings[1]);
    ui.stats.shop.innerHTML = calcMoney(true, save.numCalc.buildingProfit[2] * save.buildings[2]);
    ui.stats.shopCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[2] * save.buildings[2]);
    ui.stats.paint.innerHTML = calcMoney(true, save.numCalc.buildingProfit[3] * save.buildings[3]);
    ui.stats.paintCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[3] * save.buildings[3]);
    ui.stats.corp.innerHTML = calcMoney(true, save.numCalc.buildingProfit[4] * save.buildings[4]);
    ui.stats.corpCent.innerHTML = calcMoney(false, save.numCalc.buildingProfit[4] * save.buildings[4]);
    let currentPlaytime = Math.floor(save.stats.playtime / 10);
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    while (currentPlaytime > 3600) {
        hours++;
        currentPlaytime -= 3600;
    }
    while (currentPlaytime > 60) {
        minutes++;
        currentPlaytime -= 60;
    }
    seconds = currentPlaytime;
    ui.stats.hours.innerHTML = hours;
    ui.stats.minutes.innerHTML = minutes;
    ui.stats.seconds.innerHTML = seconds;
}

function resetSave() {
    localStorage.removeItem("GC_save");
    location.href = "#";
    location.reload();
}