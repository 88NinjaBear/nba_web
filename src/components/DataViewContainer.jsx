import React, { Component } from 'react'
import ShotChart from './ShotChart'
import CounterSlider from './CounterSlider'
import _ from 'lodash'

export default class DataViewContainer extends Component {
    state = {
        minCount: 2
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    render() {
        const { minCount } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}>
                </ShotChart>
                <CounterSlider
                    value={minCount}
                    onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
                ></CounterSlider>
            </div>
        )
    }
}
