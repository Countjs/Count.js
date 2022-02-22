class count{
  constructor(n, num) {
    this.n = n
    this.num = num
  }
  start() {
    this.n += this.num
  }
  read() {
    return this.n
  }
  stop() {
    this.num = 0
  }
  clear() {
    this.num = 0
    this.n = 0
  }
}
