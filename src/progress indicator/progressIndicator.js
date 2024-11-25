export default function progressIndicator(order) {
    const states = document.querySelectorAll('.state');
    if (order) {
        states.forEach(state => {
            if (state.dataset.order == order) {
                state.classList.add('active');
            }
        })
    }
    return `
        <span data-order="1" class="state">1</span>
        <span data-order="2" class="state">2</span>
        <span data-order="3" class="state">3</span>
        <span data-order="4" class="state">4</span>`
}