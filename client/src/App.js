import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Public from './components/Public';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/users/NotesList';
import UsersList from './features/notes/UsersList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Public/>}/>
          <Route path="login" element={<Login/>}/>
          
          {/* Dash Start */}
          <Route path='dash' element={<DashLayout/>}>
              <Route index element={<Welcome/>}/>
              <Route path='notes'>
                <Route index element={<NotesList/>}/>
              </Route>
              <Route path='users'>
                <Route index element={<UsersList/>}/>
              </Route>
          </Route>
          {/* Dash End */}
      </Route>
    </Routes>
  );
}

export default App;
