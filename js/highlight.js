let toggle = false;
const icons = [
    "../images/highlighter-logo-96.png",
    "../images/highlighter-logo-gs-96.png"
];

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
});

chrome.browserAction.onClicked.addListener(() => {
    toggle = !toggle;
    let path;
    if (toggle) {
        path = icons[0];
    } else {
        path = icons[1];
    }
    chrome.browserAction.setIcon({
        path: path
    });
});
