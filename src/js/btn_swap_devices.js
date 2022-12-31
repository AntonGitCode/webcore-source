import { btn_swap_devices } from './constans'

export default function btn_swap_devices_click() {
  btn_swap_devices.addEventListener('click', function () {
    if (btn_swap_devices.textContent == 'Спрятать') {
      let numHidden = 3
      const activeCards = document.querySelectorAll('.devices:not(.hiddenItem)')
      const last_idx = activeCards.length - 1

      for (let i = last_idx; i > last_idx - numHidden; i--) {
        activeCards[i].classList.add('card-fade-out')
        activeCards[i].addEventListener('animationend', function () {
          this.classList.remove('card-fade-out')
          this.classList.add('hiddenItem')
          btn_swap_devices.textContent = 'Показать все'
        })
      }
    } else {
      const hiddenCards = document.querySelectorAll('.devices.hiddenItem')
      for (let hiddenCard of hiddenCards) {
        hiddenCard.classList.remove('hiddenItem')
      }
      btn_swap_devices.textContent = 'Спрятать'
    }
    this.classList.toggle('btn-rotate')
  })
}
