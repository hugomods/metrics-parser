import Hugo from "./hugo";
import Metrics from "./metrics";
import Modules from "./modules";

class Build {
  raw: string
  hugo: Hugo
  modules: Modules
  metrics: Metrics

  constructor (raw: string) {
    this.raw = raw
    this.hugo = Hugo.parse(raw)
    this.modules = Modules.parse(raw)
    this.metrics = Metrics.parse(raw)
  }

  toString(): string {
    let s = ''
    s += this.metrics.speed()
    return s
  }
}

export default Build;
