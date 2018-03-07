const MAKE_IT_SHINE_CLASS = 'make-it-shine'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const doesUrlContainString = (searchString) => {
    return window.location.href.split(searchString).filter(item => item.trim() === '').length > 0
}

const createDomMutationObserver = (node, callback) => { 
    (new MutationObserver(callback)).observe(node, { childList: true })
}