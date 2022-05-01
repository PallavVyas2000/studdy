import './App.css';
import 'stream-chat-react/dist/css/index.css';
import { useState } from 'react';
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
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <div className="app__wrapper">
          <Chat client={client} theme="team light">
            <ChannelListContainer isCreating={isCreating} setIsCreating={setIsCreating} setCreateType={setCreateType} setIsEditing={setIsEditing} />
            <ChannelContainer isCreating={isCreating} setIsCreating={setIsCreating} isEditing={isEditing} setIsEditing={setIsEditing} createType={createType}/>
          </Chat>
        </div>
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
