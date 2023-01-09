import { aside_open_btn } from './constans'
import { screen_wrapper } from './constans'
import { aside_close_btn } from './constans'
import screen_wrapper_click, { unfixedScreen } from './screen_wrapper'
import call_btn_click from './call_btn'
import chat_btn_click from './chat_btn'
import { listeners } from './constans'
import { asideMenuIn, asideMenuOut } from './aside_menu'

function aside_close_btn_click() {
  if (!listeners.includes('close_burger_btn')) {
    listeners.push('close_burger_btn')
    aside_close_btn.addEventListener('click', function () {
      asideMenuOut()
      unfixedScreen()
    })
  }
}

export function aside_open_btn_click() {
  if (!listeners.includes('open_burger_btn')) {
    listeners.push('open_burger_btn')
    aside_open_btn.addEventListener('click', function () {
      call_btn_click()
      chat_btn_click()
      screen_wrapper_click()
      screen_wrapper.classList.remove('hiddenItem')
      asideMenuIn()
      aside_close_btn_click()
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    })
  }
}
