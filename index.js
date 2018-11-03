function produceDrivingRange (blockRange) {
  return function (start, end) {
    const s = parseInt(start)
    const e = parseInt(end)
    let distance = Math.abs(e - s)
    let diff = blockRange - distance
    if (diff > 0) { return `within range by ${diff}`}
    else { return `${Math.abs(diff)} blocks out of range`}
  }
}

function produceTipCalculator(tip) {
  return function (fare) {
    return fare * tip
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor (name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
