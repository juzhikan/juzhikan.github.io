/*!
 * Damoo - HTML5 Danmaku Engine v2.3.0
 * https://github.com/jamesliu96/Damoo
 *
 * Copyright (c) 2015-2017 James Liu
 * Released under the MIT license
 */

function Damoo (m, n, r, t) {
  this.canvas = new Canvas(m, n, r, t)
  this.thread = new Thread(this.canvas.rows)
}

Damoo.prototype.hide = function () {
  this.canvas.parent.removeChild(this.canvas.layer)
}

Damoo.prototype.emit = function (d) {
  if ('string' === typeof d) {
      d = { text: d }
  }
  var cvs = _preload(d, this.canvas.font)
  this.thread.push({
      text: d.text,
      fixed: d.fixed,
      index: this.thread.index,
      speed: Math.pow(30, 1 / 3) * 0.6,
      offset: {
          x: this.canvas.width,
          y: this.canvas.font.size * this.thread.index
      }
  })
}
Damoo.prototype.play = function () {
  if (!this.state) {
      this.emptyThreadPool()
      _render.call(this)
      this.state = 1
  }
  return this
}
Damoo.prototype.emptyThreadPool = function () {
  this.thread.empty()
}
Damoo.prototype.pause = function () {
  if (this.state === void 0) {
      return this
  }
  _CAF(this._afid)
  this.state = 0
}
Damoo.prototype.resume = function () {
  return this.play()
}

function _preload (d, f) {
    var cvs = document.createElement('canvas'),
        ctx = cvs.getContext('2d')
    ctx.font = f
    cvs.width = ctx.measureText(d.text).width
    cvs.height = f.size * 1.5
    ctx.font = f
    ctx.textAlign = 'start'
    ctx.textBaseline = 'top'
    if (d.shadow) {
        ctx.shadowOffsetX = 1
        ctx.shadowOffsetY = 1
        ctx.shadowColor = '#fff'
        ctx.shadowColor = d.shadow.color
    }
    ctx.fillStyle = '#fff'
    ctx.fillStyle = d.color
    ctx.fillText(d.text, 0, 0)
    return cvs
}

var _RAF = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (cb) { return setTimeout(cb, 2) }

var _CAF = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) { clearTimeout(id) }

function _render () {
    this.canvas.clear()
    for (var i = 0; i < this.thread.pool.length; i++) {
        var d = this.thread.get(i),
            x = d.offset.x,
            y = d.offset.y
        this.canvas.draw(d, x, y)
        d.offset.x -= 2
        if (x <= -30) {
            this.thread.remove(i)
        }
    }
    this._afid = _RAF(_render.bind(this))
}

function Canvas (m, n, r, t) {
  this.dpr = window.devicePixelRatio || 1
  this.parent = getElement(m)

  this.id = n
  this.rows = r
  this.width = this.parent.offsetWidth * this.dpr
  this.height = this.parent.offsetHeight * this.dpr
  if (this.height / this.rows < 24) {
      this.rows = Math.floor(this.height / 24)
  }
  this.font = new Font(this.height / this.rows, t)

  this.layer = document.createElement('canvas')
  this.layer.id = this.id
  this.layer.width = this.width
  this.layer.height = this.height
  this.layer.style.width = this.width / this.dpr + 'px'
  this.layer.style.height = this.height / this.dpr + 'px'
  this.layer.style.display = 'block'
  this.layer.style.backgroundColor = 'transparent'
  
  this.ctx = this.layer.getContext('2d')

  this.parent.appendChild(this.layer)
}

Canvas.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.width, this.height)
}

Canvas.prototype.draw = function (t, x, y) {
    if (t.fixed) {
      x = (this.width - t.canvas.width) / 2
    }
    this.ctx.font = 12
    this.ctx.textAlign = 'start'
    this.ctx.textBaseline = 'top'
    this.ctx.shadowOffsetX = 1
    this.ctx.shadowOffsetY = 1
    this.ctx.shadowColor = '#fff'
    this.ctx.fillStyle = '#f49'
    this.ctx.fillText(t.text, x, y)
}




function Font (s, f) {
  this.size = s
  this.family = f || 'sans-serif'
}

Font.prototype.toString = function () {
  return this.size + 'px ' + this.family
}




function Thread (r) {
  this.index = 0
  this.rows = r
  this.pool = []
}

Thread.prototype.push = function (d) {
  this.index++
  if (this.index >= this.rows) {
      this.index = 0
  }
  this.pool.push(d)
}
Thread.prototype.get = function (d) {
  return this.pool[d]
}
Thread.prototype.remove = function (d) {
  var i = this.get(d).index
  if (this.index > i) {
      this.index = i
  }
  this.pool.splice(d, 1)
}
Thread.prototype.empty = function () {
  this.index = 0
  this.pool = []
}

Damoo.version = 'v2.3.0'

window.Damoo = Damoo

function getElement (el) {
  if (!(el && (typeof el === 'string' || (typeof el === 'object' && el.nodeType === 1)))) warn('element does not exist')
  return (typeof el === 'string' && document.querySelector('#' + el)) || el
}

function getStyle (ele, prop) {
  var result = prop.match(/[A-Z]/g)
  if (!ele.currentStyle && result) {
      var propBridge = prop
      for (var i = 0; i < result.length; i++) {
          var upperCase = result[i]
          propBridge = propBridge.replace(upperCase, '-' + upperCase.toLowerCase())
      }
  }
  return parseFloat((ele.currentStyle && ele.currentStyle[propBridge]) || getComputedStyle(ele, null)[prop])
}