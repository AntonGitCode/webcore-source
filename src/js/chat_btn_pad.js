import { chat_btn_pad } from './constans'
import { modal } from './constans'
import { screen_wrapper } from './constans'
import { modal_title } from './constans'
import modal_close_btn_click from './modal_close_btn'
import screen_wrapper_click from './screen_wrapper'
import { listeners } from './constans'

export default function chat_btn_pad_click() {
  if (!listeners.includes('chat_btn_pad')) {
    listeners.push('chat_btn_pad')
    chat_btn_pad.addEventListener('click', function () {
      modal_close_btn_click()
      screen_wrapper_click()

      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      modal_title.textContent = 'Обратная связь'

      modal.classList.add('modal-aside-in')
      modal.classList.remove('modal-aside-out')
      screen_wrapper.classList.remove('hiddenItem')
      screen_wrapper.classList.add('z-index')
    })
  }
}
