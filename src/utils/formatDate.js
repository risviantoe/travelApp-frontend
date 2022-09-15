export default date => {
  const d = new Date(date)
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })

  const [{ value: mon }, , { value: day }] = dtf.formatToParts(d)

  return `${day} ${mon}`
}