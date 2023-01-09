import { modal } from './constans'
import { screen_wrapper } from './constans'
import { call_btn_pad } from './constans'
import { modal_title } from './constans'
import { call_btns } from './constans'
import modal_close_btn_click from './modal_close_btn'
import screen_wrapper_click from './screen_wrapper'
import { listeners } from './constans'
export default function call_btn_pad_click() {
  if (!listeners.includes('call_btn_pad')) {
    listeners.push('call_btn_pad')
    call_btn_pad.addEventListener('click', function () {
      modal_close_btn_click()
      screen_wrapper_click()

      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      modal_title.textContent = 'Заказать звонок'

      modal.classList.remove('modal-aside-out')
      modal.classList.add('modal-aside-in')
      screen_wrapper.classList.remove('hiddenItem')
      screen_wrapper.classList.add('z-index')
      call_btns.forEach((item) => {
        let PNode = item.parentNode
        if (!(item.type == 'tel')) {
          PNode.classList.toggle('hiddenItem')
        }
      })
    })
  }
}
