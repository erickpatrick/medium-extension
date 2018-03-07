

if (doesUrlContainString(`https://medium.com/topic`)) {
    const streamItems = document.querySelectorAll('.streamItem');
    streamItems.forEach((streamItem, index) => {
        if (index > 0) {
            streamItems.item(index).querySelector('section').innerHTML += streamItem.querySelector('section').innerHTML
            streamItems.item(index).parentNode.removeChild(streamItem)
        }
    })

    createDomMutationObserver(
        document.querySelector('.js-topicStream'),
        () => {
            // paint member only items in gold to not remove them and adjust the grid
            const featuredForMemberItems = document.querySelectorAll('.svgIcon--star')
            featuredForMemberItems.forEach(item => {
                item.closest('.u-sizeFullWidth.u-xs-heightAuto.u-borderBox').classList.add(MAKE_IT_SHINE_CLASS)
            })

            // move all streamItem contents to only one place
            const streamItems = document.querySelectorAll('.streamItem');
            const currentStreamItemCount = streamItems.length
            const lastStreamItemAdded = streamItems.item(currentStreamItemCount - 1)            

            if (currentStreamItemCount > 1) {
                const content = lastStreamItemAdded.querySelector('section').innerHTML

                streamItems.item(0).querySelector('section').innerHTML += content
                //reorderBoxes()
                lastStreamItemAdded.parentNode.removeChild(lastStreamItemAdded)
            }
        }
    )
}