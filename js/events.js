window.addEventListener('load', () => {
  adjustPage()
}, false)

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
   if (msg.action == 'AdjustPage') {
      adjustPage()
   }
});