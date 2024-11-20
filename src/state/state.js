export let currentForm = 1
export function incrementForm() {
    currentForm += 1;
}
export function getCurrentForm() {
    return currentForm;
}
export function setCurrentForm(value) {
    currentForm = value;
}
export function decrementForm() {
    currentForm -= 1;
}