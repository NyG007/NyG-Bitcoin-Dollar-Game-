let bitcoins = 0;
let dollars = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-bitcoins 3s forwards";
        }, 100);
        bitcoins++;
    } else {
        setTimeout(function () {
            coin.style.animation = "spin-dollars 3s forwards";
        }, 100);
        dollars++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#bitcoins-count").textContent = `Bitcoins: ${bitcoins}`;
    document.querySelector("#dollars-count").textContent = `Dollars: ${dollars}`;
}

function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click", () => {
    coin.style.animation = "none";
    bitcoins = 0;
    dollars = 0;
    updateStats();
})