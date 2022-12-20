import closebtn_position from './closebtn_position'
import { modal } from './constans'
import { screen_wrapper } from './constans'
import { chat_btn } from './constans'
import { call_btns } from './constans'
import { input_boxes } from './constans'
import { modal_title } from './constans'

export default function chat_btn_click() {
  chat_btn.addEventListener('click', function () {
    for (let i = 0; i < call_btns.length; i++) {
      if (input_boxes[i].classList.contains('shut')) {
        input_boxes[i].classList.remove('shut')
      }
    }

    modal_title.textContent = 'Обратная связь'
    closebtn_position()

    if (
      !(
        modal.classList.contains('modal-aside-out') ||
        modal.classList.contains('modal-aside-in')
      )
    ) {
      modal.classList.add('modal-aside-in')
    }
    if (modal.classList.contains('modal-aside-out')) {
      modal.classList.remove('modal-aside-out')
      modal.classList.add('modal-aside-in')
    }

    if (screen_wrapper.classList.contains('shut')) {
      screen_wrapper.classList.toggle('shut')
    }

    if (window.innerWidth < 1440) {
      screen_wrapper.classList.add('z-index')
    }
  })
}
