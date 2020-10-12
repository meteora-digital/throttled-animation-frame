function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var throttledAnimationFrame = /*#__PURE__*/function () {
  function throttledAnimationFrame() {
    var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

    _classCallCheck(this, throttledAnimationFrame);

    this.time = {
      stopped: false,
      previous: null,
      current: null,
      elapsed: null,
      interval: 1000 / fps
    };
  }

  _createClass(throttledAnimationFrame, [{
    key: "start",
    value: function start() {
      var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.time.stopped = false;
      this.time.previous = Date.now();
      this.func = func;
      if (this.func && typeof this.func == 'function') this.update();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.time.stopped = true;
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      if (this.time.stopped) return;
      window.requestAnimationFrame(function () {
        return _this.update();
      });
      this.time.current = Date.now();
      this.time.elapsed = this.time.current - this.time.previous;

      if (this.time.elapsed >= this.time.interval) {
        this.time.previous = this.time.current - this.time.elapsed % this.time.interval;
        this.func();
      }
    }
  }]);

  return throttledAnimationFrame;
}();

export default throttledAnimationFrame;