class Modules {
  time: number = 0

  static parse(raw: string): Modules {
    const m = new Modules()
    const matches = raw.match(/hugo: collected modules in (\d+) ms/);
    if (matches !== null) {
      m.time = parseInt(matches[1])
    }
    return m
  }
}


export default Modules;
