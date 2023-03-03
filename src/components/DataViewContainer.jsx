import React, { Component } from 'react'
import ShotChart from './ShotChart'
import CounterSlider from './CounterSlider'
import { Radio, Row, Col, Switch } from 'antd'
import _ from 'lodash'

export default class DataViewContainer extends Component {
    state = {
        minCount: 2,
        chartType: "hexbin",
        displayTooltip: true,
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    onChartTypeChange = e => {
        this.setState({
            chartType: e.target.value
        });
    }

    onTooltipChange = checked => {
        this.setState({ displayTooltip: checked })
    }
    render() {
        const { minCount, chartType } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    {...this.state}>
                </ShotChart>
                <div className='filters'>
                    <CounterSlider
                        minCount={minCount}
                        onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}>
                    </CounterSlider>
                    <Row>
                        <Col span={9}>
                            <Radio.Group onChange={this.onChartTypeChange} value={chartType}>
                                <Radio value={"hexbin"}>Hexbin</Radio>
                                <Radio value={"scatter"}>Scatter</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={3}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}>
                            </Switch>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
