console.log('hola')

const notificationsNumber = document.querySelector('#notifications-number')
const markAll = document.querySelector('#mark-all')
const posts = document.querySelectorAll('.post')

posts.forEach((post) => {
  post.addEventListener('click', () => {
    post.querySelector('.status').classList.remove('not-read')
    updateNotifications()
  })
})

markAll.addEventListener('click', () => {
  const notReadElements = document.querySelectorAll('.not-read')
  notReadElements.forEach((notReadElement) => {
    notReadElement.classList.remove('not-read')
  })
  updateNotifications()
})

const updateNotifications = () => {
  const notReadElementsActual = document.querySelectorAll('.not-read')
  let notifications = notReadElementsActual.length
  notificationsNumber.innerText = notifications
}
