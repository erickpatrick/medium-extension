const callAdjustPage = () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "AdjustPage"}, response => {});
  });
}

chrome.webRequest.onCompleted.addListener(
  (details) => callAdjustPage(details),
  {urls: ['*://medium.com/*']},
  []
)