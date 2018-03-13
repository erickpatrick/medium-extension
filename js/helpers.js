const MAKE_IT_SHINE_CLASS = 'make-it-shine'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const EXTENSION_CSS_CLASSES = ['mext--home', 'mext--topic']
const LAST_EVENT_TARGET_CLASS_NAME = 'buttonSet buttonSet--wide'

const splitCurrentUrl = () => window.location.href.split('/').filter(item => !!item)

const isHomePage = () => splitCurrentUrl().length === 2

const doesUrlContainString = (searchString) => {
    return splitCurrentUrl().includes(searchString)
}

const createDomMutationObserver = (node, callback, extraConfig = {}) => { 
    (new MutationObserver(callback)).observe(node, { childList: true, ...extraConfig })
}

const addClassToElement = (element, className) => {
    element.classList.add(className)
}

const reorderBoxes = () => {
    convertHalfBoxesIntoTallThirdsBoxes()
    convertSmallBoxesIntoTallThirdsBoxes()
}

const convertHalfBoxesIntoTallThirdsBoxes = (halfBoxes) => {
}

const convertSmallBoxesIntoTallThirdsBoxes = () => {
    document.querySelectorAll('.u-size4of12 > .u-height260').forEach(box => {
        //changes box size itself
        box.classList.remove('u-height260')
        box.classList.add('u-height540')

        // changes cover image size
        box.firstElementChild.classList.remove('u-height100')
        box.firstElementChild.classList.add('u-height280')

        // changes content preview box size
        box.lastElementChild.classList.remove('u-height160')
        box.lastElementChild.classList.add('u-height260')
    })
}

const removeExtensionClasses = () => {
    const body = document.querySelector('body')
    EXTENSION_CSS_CLASSES.forEach(extensionClass => {
        body.classList.contains(extensionClass) && body.classList.remove(extensionClass)
    })
}

const adjustPage = () => {
    removeExtensionClasses()

    if (isHomePage()) {
        window.dispatchEvent(new CustomEvent(`mext--home-event`))
    }

    if (doesUrlContainString(`topic`)) {
        window.dispatchEvent(new CustomEvent(`mext--topic-event`))
    }
}

const filterTargetEvent = mutation => mutation.target.className === LAST_EVENT_TARGET_CLASS_NAME

const adjustPageAfterLastChange = (mutationList) => {
  mutationList.filter(filterTargetEvent).length && adjustPage()
}