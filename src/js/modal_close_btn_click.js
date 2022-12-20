import { input_boxes } from './constans'
import { modal_close_btn } from './constans'
import { modal } from './constans'
import { screen_wrapper } from './constans'
import { aside_menu } from './constans'
import { call_btns } from './constans'

export default function modal_close_btn_click() {
  modal_close_btn.addEventListener('click', function () {
    for (let i = 0; i < call_btns.length; i++) {
      if (input_boxes[i].classList.contains('shut')) {
        input_boxes[i].classList.remove('shut')
      }
    }
    modal.classList.remove('modal-aside-in')
    modal.classList.add('modal-aside-out')

    if (aside_menu.classList.contains('aside-fade-in')) {
      if (screen_wrapper.classList.contains('z-index')) {
        screen_wrapper.classList.remove('z-index')
      }
    } else screen_wrapper.classList.toggle('shut')
  })
}
