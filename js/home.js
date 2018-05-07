const topicStream = document.querySelector('.js-topicStream')

const createDomMutationObserver = (node, callback, extraConfig = {}) => {
  (new MutationObserver(callback)).observe(node, { childList: true, ...extraConfig })
}

createDomMutationObserver(
  topicStream,
  () => {
    const featuredForMemberItems = document.querySelectorAll('.svgIcon--star')
    featuredForMemberItems.forEach(item => {
      item
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .classList
        .add('make-it-shine')
    })
  }
)