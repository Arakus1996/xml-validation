export const getDate = () => {
  const currentDate = new Date()
  const day = currentDate.getDate() + ''
  const month = currentDate.getMonth() + ''
  const year = currentDate.getFullYear() + ''
  return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
}
