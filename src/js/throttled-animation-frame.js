class throttledAnimationFrame {
  constructor(fps = 60) {
    this.time = {
      stopped: false,
      previous: null,
      current: null,
      elapsed: null,
      interval: 1000 / fps,
    }
  }

  start(func = false) {
    this.time.stopped = false;
    this.time.previous = Date.now();
    this.func = func;

    if (this.func && typeof this.func == 'function') this.update();
  }

  stop() {
    this.time.stopped = true;
  }

  update() {
    if (this.time.stopped) return;

    window.requestAnimationFrame(() => this.update());

    this.time.current = Date.now();
    this.time.elapsed = this.time.current - this.time.previous;

    if (this.time.elapsed >= this.time.interval) {
      this.time.previous = this.time.current - (this.time.elapsed % this.time.interval);
      this.func();
    }
  }
}


export default throttledAnimationFrame;