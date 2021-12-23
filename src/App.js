import './App.css';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/favorites';
import NewMeetupPage from './pages/newmeetup';
import AllMeetupsPage from './pages/allmeetups';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </ Layout>
    </div>
  );
}

export default App;
