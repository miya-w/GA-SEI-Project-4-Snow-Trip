import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from './AuthPage/AuthPage';
import NewOrderPage from './NewOrderPage/NewOrderPage';
import OderHistoryPage from './OrderHistoryPage/OderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../Note/NotePage';



export default function App() {
// const [user, setUser] = useState(null);
const [user, setUser] = useState(getUser());

  return (
    <main className="App">
    {user ?  
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
      <Route path='/itinerary' element={<NotesPage />} />
      <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
      {/* <Route path='/items/:itemId' element={<ItemDetailPage />} /> */}
      <Route path='/orders' element={<OderHistoryPage/>}/>
      </Routes>
      </>
   : <AuthPage setUser={setUser}/>

    }
     App
    

    </main>
  );
}

