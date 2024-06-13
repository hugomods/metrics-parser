class Hugo {
  version: string = ''
  extended: boolean = false
  arch: string = ''

  static parse (raw: string): Hugo {
    const h = new Hugo()
    const matches = raw.match(/hugo\s+v([\d.]+).*(\+extended)\s(\w+\/\w+)?/)
    if (matches !== null) {
      h.version = matches[1]
      h.extended = (matches.length > 1) ? matches[2] === '+extended' : false
      h.arch = matches[3] ?? 'unknown'
    }
    return h
  }
}

export default Hugo
