import { getCurrentForm, decrementForm } from '../state/state.js'
import { displayForms } from '../script.js';

export function addEventListenerBackBtn(buttonId) {
    const backBtn = document.getElementById(buttonId);
    backBtn.addEventListener('click', () => {
        if (backBtn) {
            decrementForm();
            displayForms(getCurrentForm());
        }
    })
}

