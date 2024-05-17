export const validation = files => {
  const xsd = []
  const xml = []
  const noValidFiles = []

  files.forEach(file => {
    if (file.name.endsWith('.xml')) {
      xml.push(file.name)
    } else if (file.name.endsWith('.xsd')) {
      xsd.push(file.name)
    } else {
      noValidFiles.push(file.name)
    }
  })

  if (noValidFiles.length) {
    return { error: 'notValidType', payload: noValidFiles.join(', ') }
  }
  if (!xsd.length) {
    return { error: 'notFoundXSD' }
  }
  if (xsd.length > 1) {
    return { error: 'tooManyXSD', payload: xsd.length }
  }
  if (xml.length > 10) {
    return { error: 'tooManyXML', payload: xml.length }
  }
  if (!xml.length) {
    return { error: 'notFoundXML' }
  }
}
