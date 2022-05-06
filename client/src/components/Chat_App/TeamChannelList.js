import React from 'react'

const TeamChannelList = ({ setToggleContainer, children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) => {

    if (error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error, please wait a moment and try again.
                </p>
            </div>
        ) : null
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} loading...
                </p>
            </div>
        )
    }
    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                <i className="bi bi-plus-circle-dotted" style={{color:"white"}} onClick={() => { setCreateType(type === 'team' ? 'team' : 'messaging'); setIsCreating((prevState) => !prevState); setIsEditing(false); if (setToggleContainer) setToggleContainer((prevState) => !prevState) }}></i>
            </div>
            {children}
        </div>
    )
}

export default TeamChannelList