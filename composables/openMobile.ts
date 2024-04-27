export const openMobile = () => {
  const url = window.location.href
  openWindow(url, 350, 568, 'media')
}

function openWindow(url: string, width: number, height: number, name: string) {
  window.open(url, name, 'width=' + width + ',height=' + height)
}