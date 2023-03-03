import React, { Component } from 'react'
import NBA from '../nba-client'
import * as d3 from 'd3'
import { hexbin } from 'd3-hexbin'
import { court, shots } from 'd3-shotchart'
import { PropTypes } from 'prop-types'

window.d3_hexbin = { hexbin: hexbin };

export default class ShotChart extends Component {
    static propTypes = {
        playerId: PropTypes.number.isRequired,
        minCount: PropTypes.number,
        charType: PropTypes.string,
        displayTooltip: PropTypes.bool,
    }

    componentDidUpdate() {
        console.log("shot chart update is called")
        const { playerId, minCount, chartType, displayToolTip } = this.props;

        NBA.stats.shots({ PlayerID: playerId }).then(resp => {
            const shots_data = resp.shot_Chart_Detail.map(shot => ({
                x: (shot.locX + 250) / 10,
                y: (shot.locY + 50) / 10,
                action_type: shot.actionType,
                shot_distance: shot.shotDistance,
                shot_made_flag: shot.showMadeFlag,
            }))
            const courtSelection = d3.select('#shot-chart');
            courtSelection.html('');
            const chart_court = court().width(500);
            const chart_shots = shots()
                .shotRenderThreshold(minCount)
                .displayToolTips(displayToolTip)
                .displayType(chartType)

            courtSelection.call(chart_court);
            courtSelection.datum(shots_data).call(chart_shots)
        })
    }

    render() {
        console.log("shot chart render is called")
        return (
            <div id="shot-chart"></div>
        )
    }
}
