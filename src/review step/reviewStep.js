import { displayForms } from '../script.js'
import { getCurrentForm, incrementForm } from '../state/state.js';
import { addEventListenerBackBtn } from '../utils/utils.js';


export default function reviewStep() {
   setTimeout(()=>{
       const formReview = document.getElementById('form-review');
       if (formReview) {
           formReview.addEventListener('submit', (e) => {
               e.preventDefault();
               incrementForm()
               displayForms(getCurrentForm());
            })
        }
        addEventListenerBackBtn('backBtn');
    },0)
    
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    const skillLevel = JSON.parse(localStorage.getItem('skillLevel'));
    const preference = JSON.parse(localStorage.getItem('preference'));




    return `
    <h4>Review and Confirm</h4>
    <p>please review your information to make sure everything is accurate</p>
    <form id='form-review'>
        <div class = 'review-container'>
            <div>
                <div>
                    <h5>Full Name</h5>
                    <p id='fullNameText'>${userDetails.fullName}</p>
                </div>
                <div>
                    <h5>portfolio/Github Link</h5>
                    <p>${userDetails.portfolio}</p>
                </div>
            </div>
            <div>
                <div>
                    <h5>Email Address</h5>
                    <p>${userDetails.emailAddress}</p>
                </div>
                <div>
                    <h5>Skill Level</h5>
                    <p>${skillLevel.value}</p>
                </div>
            </div>
            <div>
                <div>
                    <h5>Phone Number</h5>
                    <p>${userDetails.phoneNumber}</p>
                </div>
                <div>
                    <h5>Challenge Preference</h5>
                    <p>${preference.value}</p>
                </div>
            </div>
        </div>
        <button class = 'disabled' type='submit' id='nextBtn'>Submit</button>
        <button id='backBtn'>Go Back</button>
    </form>`
}