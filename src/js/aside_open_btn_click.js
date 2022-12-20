import { aside_menu } from './constans'
import { aside_open_btn } from './constans'
import { screen_wrapper } from './constans'
import { aside_close_btn } from './constans'

export function aside_open_btn_click() {
  aside_open_btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (aside_menu.classList.contains('aside-fade-out')) {
      aside_menu.classList.remove('aside-fade-out')
      aside_menu.classList.add('aside-fade-in')
      screen_wrapper.classList.toggle('shut')
    }
    if (
      !aside_menu.classList.contains('aside-fade-in') &&
      !aside_menu.classList.contains('aside-fade-out')
    ) {
      screen_wrapper.classList.toggle('shut')
      aside_menu.classList.add('aside-fade-in')
    }
  })
}
export function aside_close_btn_click() {
  aside_close_btn.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (aside_menu.classList.contains('aside-fade-in')) {
      aside_menu.classList.add('aside-fade-out')
      aside_menu.classList.remove('aside-fade-in')
      screen_wrapper.classList.toggle('shut')
    }
  })
}
