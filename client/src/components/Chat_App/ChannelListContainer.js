import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '..';
import Cookies from 'universal-cookie';
import cuiconB from '../../Images/culogo-black.png'

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={cuiconB} alt="CU Icon" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon2__inner">
                <i class="bi bi-house-fill"></i>
            </div>
        </div>
    </div>
);

const AppHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Studdy Chat Room</p>
    </div>
)

const ChannelListContainer = () => {
    return (
        <>
        <SideBar/>
        <div className="channel-list__list__wrapper">
            <AppHeader/>
        </div>
        </>
    )
}

export default ChannelListContainer;