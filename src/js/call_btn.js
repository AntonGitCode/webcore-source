import { call_btn } from './constans'
import { call_btns } from './constans'
import closebtn_position from './closebtn_position'
import { modal_title } from './constans'
import modal_close_btn_click from './modal_close_btn'
import screen_wrapper_click from './screen_wrapper'
import { listeners } from './constans'
import { modalIn } from './modal'

export default function call_btn_click() {
  if (!listeners.includes('call_btn')) {
    listeners.push('call_btn')
    call_btn.addEventListener('click', function () {
      modal_close_btn_click()
      if (window.matchMedia('(min-width: 1440px)').matches) {
        screen_wrapper_click()
      }
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      modal_title.textContent = 'Заказать звонок'
      closebtn_position()
      modalIn()

      call_btns.forEach((item) => {
        let PNode = item.parentNode
        if (!(item.type == 'tel')) {
          PNode.classList.toggle('hiddenItem')
        }
      })
    })
  }
}
