const stream = document.querySelector('.js-topicStream')
  || document.querySelector('.extreme-container8col')

const createDomMutationObserver = (node, callback, extraConfig = {}) => {
  (new MutationObserver(callback)).observe(node, { childList: true, ...extraConfig })
}

const makeItShine = (node, closest) => {
  const nodeClosest = node.closest(closest)
  nodeClosest && node.closest(closest).classList.add('make-it-shine')
}

createDomMutationObserver(
  stream,
  () => {
    const featuredForMemberItems = document.querySelectorAll('.svgIcon--star')
    featuredForMemberItems.forEach(item => {
      if (item.closest('.extremePostPreview')) {
        makeItShine(item, '.extremePostPreview')
      } else if (item.closest('.extremeHero-post')) {
        makeItShine(item, '.extremeHero-post')
      } else if (item.closest('.js-trackedPost')) {
        makeItShine(item, '.js-trackedPost')
      } else {
        makeItShine(item, '.u-backgroundColorWhite')
      }
    })
  }
)