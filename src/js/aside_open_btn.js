import { aside_menu } from './constans'
import { aside_open_btn } from './constans'
import { screen_wrapper } from './constans'
import { aside_close_btn } from './constans'
import screen_wrapper_click from './screen_wrapper'
import call_btn_click from './call_btn'
import chat_btn_click from './chat_btn'
import { listeners } from './constans'

function aside_close_btn_click() {
  if (!listeners.includes('close_burger_btn')) {
    listeners.push('close_burger_btn')
    aside_close_btn.addEventListener('click', function () {
      document.body.style.position = ''
      document.body.style.top = ''
      aside_menu.classList.remove('aside-fade-in')
      aside_menu.classList.add('aside-fade-out')
      screen_wrapper.classList.add('hiddenItem')
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
      aside_menu.classList.remove('aside-fade-out')
      aside_menu.classList.add('aside-fade-in')
      aside_close_btn_click()
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
    })
  }
}
