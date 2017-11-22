/*!
 * Damoo - HTML5 Danmaku Engine v2.3.0
 * https://github.com/jamesliu96/Damoo
 *
 * Copyright (c) 2015-2017 James Liu
 * Released under the MIT license
 */

function Damoo (options) {
    var opt = options || {}
    this.container = getElement(opt.container)
    this.pool = new Pool()
    this.track = new Track(3, 14)
}

Damoo.prototype.load = function (bullet) {
    var isLiteral = typeof bullet === 'string'
    if (!bullet || (!isLiteral && !bullet.text)) {
        throw new Error('bullet is necessary!')
        return
    }

    bullet = (isLiteral && { text: bullet }) || bullet

    this.pool.load(new Bullet(bullet))
}

Damoo.prototype.flowOut = function () {
    var bulletDom = document.createElement('div')
    var bullet = this.pool.getLoaded()
    for (var key in bullet) {
        var quote = key === 'textContent' ? bulletDom : bulletDom.style
        quote[key] = bullet[key]
    }
    this.container.appendChild(bulletDom)
    this.track.addTrack(bulletDom)
}


function Bullet (blt) {
    
    this.textContent = blt.text

    this.display = 'inline-block'
    this.whiteSpace = 'pre'
    this.position = 'absolute'
    this.transform = 'translateX(375px)'
    this.fontWeight = 'bold'
    this.fontSize = 14
    this.fontFamily = 'sans-serif'
    this.textShadow = 'rgb(0, 0, 0) 1px 1px 2px'
    this.opacity = 0.7
    this.color = 'rgb(255, 255, 255)'
}

/* 弹轨控制 */
function Track (num, height) {
    this.num = num
    this.height = height
    this.Tracks = new Array(this.num)
}

Track.prototype.addTrack = function (bullet) {
    var t = getRandom(0, this.num - 1)
    var top = t*this.height
    if (this.Tracks[t]) {
        this.Tracks[t].push(bullet)
    } else {
        this.Tracks[t] = [ bullet ]
    }
    bullet.style.transition = 'transform 3s linear'
    bullet.style.top = top + 'px'
    requestAnimationFrame(function () {
        bullet.style.transform = 'translateX(0)'
    })
}

/* 弹池控制 */
function Pool () {
    this.bullets = []
}

Pool.prototype.load = function (bullet) {
    this.bullets.push(bullet)
}

Pool.prototype.getLoaded = function (d) {
    return this.bullets.pop()
}

Pool.prototype.empty = function () {
    this.bullets = []
}

window.Damoo = Damoo







function getRandom (n, m) {
    return Math.floor(Math.random()*(m - n + 1) + n)
}

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