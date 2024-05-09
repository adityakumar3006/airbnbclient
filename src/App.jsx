
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import axios from "axios";
import { UserContextProvider } from './User.context';
import ProfilePage from './pages/Accountpage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/Placepage';
import BookingsPage from './pages/Bookingspage';
import BookingPage from './pages/BookingPage.jsx';

// axios.defaults.baseURL = "http://localhost:4000/";
axios.defaults.baseURL = "https://air-bnb-clone-mern.onrender.com";
axios.defaults.withCredentials = true
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path='/place/:id' element={<PlacePage />} />
          <Route path='/account/bookings' element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />

        </Route>


      </Routes>
    </UserContextProvider>

  )
}

export default App
