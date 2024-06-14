import { red, green, yellow, blue } from 'console-log-colors'

class Metrics {
  pages: number = 0
  paginatorPages: number = 0
  nonPageFiles: number = 0
  staticFiles: number = 0
  processedImages: number = 0
  aliases: number = 0
  time: number = 0

  static parse (raw: string): Metrics {
    const m = new Metrics()
    const lines = raw.split('\n')
    for (const line of lines) {
      const item = line.split('|')
      const name = item[0].trim()
      if (item.length < 2 || name === '') {
        continue
      }

      let count = 0
      for (let i = 1; i < item.length; i++) {
        count += parseInt(item[i])
      }

      switch (name) {
        case 'Pages':
          m.pages = count
          break
        case 'Paginator pages':
          m.paginatorPages = count
          break
        case 'Non-page files':
          m.nonPageFiles = count
          break
        case 'Static files':
          m.staticFiles = count
          break
        case 'Processed images':
          m.processedImages = count
          break
        case 'Aliases':
          m.aliases = count
          break
      }
    }

    const time = raw.match(/Total in (\d+) ms/)
    if (time != null) {
      m.time = parseInt(time[1])
    }

    return m
  }

  duration (): string {
    if (this.time > 3600 * 10e2) {
      return `${blue(this.time / 3600 * 10e2)} h`
    } else if (this.time > 60 * 10e2) {
      return `${blue(this.time / 60 * 10e2)} min`
    }

    return `${blue(this.time / 10e2)} s`
  }

  speed (): string {
    const totalPages = this.pages + this.paginatorPages
    const totalPagesAliases = totalPages + this.aliases
    const totalFiles = totalPagesAliases + this.staticFiles + this.nonPageFiles + this.processedImages
    return `${this.duration()} in total
${this.colorSpeed(this.time / totalPages)} ms/page (${blue(totalPages)} pages)
${this.colorSpeed(this.time / totalPagesAliases)} ms/page (${blue(totalPagesAliases)} pages, including aliases)
${this.colorSpeed(this.time / totalFiles)} ms/file (${blue(totalFiles)} files)`
  }

  private colorSpeed (speed: number): string {
    if (speed > 20) {
      return red(speed)
    } else if (speed > 10) {
      return yellow(speed)
    } else if (speed > 5) {
      return blue(speed)
    }

    return green(speed)
  }
}

export default Metrics
