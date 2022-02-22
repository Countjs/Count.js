class count{
  constructor(n, num) {
    this.n = n;
    this.num = num;
  }
  start() {
    this.n += this.num;
  }
  read() {
    return this.n;
  }
  stop() {
    this.num = 0;
  }
  clear() {
    this.num = 0;
    this.n = 0;
  }
}

class data {
  constructor() {
    
  }
  save(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }
  read(name) {
    return JSON.parse(localStorage.getItem(name));
  }
  delete(name) {
    localStorage.removeItem(name);
    if(name == "all" || name == "All") {
      localStorage.clear();
    }
  }
  length() {
    return localStorage.length;
  }
}

function fs(c) {
  fill(c);
  rect(0, 0, width, height);
}

document.write("<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>");
