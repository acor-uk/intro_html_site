let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

function insertDate() {
    const today = new Date();
    const dateOptions = {year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'};
    return today.toLocaleDateString(undefined, dateOptions);
}