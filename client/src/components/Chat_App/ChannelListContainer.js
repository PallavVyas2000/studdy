import React, { useState } from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '..';
import Cookies from 'universal-cookie';
import cuiconB from '../../Images/culogo-black.png'
import { Link } from 'react-router-dom'

const cookies = new Cookies();

const SideBar = ({ logout, toggleSidebar, mini }) => (
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
                        <Link aria-current="page" to="/">
                            <i className="bi bi-house-fill" style={{color : "black"}}></i>
                        </Link>
                    </div>
                </div>
                <div className="channel-list__sidebar__icon">
                    <div className="icon3__inner" onClick={logout}>
                        <i className="fas fa-sign-out-alt fa-lg"></i>
                    </div>
                </div>
            </div>
            <div className="sidebar-footer">
                <div className="icon4__inner" onClick={toggleSidebar}>
                    <i className={`fas fa-chevron-circle-up fa-2x rotate${mini ? "" : "-back"}`}></i>
                </div>
            </div>
        </div>
    </>
);

const AppHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text align-center">Studdy</p>
        <p className="channel-list__header__text_2">Chat Room</p>
    </div>
)

// Filter for team channels display on sidebar
const customChannelTeamFilter = (channels) => {
    return channels.filter((channels) => channels.type === 'team');
}
// Filter for message channels display on sidebar
const customChannelMessagingFilter = (channels) => {
    return channels.filter((channels) => channels.type === 'messaging');
}

const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {

    const { client } = useChatContext();

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

    const filters = { members: { $in: [client.userID] } };

    const [mini, setMini] = useState(true);

    const toggleSidebar = () => {
        if (mini) {
            document.getElementById("mySidebar").style.width = "290px";
            document.getElementById("mySidebar").style.left = "65px";
            setMini(false);
        } else {
            document.getElementById("mySidebar").style.width = "0px";
            setMini(true);
        }
    }

    return (
        <>
            <SideBar logout={logout} toggleSidebar={toggleSidebar} mini={mini} />
            {/* <div className={`channel-list__list__wrapper ${sidebarClass}`}> */}
            <div id="mySidebar" className="sidebar">
                <AppHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />

                {/* Team View Component */}
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps} type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer} />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team" />
                    )} />


                {/* Message View Component */}
                <ChannelList
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer} />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging" />
                    )} />
            </div>
        </>
    )
}

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    return (
        <>
            {/* Desktop Version */}
            <div className="channel-list__container">
                <ChannelListContent setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} />
            </div>
            {/* Mobile Version */}
            <div className="channel-list__container-responsive" style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}>
                <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}></div>
                <ChannelListContent setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} setToggleContainer={setToggleContainer} />
            </div>
        </>
    )
}

export default ChannelListContainer;