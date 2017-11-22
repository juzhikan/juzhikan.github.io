/*!
 * Damoo - HTML5 Danmaku Engine v2.3.0
 * https://github.com/jamesliu96/Damoo
 *
 * Copyright (c) 2015-2017 James Liu
 * Released under the MIT license
 */

function Damoo (options) {
    var opt = options || {}
    var container = this.container = getElement(opt.container)
    container.style.overflow = 'hidden'

    this.fontSize = opt.fontSize || 14
    this.width = parseFloat(getStyle(container, 'width'))
    this.height = parseFloat(getStyle(container, 'height'))

    this.trackNum = Math.floor(this.height/this.fontSize)

    this.pool = new Pool()
    this.track = new Track(this.trackNum, this.fontSize)
}

Damoo.prototype.load = function (bullet) {
    if (!bullet) return
    bullet = Object.prototype.toString.call(bullet) === '[object Array]' ? bullet : [ bullet ]

    for (var i = 0; i < bullet.length; i++) {
        var ele = bullet[i]
        var isLiteral = typeof ele === 'string'
        if (!isLiteral && !bullet.text) {
            throw new Error('The text attribute is required！')
            return
        }
        bullet[i] = (isLiteral && { text: ele }) || ele
        
        this.pool.load(new Bullet(bullet[i]))
    }
}

Damoo.prototype.flowOut = function () {
    var limit = 4
    while (this.pool.getAmount() && this.track.getValidTrackIndex() !== false && limit > 0) {
        var bullet = this.pool.getLoaded()
        var bulletDom = document.createElement('div')
        bulletDom.addEventListener('transitionend', function (event) {
            var target = event.currentTarget
            target.parentNode.removeChild(target)
        })
        for (var key in bullet) {
            var quote = key === 'textContent' ? bulletDom : bulletDom.style
            quote[key] = bullet[key]
        }
        this.container.appendChild(bulletDom)
        this.track.addTrack(bulletDom)
        limit--
    }
    var self = this
    setTimeout(function () {
        self.flowOut()
    }, 1000)
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
    this.records = new Array(this.num)
}

Track.prototype.getValidTrackIndex = function () {
    var records = this.records
    for (var index = 0; index < records.length; index++) {
        var record = records[index]
        if (!record || getDistance(record) < 375) return index
    }
    return false
}

function getDistance (blt) {
    var transform = getStyle(blt, 'transform')
    var translatex = transform.replace('matrix(', '').replace(')','').split(',')[4].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    return parseFloat(translatex) + blt.clientWidth
}

Track.prototype.addTrack = function (bullet, index) {
    var trackIndex = index !== undefined ? index : getRandom(0, this.num - 1)
    trackIndex = trackIndex || 0
    var top = trackIndex*this.height

    /* 弹幕是否能放到当前轨道中，不能的话另寻轨道，能的话计算速度 */
    var record = this.records[trackIndex]
    if (record) {
        var distance = getDistance(record)
        if (distance > 375) {
            console.log('轨道冲突')
            trackIndex = this.getValidTrackIndex()
            this.addTrack(bullet, trackIndex)
            return
        } else if (distance >= 0) {
            console.log(distance)
            /* 可以放入，需要计算时间 */
            bullet_v = (((375 + record.clientWidth) / 3) * 375)/distance
            console.log(record.clientWidth)
            console.log(bullet_v)
            bullet_t = (bullet.clientWidth + 375)/bullet_v
            
            console.log(bullet_t)
            bullet_t = bullet_t < 1.5 ? 1.5 : bullet_t
            this.shoot(bullet, bullet_t, trackIndex, top)
            return
        }
    }
    this.shoot(bullet, 3, trackIndex, top)
}

Track.prototype.shoot = function (bullet, time, trackIndex, top) {
    this.records[trackIndex] = bullet
    bullet.style.transition = 'transform ' + time + 's linear'
    bullet.style.top = top + 'px'
    requestAnimationFrame(function () {
        bullet.style.transform = 'translateX(' + -bullet.clientWidth + 'px)'
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
    return this.bullets.length && this.bullets.shift()
}

Pool.prototype.getAmount = function (d) {
    return this.bullets.length
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

function getStyle (ele, prop) {
    var result = prop.match(/[A-Z]/g)
    if (!ele.currentStyle && result) {
        var propBridge = prop
        for (var i = 0; i < result.length; i++) {
            var upperCase = result[i]
            propBridge = propBridge.replace(upperCase, '-' + upperCase.toLowerCase())
        }
    }
    return (ele.currentStyle && ele.currentStyle[propBridge]) || getComputedStyle(ele, null)[prop]
}