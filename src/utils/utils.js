export function getFileName(originalName) {
  const re = /(?:\.([^.]+))?$/
  return 'IMG-' + getFormattedTime() + '.' + re.exec(originalName)[1]
}

export function getFormattedTime() {
  var today = new Date()
  var y = today.getFullYear()
  // JavaScript months are 0-based.
  var m = today.getMonth() + 1
  var d = today.getDate()
  var h = today.getHours()
  var mi = today.getMinutes()
  var s = today.getSeconds()
  return y + '-' + m + '-' + d + '-' + h + '-' + mi + '-' + s
}
