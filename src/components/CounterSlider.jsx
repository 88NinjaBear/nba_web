import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'

export default class CounterSlider extends Component {
    state = {
        inputValue: this.props.minCount,
    }

    onChange = value => {
        this.setState({
            inputValue: value,
        });
        this.props.onCountSliderChange(value);
    }
    render() {
        const { inputValue } = this.state;

        return (
            <Row>
                <Col span={12}>
                    <Slider min={1}
                        max={20}
                        onChange={this.onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}>
                    </Slider>
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.onChange}>
                    </InputNumber>
                </Col>
            </Row>
        )
    }
}
