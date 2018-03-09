console.log('works')
const requests = {previous: ''}

const splitString = (stringToSplit, splitter) => stringToSplit.split(splitter).filter(item => !!item)
const containsSubString = (mainString, subString) => splitString(mainString, '/').includes(subString)
const getPathUrl = (url) => splitString(url, 'https://medium.com/').pop()

const isHomePage = (path) => {
  requests.previous = path

  if (containsSubString(path, 'batch')) {
    console.log('batch')
  }
}

const isTopic = (path) => false
const isStream = (path) => false
const isBrowse = (path) => false
const isError = (path) => false

const callAdjustPage = (details) => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "AdjustPage"}, response => {});
  });
}

chrome.webRequest.onCompleted.addListener(
  (details) => callAdjustPage(details),
  {urls: ['*://medium.com/*']},
  []
)