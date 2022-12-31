import { screen_wrapper } from './constans'
import { input_boxes } from './constans'
import { aside_menu } from './constans'
import { modal } from './constans'

export default function screen_wrapper_click() {
  screen_wrapper.addEventListener('click', function () {
    input_boxes.forEach((item) => {
      if (item.classList.contains('hiddenItem')) {
        item.classList.remove('hiddenItem')
      }
    })
    if (window.matchMedia('(max-width: 1440px)').matches) {
      if (screen_wrapper.classList.contains('z-index')) {
        modal.classList.remove('modal-aside-in')
        modal.classList.add('modal-aside-out')
        screen_wrapper.classList.remove('z-index')
        if (!aside_menu.classList.contains('aside-fade-in')) {
          screen_wrapper.classList.add('hiddenItem')
        }
      } else {
        if (aside_menu.classList.contains('aside-fade-in')) {
          aside_menu.classList.remove('aside-fade-in')
          aside_menu.classList.add('aside-fade-out')
        }
        if (modal.classList.contains('modal-aside-in')) {
          modal.classList.remove('modal-aside-in')
          modal.classList.add('modal-aside-out')
        }
        screen_wrapper.classList.add('hiddenItem')
        document.body.style.position = ''
        document.body.style.top = ''
      }
    } else {
      modal.classList.remove('modal-aside-in')
      modal.classList.add('modal-aside-out')
      screen_wrapper.classList.remove('z-index')
      screen_wrapper.classList.add('hiddenItem')
      document.body.style.position = ''
      document.body.style.top = ''
    }
  })
}
