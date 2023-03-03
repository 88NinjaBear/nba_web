import React, { Component } from 'react'
import Profile from './Profile'
import DataViewContainer from './DataViewContainer'
import SearchBar from './SearchBar'
import NBA from '../nba-client'

import { DEFAULT_PLAYER_INFO } from '../constants'

export default class main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        window.NBA = NBA;
        this.loadPlayerInfo(DEFAULT_PLAYER_INFO.playerName)
    }

    loadPlayerInfo = (playerName) => {
        NBA.stats.playerInfo({ PlayerID: NBA.findPlayer(playerName).playerId }).then((info) => {
            //console.log(info);
            let playInfo = Object.assign(info.commonPlayerInfo[0],
                info.playerHeadlineStates[0]);
            const teamId = NBA.playerIdFromName(playInfo.teamAbbreviation);
            console.log(playInfo);
            this.setState({ playerInfo: { ...playInfo, teamId } })
        })
    }

    render() {
        const { playerInfo } = this.state
        return (
            <div className='main'>
                <SearchBar></SearchBar>
                <div className='player'>
                    <Profile playerInfo={playerInfo}></Profile>
                    <DataViewContainer playerId={playerInfo.playerId}></DataViewContainer>
                </div>
            </div>
        )
    }
}
