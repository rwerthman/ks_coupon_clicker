function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(null, { file: "jquery-3.2.1.min.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {file: "king_soopers_clicks.js"});
        });
    });
}

document.getElementById('couponBtn').addEventListener('click', injectTheScript);