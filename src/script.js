import formStepOne from "./step one/formStepOne.js"
import formStepTwo from "./step two/formStepTwo.js";
import formStepThree from "./step three/formStepThree.js";
import reviewStep from "./review step/reviewStep.js";
import finalStep from "./final step/finalStep.js"
import progressIndicator from "./progress indicator/progressIndicator.js";




const progressContainer = document.getElementById('progressContainer')
progressContainer.innerHTML = progressIndicator()



const main = document.querySelector('main');
export function displayForms(currentForm) {
    switch (currentForm) {
        case 1: main.innerHTML = formStepOne();
            break;
        case 2: main.innerHTML = formStepTwo();
            break;
        case 3: main.innerHTML = formStepThree();
            break;
        case 4: main.innerHTML = reviewStep();
            break;
        case 5: main.innerHTML = finalStep();
            break;
        default: main.innerHTML = formStepOne();
            break;
    }
}

displayForms(1);
