import { modal } from './constans'
import { modal_close_btn } from './constans'

export default function closebtn_position() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    if (!modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.add('inside')
      modal.classList.add('block')
    }
  }
}
