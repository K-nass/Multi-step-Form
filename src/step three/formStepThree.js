import { displayForms } from '../script.js'
import { incrementForm, getCurrentForm } from '../state/state.js'
import { addEventListenerBackBtn } from '../utils/utils.js';
import setLocalStorage from '../../local storage/setLocalStorage.js';

export default function formStepThree() {
    setTimeout(() => {

        const form = document.getElementById('form-three');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                incrementForm()
                displayForms(getCurrentForm());
            });
        }
        addEventListenerBackBtn('backBtn');
        form.addEventListener('click', (e) => {
            const selected = e.target.closest('input')
            if (selected) {
                const value = selected.value;
                setLocalStorage('preference', { value })
            }
            const inputContainers = document.querySelectorAll('.input-container');
            inputContainers.forEach(input => input.classList.remove('selected'));
            form.addEventListener('click', (e) => {
                const selectedValue = e.target.closest('.input-container');
                if (selectedValue) {
                    selectedValue.classList.add('selected');}
            })
        })

    }, 0)

    return `<h4>challenge preference</h4>
    <p>please tell us which frontend challenges would you like to participate in</p></p>
    <form id="form-three">
    <div>
        <div class='input-container'>
            <input type="radio" id="fundamentals" name="preference" value='HTML/CSS/JS' autofocus required>
            <span class="custom-radio"></span>
            <label for="fundamentals">HTML/CSS/JS</label>
        </div>
        <div class='input-container'>
            <input type="radio" id="framework-react" name="preference" value = 'React.Js' required>
            <span class="custom-radio"></span>
            <label for="framework-react">React.Js</label>
        </div>
    </div>
    <div>
        <div class='input-container'>
            <input type="radio" id="framework-angular" name="preference" value='Angular.Js' required>
            <span class="custom-radio"></span>
            <label for="framework-angular">Angular.Js</label>
        </div>
        <div class='input-container'>
                <input type="radio" id="framework-vue" name="preference" required value = 'Vue.Js' required>
                <span class="custom-radio"></span>
                <label for="framework-vue">Vue.Js</label>
        </div>
    </div>
    <button type='submit' id='nextBtn'>Next Step</button>
    <button id='backBtn'>Go Back</button>
    </form>`
}