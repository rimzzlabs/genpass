import { getOne } from '@/utils/selector'

const toast = (element, message, type = 'danger') => {
  element.innerHTML = `<div id='toast-centered' class="toast ${type} mt-2 md:mt-4 mx-auto">${message}</div>`

  setTimeout(() => {
    const toast = getOne('#toast-centered')
    toast.classList.add('animate-fadeout')
    setTimeout(() => {
      toast.remove()
    }, 2000)
  }, 1000)
}

export default toast
