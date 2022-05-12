import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components'
import HomePage from './components/HomePage';

// important to place App.css below the bundled css of stream-chat-react as we will be doing custom styling
// according to css rules the stylesheet below will be given priority over the later in case of same component 
// styling and will be overridden
import 'stream-chat-react/dist/css/index.css';
import './App.css';

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
        <div className="app__wrapper">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/chat" element={<Chat client={client} theme="team light">
              <ChannelListContainer isCreating={isCreating} setIsCreating={setIsCreating} setCreateType={setCreateType} setIsEditing={setIsEditing} />
              <ChannelContainer isCreating={isCreating} setIsCreating={setIsCreating} isEditing={isEditing} setIsEditing={setIsEditing} createType={createType} />
            </Chat>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
