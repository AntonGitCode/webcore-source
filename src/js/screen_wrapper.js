import { asideMenuOut } from './aside_menu'
import { screen_wrapper } from './constans'
import { input_boxes } from './constans'
import { aside_menu } from './constans'
import { modal } from './constans'
import { listeners } from './constans'
import { modalOut } from './modal'

export function unfixedScreen() {
  screen_wrapper.classList.add('hiddenItem')
  document.body.style.position = ''
  document.body.style.top = ''
}

export default function screen_wrapper_click() {
  console.log(listeners)
  if (!listeners.includes('screen_wrapper')) {
    listeners.push('screen_wrapper')
    screen_wrapper.addEventListener('click', function () {
      input_boxes.forEach((item) => {
        if (item.classList.contains('hiddenItem'))
          item.classList.remove('hiddenItem')
      })

      if (window.matchMedia('(max-width: 1440px)').matches) {
        if (screen_wrapper.classList.contains('z-index')) {
          modalOut()
          screen_wrapper.classList.remove('z-index')
          if (!aside_menu.classList.contains('aside-fade-in')) {
            unfixedScreen()
            screen_wrapper.classList.add('hiddenItem')
          }
        } else {
          screen_wrapper.classList.add('hiddenItem')
          asideMenuOut()
          unfixedScreen()
        }
      } else {
        screen_wrapper.classList.remove('z-index')
        modalOut()
        unfixedScreen()
      }
    })
  }
}
