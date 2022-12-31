import closebtn_position from './closebtn_position'
import { modal } from './constans'
import { screen_wrapper } from './constans'
import { chat_btn } from './constans'
import { modal_title } from './constans'
import modal_close_btn_click from './modal_close_btn'
import screen_wrapper_click from './screen_wrapper'

export default function chat_btn_click() {
  chat_btn.addEventListener('click', function () {
    modal_close_btn_click()
    screen_wrapper_click()

    if (window.matchMedia('(min-width: 1440px)').matches) {
      screen_wrapper_click()
    }

    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`

    modal_title.textContent = 'Обратная связь'
    closebtn_position()
    modal.classList.add('modal-aside-in')

    if (modal.classList.contains('modal-aside-out')) {
      modal.classList.remove('modal-aside-out')
    }

    screen_wrapper.classList.remove('hiddenItem')
    screen_wrapper.classList.add('z-index')
  })
}
