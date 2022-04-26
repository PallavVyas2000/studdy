import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

const ChannelSearch = () => {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //fetch comments - TODO
    } catch (error) {
      setQuery('');
    }
  }

  const onSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input_icon">
        <i className="fas fa-search" style={{color:"white"}}></i>
        </div>
        <input type="text" placeholder="Search" className="channel-search__input__text" style={{paddingLeft : "10px"}} value={query} onChange={onSearch} />
      </div>
    </div>
  )
}

export default ChannelSearch
