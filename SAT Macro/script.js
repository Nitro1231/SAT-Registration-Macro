var refreshInterval = setInterval(function() {
    chrome.tabs.executeScript({
        code: 'document.querySelector("body").innerText'
    }, function(result) {
        var bodyText = result[0];
        console.log(result[0]);
        var a = bodyText.search("Unavailable");
        var b = bodyText.search("Denied");
        console.log("a:" + a + " / b:" + b)
        if (a == -1 && b == -1) {
            clearInterval(refreshInterval);
            alert("you re good to go");
        } else{
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.reload(tabs[0].id);
            });
        }
    })
},5000);