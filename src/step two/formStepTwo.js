import setLocalStorage from '../../local storage/setLocalStorage.js';
import { displayForms } from '../script.js'
import { incrementForm, getCurrentForm } from '../state/state.js'
import { addEventListenerBackBtn } from '../utils/utils.js';


export default function formStepTwo() {
    setTimeout(() => {
        const form = document.getElementById('form-two');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                incrementForm();
                displayForms(getCurrentForm());
            });
        }
        addEventListenerBackBtn('backBtn');
        form.addEventListener('click', (e) => {
            const labels = document.querySelectorAll('label')
            const selected = e.target.closest('input')
            if (selected) {
                const value = selected.value;
                setLocalStorage('skillLevel', { value })
            }
            const selectedLabel = e.target.closest('label');
            if (selectedLabel) {
                labels.forEach(libel => libel.classList.remove('selected'))
                selectedLabel.classList.add('selected')
            }
        })
    }, 0)


    return `
    <h4>skill level</h4>
    <p>please tell us about your skill level in frontend development </p>
    <form id="form-two">
      <div >
          <input type="radio" id="beginner" name="level" value="beginner" autofocus required >
          <label for="beginner">
          <img src="images/leaf.svg" alt="">
          Beginner
          </label>
          <input type="radio" id="intermediate" name="level" value="intermediate" required >
          <label for="intermediate">
          <img src="images/compass.svg" alt="">
          Intermediate
          </label>
      </div>
      <div>
          <input type="radio" id="advanced" name="level" value="advanced" required >
          <label for="advanced">
          <img src="images/rocket.svg" alt="">
          Advanced
          </label>
          <input type="radio" id="expert" name="level" value="expert" required >
          <label for="expert">
          <img src="images/cup.svg" alt="">
          Expert
          </label>
      </div>
      <button class = 'disabled' type='submit' id='nextBtn'>Next Step</button>
      <button id='backBtn'>Go Back</button>
    </form>`
}