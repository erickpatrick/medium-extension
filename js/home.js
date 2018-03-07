if (doesUrlContainString(`https://medium.com`) && window.location.href === 'https://medium.com/') {
    const extremeContainer = document.querySelector('.extreme-container12col')
    const extremeAdaptiveSection = document.querySelectorAll('.extremeAdaptiveSection')

    // make single column content
    extremeContainer.classList.remove('u-flex')

    // removes fixing of sidebar items
    extremeAdaptiveSection.forEach((item, index) => {
        item.classList.remove('js-sidebar')
        delete item.dataset.scroll
    });

    // moves sidebar items to top
    const sidebarFragment = document.createDocumentFragment()
    sidebarFragment.appendChild(document.querySelector('.extreme-container4col'))
    extremeContainer.insertBefore(sidebarFragment, extremeContainer.firstChild)

    createDomMutationObserver(
        document.querySelector('.extreme-container8col'),
        () => {
            // removes featuredForMemberItems
            const featuredForMemberItems = document.querySelectorAll('.svgIcon--star')
            featuredForMemberItems.forEach(item => {
                const parentNode = item.closest('.streamItem').parentNode

                if (parentNode) {
                    parentNode.removeChild(item.closest('.streamItem'))
                }
            })

            // removes heading titles that the next element is hidden
            const sectionTitles = document.querySelectorAll('.streamItem--heading')
            sectionTitles.forEach(section => {
                if (!section.nextElementSibling || section.nextElementSibling.classList.contains('streamItem--heading')) {
                    section.parentNode.removeChild(section)
                }
            })
        }
    )
}