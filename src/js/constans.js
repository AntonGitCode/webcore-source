export const tabletMedia = window.matchMedia('screen and (max-width: 768px)')
export const padMedia = window.matchMedia(
  'screen and (min-width: 768px) and (max-width: 1440px)'
)
export const deskMedia = window.matchMedia('screen and (min-width: 1440px)')
export const aside_menu = document.querySelector('.aside')
export const aside_open_btn = document.querySelector('.menu-burger')
export const aside_close_btn = document.querySelector('.header__burger')
export const screen_wrapper = document.querySelector('.screen-wrapper')
export const chat_btn = document.querySelector('.chat-btn')
export const modal = document.querySelector('.modal-aside')
export const modal_close_btn = document.querySelector('.modal-close-btn')
export const call_btn = document.querySelector('.call-btn')
export const call_btns = document.querySelectorAll('.input-box__item')
export const input_boxes = document.querySelectorAll('.input-box')
export const modal_title = document.querySelector('.form-title')
export const menu_header = document.querySelectorAll(
  '.menu-container__item > img'
)
export const chat_btn_pad = document.querySelector('.chat')
export const call_btn_pad = document.querySelector('.call')
export const cards = document.querySelectorAll('.card')
export const btn_swap = document.querySelector('.btn-swap')
export const btn_swap_devices = document.querySelector('.btn-swap__devices')
