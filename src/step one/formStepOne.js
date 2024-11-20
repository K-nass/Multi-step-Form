import { displayForms } from '../script.js'
import { incrementForm, getCurrentForm } from '../state/state.js'
import setLocalStorage from '../../local storage/setLocalStorage.js';


export default function formStepOne() {
    setTimeout(() => {
        const form = document.getElementById('form-one');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const stepOneValues = {
                    fullName: document.getElementById('full-name').value,
                    emailAddress: document.getElementById('email-address').value,
                    phoneNumber: document.getElementById('phone-number').value,
                    portfolio: document.getElementById('portfolio-github').value,
                }

                const { fullName, emailAddress, phoneNumber, portfolio } = stepOneValues;
                setLocalStorage("userDetails", { fullName, emailAddress, phoneNumber, portfolio });
                incrementForm();
                displayForms(getCurrentForm());
            });
        }
    }, 0)


    return `
        <h4>personal information</h4>
        <p>please provide your personal details so we can get to know you better</p>
    <form id='form-one'>
        <div>
            <label for="full-name">Full Name</label>
            <input type="text" name="fullName" id="full-name" autofocus required>
            <label for="phone-number">Phone Number</label>
            <input type="text" name="phone" id="phone-number" required>
        </div>
        <div>
            <label for="email-address">Email Address</label>
            <input type="text" name="email" id="email-address" required>
            <label for="portfolio-github">portfolio/Github Link</label>
            <input type="text" id='portfolio-github' required>
        </div>
        <button class='disabled' type='submit' id='nextBtn'>Next Step</button>
    </form>`
}





