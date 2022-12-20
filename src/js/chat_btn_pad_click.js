import { chat_btn_pad } from './constans'
import { modal } from './constans'
import { screen_wrapper } from './constans'
import { input_boxes } from './constans'
import { modal_title } from './constans'
import { call_btns } from './constans'

export default function chat_btn_pad_click() {
  chat_btn_pad.addEventListener('click', function () {
    modal_title.textContent = 'Обратная связь'

    if (modal.classList.contains('modal-aside-out')) {
      modal.classList.remove('modal-aside-out')
      modal.classList.add('modal-aside-in')
    }

    if (
      !(
        modal.classList.contains('modal-aside-out') ||
        modal.classList.contains('modal-aside-in')
      )
    ) {
      modal.classList.add('modal-aside-in')
    }
    if (screen_wrapper.classList.contains('shut')) {
      screen_wrapper.classList.toggle('shut')
    }
    for (let i = 0; i < call_btns.length; i++) {
      if (input_boxes[i].classList.contains('shut')) {
        input_boxes[i].classList.remove('shut')
      }
    }
  })
}
