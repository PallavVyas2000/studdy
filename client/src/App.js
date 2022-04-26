import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelList } from 'stream-chat-react';
import { ChannelListContainer, ChannelContainer, NavBar, Auth } from './components'

const apiKey = "huprx5j4vspv";
const client = StreamChat.getInstance(apiKey);
const authToken = false;

function App() {

  if(!authToken) return <Auth/>;
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <div className="app__wrapper">
          <Chat client={client} theme="team light">
            <ChannelListContainer />
            <ChannelContainer />
          </Chat>
        </div>
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
