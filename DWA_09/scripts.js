// eslint-disable-next-line import/extensions, import/named
import { BookPreview, previewHTML, htmlElement,  displayTheme, searchFilter } from './function.js'


/* --------------------- BOOK PREView ------------------------ */

/*
 * Encapsulated abstraction of the book preview by means of a single factory function.
 *
 */

htmlElement.dataListButton.addEventListener('click', previewHTML);

htmlElement.dataListItems.addEventListener('click', BookPreview );





/* --------------------- Search ------------------------------ */

htmlElement.dataSearchForm.addEventListener('submit', searchFilter);

htmlElement.dataSearchCancel.addEventListener('click', () => {
    htmlElement.dataSearchOverlay.open = false
});;

htmlElement.dataHeaderSearch.addEventListener('click', () => {
    htmlElement.dataSearchOverlay.open = true 
    htmlElement.dataSearchTitle.focus()
});

htmlElement.dataHeaderSearch.addEventListener('click', () => {
    htmlElement.dataSettingsOverlay.open = true 
});

htmlElement.dataListClose.addEventListener('click', () => {
    htmlElement.dataListActive.open = false
});


/* -------------------- Theme and setting Display ----------------------- */

htmlElement.dataHeaderSettings.addEventListener('click', () => {
    htmlElement.dataSettingsOverlay.showModal();
})

htmlElement.dataSettingsCancel.addEventListener('click', () => {
    htmlElement.dataSearchOverlay.open = false
})

htmlElement.dataSettingsForm.addEventListener('submit', displayTheme);

htmlElement.saveElement.addEventListener('click', displayTheme);