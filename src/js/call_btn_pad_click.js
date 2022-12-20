import { modal } from './constans'
import { screen_wrapper } from './constans'
import { call_btn_pad } from './constans'
import { modal_title } from './constans'
import { call_btns } from './constans'

export default function call_btn_pad_click() {
  call_btn_pad.addEventListener('click', function () {
    modal_title.textContent = 'Заказать звонок'

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
      let PNode = call_btns[i].parentNode
      if (!(call_btns[i].type == 'tel')) {
        PNode.classList.toggle('shut')
      }
    }
  })
}
