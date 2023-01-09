import closebtn_position from './closebtn_position'
import { chat_btn } from './constans'
import { modal_title } from './constans'
import modal_close_btn_click from './modal_close_btn'
import screen_wrapper_click from './screen_wrapper'
import { listeners } from './constans'
import { modalIn } from './modal'
export default function chat_btn_click() {
  if (!listeners.includes('chat_btn')) {
    listeners.push('chat_btn')
    chat_btn.addEventListener('click', function () {
      modal_close_btn_click()
      screen_wrapper_click()
      if (window.matchMedia('(min-width: 1440px)').matches)
        screen_wrapper_click()
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      modal_title.textContent = 'Обратная связь'
      closebtn_position()
      modalIn()
    })
  }
}
