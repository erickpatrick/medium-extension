window.addEventListener('mext--topic-event', () => {
  if (doesUrlContainString('topic')) {
    addClassToElement(document.querySelector('body'), 'mext--topic')
    convertSmallBoxesIntoTallThirdsBoxes()

    // home small links from within content
    document.querySelectorAll('.streamItem--topicDiveDeeper').forEach(item => item.remove())

    let content = ''
    const streamItems = document.querySelectorAll('.streamItem')
    streamItems.forEach((streamItem, index) => {
      streamItem.querySelectorAll('section > header').forEach(header => header.remove())
      streamItem.querySelectorAll('section > div').forEach(item => item.classList.add('u-size4of12'))

      // protect against hidden/duplicated from being displayed
      const localContent = streamItem.querySelector('section').innerHTML
      if (content.indexOf(localContent) === -1) {
        content += streamItem.querySelector('section').innerHTML
      }
      index && streamItem.querySelector('section').remove()
    })
    streamItems.item(0).querySelector('section').innerHTML = content

    // removes any header in order to properly use `:nth-child` in CSS
    const topicStream = document.querySelector('.js-topicStream')

    createDomMutationObserver(
      topicStream,
      () => {
        // paint member only items in gold to not remove them and adjust the grid
        const featuredForMemberItems = document.querySelectorAll('.svgIcon--star')
        featuredForMemberItems.forEach(item => {
          item.closest('.u-sizeFullWidth.u-xs-heightAuto.u-borderBox').classList.add(MAKE_IT_SHINE_CLASS)
        })

        // move all streamItem contents to only one place
        const streamItems = document.querySelectorAll('.streamItem')
        const currentStreamItemCount = streamItems.length
        const lastStreamItemAdded = streamItems.item(currentStreamItemCount - 1)

        if (currentStreamItemCount > 1) {
          const content = lastStreamItemAdded.querySelector('section').innerHTML

          streamItems.item(0).querySelector('section').innerHTML += content
          reorderBoxes()
          lastStreamItemAdded.parentNode.removeChild(lastStreamItemAdded)
        }
      }
    )
  }
})