import React, { useState } from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '..';
import Cookies from 'universal-cookie';
import cuiconB from '../../Images/culogo-black.png'

const cookies = new Cookies();

const SideBar = ({ logout, handleViewSidebar }) => (
    <>
        <div className="channel-list__sidebar">
            <div className="sidebar-content">
                <div className="channel-list__sidebar__icon">
                    <div className="icon1__inner">
                        <img src={cuiconB} alt="CU Icon" width="30" />
                    </div>
                </div>
                <div className="channel-list__sidebar__icon">
                    <div className="icon2__inner">
                        <i className="bi bi-house-fill"></i>
                    </div>
                </div>
                <div className="channel-list__sidebar__icon">
                    <div className="icon3__inner" onClick={logout}>
                        <i className="fas fa-sign-out-alt fa-lg"></i>
                    </div>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="icon4__inner" onClick={handleViewSidebar}>
                    <i className="fas fa-chevron-circle-up fa-2x"></i>
                </div>
            </div>
        </div>
    </>
);

const AppHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text align-center">Studdy Chat Room</p>
    </div>
)

const ChannelListContainer = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {

    const logout = () => {
        cookies.remove('token');
        cookies.remove('userID');
        cookies.remove('username');
        cookies.remove('avatarURL');
        cookies.remove('token');
        cookies.remove('fullName');
        cookies.remove('phoneNumber');
        cookies.remove('hashedPassword');

        window.location.reload();
    }
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };
    const sidebarClass = sidebarOpen ? "sidebar open" : "sidebar";
    return (
        <>
            <SideBar logout={logout} handleViewSidebar={handleViewSidebar} />
            <div className={`channel-list__list__wrapper ${sidebarClass}`}>
                <AppHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList filters={{}} channelRenderFilterFn={() => { }} List={(listProps) => (<TeamChannelList {...listProps} type="team" isCreating={isCreating} setIsCreating={setIsCreating} setCreateType={setCreateType} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />)} Preview={(previewProps) => (<TeamChannelPreview {...previewProps} type="team" />)} />
                <ChannelList filters={{}} channelRenderFilterFn={() => { }} List={(listProps) => (<TeamChannelList {...listProps} type="messaging" isCreating={isCreating} setIsCreating={setIsCreating} setCreateType={setCreateType} setIsEditing={setIsEditing} setToggleContainer={setToggleContainer} />)} Preview={(previewProps) => (<TeamChannelPreview {...previewProps} type="messaging" />)} />
            </div>
        </>
    )
}

export default ChannelListContainer;