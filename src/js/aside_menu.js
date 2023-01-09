import { aside_menu } from './constans'

export function asideMenuOut() {
  aside_menu.classList.remove('aside-fade-in')
  aside_menu.classList.add('aside-fade-out')
}

export function asideMenuIn() {
  aside_menu.classList.remove('aside-fade-out')
  aside_menu.classList.add('aside-fade-in')
}
