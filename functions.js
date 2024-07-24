function toggleStyleSheet() {
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var element = document.getElementById("mainStyleSheet");
    var style = element === null || element === void 0 ? void 0 : element.getAttribute("href");
    if (style == "StyleSheet.css") {
        style = "StyleSheet1.css";
    }
    else {
        style = "StyleSheet.css";
    }
    element === null || element === void 0 ? void 0 : element.setAttribute("href", style);
    localStorage.setItem("currStyle", style);
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    // 1 (c) Determine new stylesheet file name
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
}
window.onload = function () {
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.
    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var curr_style = localStorage.getItem("currStyle") || "";
    // 2 (b) get html style element by ID
    var element = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    element === null || element === void 0 ? void 0 : element.setAttribute("href", curr_style);
};
