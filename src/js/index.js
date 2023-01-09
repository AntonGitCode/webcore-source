import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/modules/pagination/pagination.scss'
import 'swiper/modules/navigation/navigation.scss'
import { modal_close_btn } from './constans'
import { modal } from './constans'
import { tabletMedia } from './constans'
import { padMedia } from './constans'
import { deskMedia } from './constans'
import { aside_menu } from './constans'
import { screen_wrapper } from './constans'
import '../scss/style.scss'
import btn_swap_click from './btn_swap'
import btn_swap_devices_click from './btn_swap_devices'
import call_btn_click from './call_btn'
import call_btn_pad_click from './call_btn_pad'
import chat_btn_click from './chat_btn'
import { aside_open_btn_click } from './aside_open_btn'
import chat_btn_pad_click from './chat_btn_pad'
import closebtn_position from './closebtn_position'

var isInit = false
let swiper

function swiperInit() {
  if (!isInit) {
    Swiper.use([Navigation, Pagination])
    isInit = true
  }
  swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {
      319: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      768: {
        spaceBetween: 0
      }
    }
  })
}

if (window.matchMedia('(max-width: 768px)').matches) {
  if (!swiper) swiperInit()
  closebtn_position()
}
if (window.matchMedia('(min-width: 768px)').matches) {
  btn_swap_click()
  btn_swap_devices_click()
}

if (window.matchMedia('(max-width: 1440px)').matches) {
  aside_open_btn_click()
} else {
  call_btn_click()
  chat_btn_click()
}
if (
  window.matchMedia('(min-width: 768px)').matches &&
  window.matchMedia('(max-width: 1440px)').matches
) {
  call_btn_pad_click()
  chat_btn_pad_click()
}

function swiperFrozen(swiperSlider) {
  swiperSlider.slideTo(0)
  swiperSlider.params.touchRatio = 0
}

tabletMedia.addEventListener('change', (event) => {
  if (event.matches) {
    aside_open_btn_click()
    if (modal.classList.contains('modal-aside-in')) {
      modal_close_btn.classList.add('inside')
      modal.classList.add('block')
    }
    if (!swiper) {
      swiperInit()
    } else {
      swiper[0].params.touchRatio = 1
      swiper[1].params.touchRatio = 1
    }
  }
})

padMedia.addEventListener('change', (event) => {
  if (event.matches) {
    aside_open_btn_click()
    call_btn_pad_click()
    chat_btn_pad_click()
    if (swiper) {
      swiperFrozen(swiper[0])
      swiperFrozen(swiper[1])
    }

    if (modal.classList.contains('modal-aside-in')) {
      modal_close_btn.classList.remove('inside')
      modal.classList.remove('block')
    }
  }
})

deskMedia.addEventListener('change', (event) => {
  if (event.matches) {
    if (swiper) {
      swiperFrozen(swiper[0])
      swiperFrozen(swiper[1])
    }
    aside_menu.classList.remove('aside-fade-out')
    aside_menu.classList.remove('aside-fade-in')
    if (!modal.classList.contains('modal-aside-in')) {
      screen_wrapper.classList.add('hiddenItem')
    }
    if (modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.remove('inside')
    }
  }
})
