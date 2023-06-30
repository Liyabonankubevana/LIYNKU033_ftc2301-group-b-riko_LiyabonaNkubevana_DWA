export const htmlElement = {
    dataListItems : document.querySelector('[data-list-items]'),
    dataListMessage : document.querySelector('[data-list-message]'),
    dataListButton : document.querySelector('[data-list-button]'),
    dataListActive : document.querySelector('[data-list-active]'),
    dataListBlur : document.querySelector('[data-list-blur]'),
    dataListImage : document.querySelector('[data-list-image]'),
    dataListTitle : document.querySelector('[data-list-title]'),
    dataListSubtitle : document.querySelector('[data-list-subtitle]'),
    dataListDescription : document.querySelector('[data-list-description]'),
    dataListClose : document.querySelector('[data-list-close]'),
    
    //  Dom elements for the search 
    dataSearchOverlay : document.querySelector('[data-search-overlay]'),
    datasearchButton : document.querySelector("[data-search-button]"),
    dataSearchForm : document.querySelector('[data-search-form]'),
    dataSearchTitle : document.querySelector('[data-search-title]'),
    dataSearchGenres : document.querySelector('[data-search-genres]'),
    dataSearchAuthors : document.querySelector('[data-search-authors]'),
    dataSearchCancel : document.querySelector('[data-search-cancel]'),
    dataHeaderSearch : document.querySelector('[data-header-search]'),
    
    // DOM Elements for the theme /settings
    dataSettingsOverlay : document.querySelector('[data-settings-overlay]'),
    dataSettingsForm : document.querySelector('[data-settings-form]'),
    dataHeaderSettings : document.querySelector('[data-header-settings]'),
    dataSettingsCancel : document.querySelector('[data-settings-cancel]'),
    saveElement : document.querySelector('[data-settings-save]'),
    dataSettingsTheme : document.querySelector('[data-settings-theme]')
}    
    // @ts-check
export const previewHTML = () => {
    const fragment = document.createDocumentFragment()

    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        fragment.appendChild(element)
    }

    htmlElement.dataListItems.appendChild(fragment)
    page += 1
};

export const BookPreview = (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    
    if (active) {
        htmlElement.dataListActive.open = true
        htmlElement.dataListBlur.src = active.image
        htmlElement.dataListImage.src = active.image
        htmlElement.dataListTitle.innerText = active.title
        htmlElement.dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        htmlElement.dataListDescription.innerText = active.description
    }
}
