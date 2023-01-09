import { modal } from './constans'
import { screen_wrapper } from './constans'

export function modalIn() {
  modal.classList.add('modal-aside-in')
  modal.classList.remove('modal-aside-out')
  screen_wrapper.classList.remove('hiddenItem')
  screen_wrapper.classList.add('z-index')
}

export function modalOut() {
  modal.classList.remove('modal-aside-in')
  modal.classList.add('modal-aside-out')
}
