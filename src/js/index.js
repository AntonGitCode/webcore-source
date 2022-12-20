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
import btn_swap_click from './btn_swap_click'
import call_btn_click from './call_btn_click'
import call_btn_pad_click from './call_btn_pad_click'
import chat_btn_click from './chat_btn_click'

import { aside_open_btn_click } from './aside_open_btn_click'
import chat_btn_pad_click from './chat_btn_pad_click'
import modal_close_btn_click from './modal_close_btn_click'
import screen_wrapper_click from './screen_wrapper_click'
import { aside_close_btn_click } from './aside_open_btn_click'
import closebtn_position from './closebtn_position'

var isInit = false
let swiper

// if (window.innerWidth <= 768) {
//   if (!modal_close_btn.classList.contains('inside')) {
//     modal_close_btn.classList.add('inside')
//     if (!modal.classList.contains('block')) {
//       modal.classList.add('block')
//     }
//   }
// } else {
//   if (modal_close_btn.classList.contains('inside')) {
//     modal_close_btn.classList.remove('inside')
//   }
//   if (modal.classList.contains('block')) {
//     modal.classList.remove('block')
//   }
// }

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

if (window.innerWidth <= 768 && typeof swiper === 'undefined') {
  swiperInit()
}

aside_open_btn_click()
aside_close_btn_click()

btn_swap_click()

call_btn_click()
call_btn_pad_click()

chat_btn_click()
chat_btn_pad_click()

modal_close_btn_click()
screen_wrapper_click()
closebtn_position()

tabletMedia.addEventListener('change', (event) => {
  if (event.matches) {
    // if (!modal_close_btn.classList.contains('inside')) {
    //   modal_close_btn.classList.add('inside')
    //   if (!modal.classList.contains('block')) {
    //     modal.classList.add('block')
    //   }
    // }

    if (modal.classList.contains('modal-aside-in')) {
      modal_close_btn.classList.add('inside')
      if (!modal.classList.contains('block')) {
        modal.classList.add('block')
      }
    }

    if (typeof swiper === 'undefined') {
      swiperInit()
    } else {
      swiper[0].params.touchRatio = 1
      swiper[1].params.touchRatio = 1
    }
  }
})

padMedia.addEventListener('change', (event) => {
  if (event.matches) {
    if (!(typeof swiper === 'undefined')) {
      swiper[0].slideTo(0)
      swiper[1].slideTo(0)
      swiper[0].params.touchRatio = 0
      swiper[1].params.touchRatio = 0
    }

    if (modal.classList.contains('modal-aside-in')) {
      if (modal_close_btn.classList.contains('inside')) {
        modal_close_btn.classList.remove('inside')
      }
      if (modal.classList.contains('block')) {
        modal.classList.remove('block')
      }
    }
  }
})

deskMedia.addEventListener('change', (event) => {
  if (event.matches) {
    if (aside_menu.classList.contains('aside-fade-out')) {
      aside_menu.classList.remove('aside-fade-out')
    }
    if (aside_menu.classList.contains('aside-fade-in')) {
      aside_menu.classList.remove('aside-fade-in')
    }
    if (
      !screen_wrapper.classList.contains('shut') &&
      !modal.classList.contains('modal-aside-in')
    ) {
      screen_wrapper.classList.add('shut')
    }
    if (!screen_wrapper.classList.contains('z-index')) {
      screen_wrapper.classList.remove('z-index')
    }
    if (modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.remove('inside')
    }
  }
})
