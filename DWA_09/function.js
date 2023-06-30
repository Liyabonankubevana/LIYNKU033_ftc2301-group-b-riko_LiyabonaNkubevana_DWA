
// eslint-disable-next-line import/extensions
import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

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

const PAGE = 0;
const RANGE = [0, 36]; 
const matches = books; 

/* ------------------- Book Preview  -------------------- */

export const createPreviewElement = (book) => {
    const { author: authorId, id, image, title } = book;
  
    // create a new button element
    const preview = document.createElement("button");
    preview.classList = "preview";
    preview.setAttribute("data-preview", id);
    preview.innerHTML = `
          <img
              class="preview__image"
              src="${image}"
          />
          
          <div class="preview__info">
              <h3 class="preview__title">${title}</h3>
              <div class="preview__author">${authors[authorId]}</div>
          </div>
      `;
  
    return preview;
  };
  
  // Create a function that takes an array of books and a range of indices and returns a document fragment
  const createPreviewsFragment = ( start, end ) => {
    const fragment = document.createDocumentFragment();
     // Loop over the specified range of books
    for (let i = start; i < end; i++) {
        // Get the current book object
      const book = books[i];
      // If the book object exists, create a preview button element and add it to the document fragment
      if (book) {
        const preview = createPreviewElement(book);
        fragment.appendChild(preview);
      }
    }
    return fragment;
  };

  // function that renders a range of book previews based on the current page
  const renderPreviews = (page, increment) => {
    const start = RANGE[0] + page * BOOKS_PER_PAGE;
    const end = start + BOOKS_PER_PAGE + increment; 
    const fragment = createPreviewsFragment(matches, start, end);
    htmlElement.dataListItems.innerHTML = "";
    htmlElement.dataListItems.appendChild(fragment);
    htmlElement.dataListButton.innerHTML = /* html */
    `<span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `
  };

const showMore = () => {
    renderPreviews(PAGE, 36);
};

htmlElement.dataListButton.addEventListener('click', showMore);

renderPreviews(PAGE, 0); 



// let page = 1;
// let matches = books
    
// export const previewHTML = () => {
//     const fragment = document.createDocumentFragment()
        
//     for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)
    
//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }

//     htmlElement.dataListItems.appendChild(fragment)
//     page += 1
// };

// export const BookPreview = (event) => {
//     const pathArray = Array.from(event.path || event.composedPath())
//     let active = null

//     for (const node of pathArray) {
//         if (active) break

//         if (node?.dataset?.preview) {
//             let result = null
    
//             for (const singleBook of books) {
//                 if (result) break;
//                 if (singleBook.id === node?.dataset?.preview) result = singleBook
//             } 
        
//             active = result
//         }
//     }
    
//     if (active) {
//         htmlElement.dataListActive.open = true
//         htmlElement.dataListBlur.src = active.image
//         htmlElement.dataListImage.src = active.image
//         htmlElement.dataListTitle.innerText = active.title
//         htmlElement.dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
//         htmlElement.dataListDescription.innerText = active.description
//     }
// }


// const genreHtml = document.createDocumentFragment()
// const firstGenreElement = document.createElement('option')
// firstGenreElement.value = 'any'
// firstGenreElement.innerText = 'All Genres'
// genreHtml.appendChild(firstGenreElement)

// for (const [id, name] of Object.entries(genres)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     genreHtml.appendChild(element)
// }

// htmlElement.dataSearchGenres.appendChild(genreHtml)

// const authorsHtml = document.createDocumentFragment()
// const firstAuthorElement = document.createElement('option')
// firstAuthorElement.value = 'any'
// firstAuthorElement.innerText = 'All Authors'
// authorsHtml.appendChild(firstAuthorElement)

// for (const [id, name] of Object.entries(authors)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     authorsHtml.appendChild(element)
// }

// htmlElement.dataSearchAuthors.appendChild(authorsHtml)

// htmlElement.dataListButton.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
// htmlElement.dataListButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0

// htmlElement.dataListButton.innerHTML = `
//     <span>Show more</span>
//     <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
// `




// /* ----------------------- Search  --------------------------- */

// export const searchFilter = (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     const result = []

//     for (const book of books) {
//         let genreMatch = filters.genre === 'any'

//         for (const singleGenre of book.genres) {
//             if (genreMatch) break;
//             if (singleGenre === filters.genre) { genreMatch = true }
//         }

//         if (
//             (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
//             (filters.author === 'any' || book.author === filters.author) && 
//             genreMatch
//         ) {
//             result.push(book)
//         }
//     }

//     page = 1;
//     matches = result

//     if (result.length < 1) {
//         htmlElement.dataListMessage.classList.add('list__message_show')
//     } else {
//         htmlElement.dataListMessage.classList.remove('list__message_show')
//     }

//     htmlElement.dataListItems.innerHTML = ''
//     const newItems = document.createDocumentFragment()

//     for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
//         const element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)
    
//         element.innerHTML = `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[author]}</div>
//             </div>
//         `

//         newItems.appendChild(element)
//     }

//     htmlElement.dataListItems.appendChild(newItems)
//     htmlElement.dataListButton.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

//     htmlElement.dataListButton.innerHTML = `
//         <span>Show more</span>
//         <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
//     `

//     window.scrollTo({top: 0, behavior: 'smooth'});
//     htmlElement.dataSearchOverlay.open = false
// };


/* ----------------------- Theme ----------------------------- */

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     htmlElement.dataSettingsTheme.value = 'night'
//     document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//     document.documentElement.style.setProperty('--color-light', '10, 10, 20');
// } else {
//     htmlElement.dataSettingsTheme.value = 'day'
//     document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//     document.documentElement.style.setProperty('--color-light', '255, 255, 255');
// }
// // const dataSettingsTheme = { value: 'day' };
// // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
// //   dataSettingsTheme.value = 'night';
// // }

// export const displayTheme =  (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     const { theme } = Object.fromEntries(formData)

//     if (theme === 'night') {
//         document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
//         document.documentElement.style.setProperty('--color-light', '10, 10, 20');
//     } else {
//         document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
//         document.documentElement.style.setProperty('--color-light', '255, 255, 255');
//     }
    
//     htmlElement.dataSettingsOverlay.open = false
// };

// export const saveButton = () => {
//     const theme = displayTheme;
//     if (theme === 'night') {
//       document.documentElement.setAttribute('data-theme', 'night');
//     } else if (theme === 'day') {
//       document.documentElement.setAttribute('data-theme', 'day');
//     }
//   };

// Set the default setting to day (initializes an object), if user's has a perference for dark color and device supports it, theme is set to night.

const dataSettingsTheme = { value: 'day' };

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dataSettingsTheme.value = 'night';
}

const css = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

export const displayTheme = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const storeForm = Object.fromEntries(formData);
  const selectedTheme = storeForm.theme;

  if (selectedTheme === 'night') {
    document.documentElement.style.setProperty('--color-dark', css[selectedTheme].dark);
    document.documentElement.style.setProperty('--color-light', css[selectedTheme].light);
  } else if (selectedTheme === 'day') {
    document.documentElement.style.setProperty('--color-dark', css[selectedTheme].dark);
    document.documentElement.style.setProperty('--color-light', css[selectedTheme].light);
  }

  return selectedTheme;
};
