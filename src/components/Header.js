import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Sing up</Link></li>
            <li><Link to="/login">Sign in</Link></li>
        </ul>
    </header>
  )
}

export default Header