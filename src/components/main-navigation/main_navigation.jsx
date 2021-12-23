import {Link} from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header className="header">
        <div className="logo">React Meetups</div>
        <nav>
          <ul>
            <li key="home">
              <Link to="/">All Meetups</Link>
            </li>
            <li key="favorites">
              <Link to="/favorites">Favorite Meetups</Link>
            </li>
            <li key="new meetup">
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default MainNavigation;