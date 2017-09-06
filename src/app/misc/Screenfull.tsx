/*
* https://github.com/sindresorhus/screenfull.js
* screenfull
* v3.3.1 - 2017-07-07
* (c) Sindre Sorhus; MIT License
* */

export class ScreenFull {

  _isFullscreen = false;
  _element;
  _enabled;

  private document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
  private keyboardAllowed = true;
  private fn;
  private eventNameMap;

  constructor() {
    this.fn = this.check();

    this.eventNameMap = {
      change: this.fn.fullscreenchange,
      error: this.fn.fullscreenerror
    };
  }

  public request(elem) {
    let request = this.fn.requestFullscreen;

    elem = elem || document.documentElement;

    // work around Safari 5.1 bug: reports support for
    // keyboard in fullscreen even though it doesn't.
    // browser sniffing, since the alternative with
    // setTimeout is even worse.
    if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
      elem[request]();
    } else {
      elem[request](this.keyboardAllowed);
    }
  }

  public exit() {
    this.document[this.fn.exitFullscreen]();
  }

  public toggle(elem) {
    if (this._isFullscreen) {
      this.exit();
    } else {
      this.request(elem);
    }
  }

  public onchange(callback) {
    this.on('change', callback);
  }

  public onerror(callback) {
    this.on('error', callback);
  }

  public on(event, callback) {
    let eventName = this.eventNameMap[event];
    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  }

  public off(event, callback) {
    let eventName = this.eventNameMap[event];
    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  }


  get isFullscreen() {
    let res = Boolean(document[this.fn.fullscreenElement]);
    this.isFullscreen = res;
    return res;
  }

  set isFullscreen(value) {
    this._isFullscreen = value;
  }

  get element() {
    let res = Boolean(document[this.fn.fullscreenElement]);
    this._element = res;
    return res;
  }

  set element(value) {
    this._element = value;
  }

  get enabled() {
    let res = Boolean(document[this.fn.fullscreenEnabled]);
    this._enabled = res;
    return res;
  }

  set enabled(value) {
    this._enabled = value;
  }

  private check() {
    let val;
    let fnMap = [
      [
        'requestFullscreen',
        'exitFullscreen',
        'fullscreenElement',
        'fullscreenEnabled',
        'fullscreenchange',
        'fullscreenerror'
      ],
      // new WebKit
      [
        'webkitRequestFullscreen',
        'webkitExitFullscreen',
        'webkitFullscreenElement',
        'webkitFullscreenEnabled',
        'webkitfullscreenchange',
        'webkitfullscreenerror'

      ],
      // old WebKit (Safari 5.1)
      [
        'webkitRequestFullScreen',
        'webkitCancelFullScreen',
        'webkitCurrentFullScreenElement',
        'webkitCancelFullScreen',
        'webkitfullscreenchange',
        'webkitfullscreenerror'

      ],
      [
        'mozRequestFullScreen',
        'mozCancelFullScreen',
        'mozFullScreenElement',
        'mozFullScreenEnabled',
        'mozfullscreenchange',
        'mozfullscreenerror'
      ],
      [
        'msRequestFullscreen',
        'msExitFullscreen',
        'msFullscreenElement',
        'msFullscreenEnabled',
        'MSFullscreenChange',
        'MSFullscreenError'
      ]
    ];

    let i = 0;
    let l = fnMap.length;
    let ret = {};

    for (; i < l; i++) {
      val = fnMap[i];
      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }
        return ret;
      }
    }
    return false;
  }
}
