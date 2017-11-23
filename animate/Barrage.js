import Tween from 'rc-tween-one'
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class Barrage extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            list: []
        }
        this._list = []
        this._handle = null
        this._index = 0
    }

    componentDidMount () {
        const {fetchData, itemKey} = this.props
        this._wrapperStyle = getComputedStyle(this._wrapper)
        this._maxRowCount = Math.floor(
            parseInt(
                this._wrapperStyle.height
            ) / (this.props.margin + this.props.height)
        )
        fetchData().then(list => {
            this._list = list.map((item, index) => {
                let id = item[itemKey] || index
                return {
                    ...item,
                    [itemKey]: id
                }
            })
            this._start()
        })
    }

    render () {
        return (
            <div style={this.props.style} className={this.props.className} ref={ele => this._wrapper = ele}>
                {this.state.list.map(item => {
                    let id = item.data[this.props.itemKey]

                    let anim = [
                        {
                            x: parseInt(this._wrapperStyle.width),
                            y: item.y,
                            duration: 0
                        },
                        {
                            x: -this.props.width,
                            y: item.y,
                            duration: this.props.duration,
                            ease: 'linear',
                            onComplete: () => this._delItem(id)
                        }
                    ]
                    
                    return (
                        <Tween style={{position: 'absolute'}} key={id} animation={anim}>
                            <this.props.Item data={item.data}></this.props.Item>
                        </Tween>
                    )
                })}
            </div>
        )
    }

    _delItem (id) {
        this.setState(state => {
            let index = state.list.findIndex(item => item.data[this.props.itemKey] === id)
            if (index >= 0) {
                let list = state.list.concat([])
                list.splice(index, 1)
                return {
                    list
                }
            }
        })
    }

    _start () {
        this._handle = setInterval(() => {
            if (this._index >= this._list.length) {
                this._index = 0
            }
            this._addItem(this._list[this._index])
        }, this.props.delay)
    }

    _addItem (item) {
        this.setState(state => {
            if (
                state.list.find(
                    i => i.data[this.props.itemKey] === item[this.props.itemKey]
                )
            ) {
                return {}
            }

            let row = this._getRow(state.list)

            if (row === null) {
                return {}
            }
            this._index++
            if (row === undefined) {
                console.error(row)
            }
            return {
                list: state.list.concat([{
                    data: item,
                    y: row * (this.props.margin + this.props.height) + this.props.margin,
                    row
                }])
            }
        })
    }

    _getRow (list = []) {
        let pool = []
        for (let i = 0; i < this._maxRowCount; i++) {
            list.find(item => item.row === i) === undefined ? pool.push(i) : null
        }
        
        if (pool.length > 0) {
            let ret = Math.floor((pool.length - 1) * Math.random())
            if (pool[ret] === undefined) {
                console.error('pool', pool, ret)
            }
            return pool[ret]
        } else {
            return null
        }
    }


}

Barrage.propTypes = {
    Item: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired
}

Barrage.defaultProps = {
    duration: 1000,
    delay: 750,
    margin: 10,
    height: 50,
    itemKey: 'id',
    width: 300
}