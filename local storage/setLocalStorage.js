export default function setLocalStorage(key, value) {
    const existingValue = JSON.parse(localStorage.getItem(key))
    if (existingValue) {
        const updateValue = { ...existingValue, ...value }
        localStorage.setItem(key, JSON.stringify(updateValue));
    } else {
        localStorage.setItem(key, JSON.stringify(value))
    }
}