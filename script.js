// Convenience Variables

// // These variables are here to make the code a bit cleaner.
let body = document.querySelector("body");
let themeDrawer = document.querySelector("#themer");
let themeDrawerHandle = document.querySelector("#themer .alwaysButton");

// Themes

// // Each theme sets variables in the CSS.
// // You can make your own themes by copying one of the existing themes here and adding it to themeList.
let darkThemeVariables = {
    darkColor: "rgb(46, 46, 46)",
    lightColor: "rgb(238, 238, 238)",
    mediumColor: "rgb(142, 142, 142)",
    backgroundColor: "var(--dark-color)",
    fontColor: "var(--light-color)",
    badgeNewColor: "rgb(83, 83, 83)",
    cardColor: "rgba(83, 83, 83, 0.25)",
    buttonColor: "var(--light-color)",
    buttonTextColor: "var(--dark-color)",
    buttonBorderColor: "var(--medium-color)",
    titleFont: '"Viaoda Libre", serif'
};
let lightThemeVariables = {
    darkColor: "rgb(46, 46, 46)",
    lightColor: "rgb(238, 238, 238)",
    mediumColor: "rgb(142, 142, 142)",
    backgroundColor: "var(--light-color)",
    fontColor: "var(--dark-color)",
    badgeNewColor: "rgb(83, 83, 83)",
    cardColor: "rgba(83, 83, 83, 0.25)",
    buttonColor: "var(--dark-color)",
    buttonTextColor: "var(--light-color)",
    buttonBorderColor: "var(--medium-color)",
    titleFont: '"Viaoda Libre", serif'
};
let rainbowThemeVariables = {
    darkColor: "rgb(46, 46, 46)",
    lightColor: "rgb(238, 238, 238)",
    mediumColor: "rgb(142, 142, 142)",
    backgroundColor: "var(--rainbow-current)",
    fontColor: "var(--dark-color)",
    badgeNewColor: "rgb(83, 83, 83)",
    cardColor: "rgba(83, 83, 83, 0.25)",
    buttonColor: "var(--dark-color)",
    buttonTextColor: "var(--light-color)",
    buttonBorderColor: "var(--medium-color)",
    titleFont: 'Nabla, serif'
};
let badThemeVariables = {
    darkColor: "rgb(139, 0, 0)",
    lightColor: "rgb(255, 255, 224)",
    mediumColor: "rgb(197, 128, 112)",
    backgroundColor: "var(--light-color)",
    fontColor: "var(--dark-color)",
    badgeNewColor: "rgb(83, 83, 83)",
    cardColor: "rgba(125, 239, 117, 0.25)",
    buttonColor: "var(--dark-color)",
    buttonTextColor: "var(--light-color)",
    buttonBorderColor: "var(--medium-color)",
    titleFont: '"Viaoda Libre", serif'
};
let themeList = {
    darkTheme: darkThemeVariables,
    lightTheme: lightThemeVariables,
    rainbowTheme: rainbowThemeVariables,
    badTheme: badThemeVariables
};

// Rainbow Theme

// // Because the rainbow theme cycles through colours, I needed to make some unique code for it.
let rainbowColors = ["#f88","#ff8","#8f8","#8ff","#88f","#f8f"];
let rainbowCurrentIndex = 0;
function rainbowChange() {
    body.style.setProperty("--rainbow-current",rainbowColors[rainbowCurrentIndex]);
    if (rainbowCurrentIndex >= (rainbowColors.length - 1)) {
        rainbowCurrentIndex = 0;
    } else {
        rainbowCurrentIndex++;
    };
};

// If there's no theme selected, select dark theme. This is for first-time visitors.

if (localStorage.getItem("currentTheme") == null) {
    localStorage.setItem("currentTheme","darkTheme");
};

// Theme Changer

// // These two variables are specifically for the rainbow theme.
let rainbowChangeInterval;
let rainbowChangeEnabled = false;

// // This is the theme changer itself.
function changeTheme(theme) {
    localStorage.setItem("currentTheme",theme);
    body.style.setProperty("--dark-color",themeList[theme].darkColor);
    body.style.setProperty("--light-color",themeList[theme].lightColor);
    body.style.setProperty("--medium-color",themeList[theme].mediumColor);
    body.style.setProperty("--background-color",themeList[theme].backgroundColor);
    body.style.setProperty("--font-color",themeList[theme].fontColor);
    body.style.setProperty("--badgeNew-color",themeList[theme].badgeNewColor);
    body.style.setProperty("--card-color",themeList[theme].cardColor);
    body.style.setProperty("--button-color",themeList[theme].buttonColor);
    body.style.setProperty("--button-text-color",themeList[theme].buttonTextColor);
    body.style.setProperty("--button-border-color",themeList[theme].buttonBorderColor);
    body.style.setProperty("--title-font",themeList[theme].titleFont);

    // // This code is for the rainbow theme. It starts and stops the cycling of background colours.
    if ((localStorage.getItem("currentTheme") == "rainbowTheme") && (rainbowChangeEnabled == false)) {
        rainbowChangeInterval = setInterval(rainbowChange, 1000);
        rainbowChangeEnabled = true;
        body.style.setProperty("transition","background-color 1s linear");
    } else if (localStorage.getItem("currentTheme") != "rainbowTheme") {
        clearInterval(rainbowChangeInterval);
        rainbowChangeEnabled = false;
        body.style.removeProperty("transition");
    };
};

// Call the theme changer on page load.

changeTheme(localStorage.getItem("currentTheme"));

// Theme Drawer

let themeDrawerOpen = false;
function toggleThemeDrawer() {
    if (themeDrawerOpen == true) {
        themeDrawer.classList.add("themerClosed");
        themeDrawerHandle.innerHTML = "&#709;";
        themeDrawerOpen = false;
    } else {
        themeDrawer.classList.remove("themerClosed")
        themeDrawerHandle.innerHTML = "&#708;";
        themeDrawerOpen = true;
    };
};