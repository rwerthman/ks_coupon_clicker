function startClickingCoupons()
{
    chrome.tabs.query( { active: true, currentWindow: true }, function( tabs )
    {
        chrome.tabs.executeScript( tabs[0].id, { file: "contentScript.js" } );
    });
}

document.getElementById( "couponBtn" ).addEventListener( "click", startClickingCoupons );