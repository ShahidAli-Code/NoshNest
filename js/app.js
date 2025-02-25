const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

const movingCursor = getElement('.moving-cursor');
const heroHome = getElement(".hero-home")
heroHome.addEventListener('mousemove', (e) => {
  movingCursor.style.left = e.x + 'px';
  movingCursor.style.top = e.y + 'px';
}
)


