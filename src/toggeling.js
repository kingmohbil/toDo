// this function removes the active class so that the overlay
// the close btn and the overlay can close it
export function removeActive(element) {
  element.classList.remove('active')
}
//this function add the active class to the elments
export function addActive(element) {
  element.classList.add('active')
}
