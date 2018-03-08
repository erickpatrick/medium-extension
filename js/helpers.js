const MAKE_IT_SHINE_CLASS = 'make-it-shine'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const doesUrlContainString = (searchString) => {
    return window.location.href.split(searchString).filter(item => item.trim() === '').length > 0
}

const createDomMutationObserver = (node, callback) => { 
    (new MutationObserver(callback)).observe(node, { childList: true })
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