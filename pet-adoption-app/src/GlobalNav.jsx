import menu from './menu';
import './GlobalNav.css';
import { useState } from 'react';

function GlobalNav({ className, setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const list = menu.map(item => (
    <li className="global-nav__item" key={item.name}>
      <a
        className="global-nav__link"
        href={item.path}
        onClick={(e) => {
          e.preventDefault();
          setPage(item.name);
          setShowMenu(false);
        }}
      >
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className={`global-nav ${className}`}>
      <button
        className="global-nav__hamburger-menu"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle Menu"
      >
        &#9776;
      </button>
      <ul className={`global-nav__list ${showMenu ? 'global-nav__list--open' : ''}`}>
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;
