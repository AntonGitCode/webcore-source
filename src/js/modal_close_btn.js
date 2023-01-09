import { input_boxes } from './constans'
import { modal_close_btn } from './constans'
import { screen_wrapper } from './constans'
import { aside_menu } from './constans'
import { listeners } from './constans'
import { modalOut } from './modal'
import { unfixedScreen } from './screen_wrapper'

export default function modal_close_btn_click() {
  if (!listeners.includes('modal')) {
    listeners.push('modal')

    modal_close_btn.addEventListener('click', function () {
      input_boxes.forEach((item) => {
        if (item.classList.contains('hiddenItem')) {
          item.classList.remove('hiddenItem')
        }
      })
      modalOut()
      screen_wrapper.classList.remove('z-index')
      if (!aside_menu.classList.contains('aside-fade-in')) unfixedScreen()
    })
  }
}
