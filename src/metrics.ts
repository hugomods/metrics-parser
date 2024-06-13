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

  speed (): string {
    const totalPages = this.pages + this.paginatorPages
    const pagesWithAliases = totalPages + this.aliases
    return `${this.colorSpeed(this.time / totalPages)} ms/page
${this.colorSpeed(this.time / pagesWithAliases)} ms/page (including aliases)
${this.colorSpeed(this.time / (pagesWithAliases + this.staticFiles + this.nonPageFiles + this.processedImages))} ms/file (all pages and files)`
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
