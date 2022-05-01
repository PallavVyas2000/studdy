import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelList } from 'stream-chat-react';
import { ChannelListContainer, ChannelContainer, NavBar, Auth } from './components'

const cookies = new Cookies();
const apiKey = "huprx5j4vspv";
const authToken = cookies.get('token');
const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get('userID'),
    name: cookies.get('username'),
    image: cookies.get('avatarURL'),
    token: cookies.get('token'),
    fullName: cookies.get('fullName'),
    phoneNumber: cookies.get('phoneNumber'),
    hashedPassword: cookies.get('hashedPassword')
  }, authToken);
}

function App() {

  if (!authToken) return <Auth />;
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
