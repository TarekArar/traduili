import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'Accueil' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} active as={Link} to="/" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="Accueil"
        active={activeItem === 'Accueil'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="Blog"
        active={activeItem === 'Blog'}
        onClick={handleItemClick}
        as={Link}
        to="/blog"
      />
      <Menu.Item
        name="Type Traduction"
        active={activeItem === 'Type Traduction'}
        onClick={handleItemClick}
        as={Link}
        to="/traductions"
      />
      <Menu.Item
        name="Nos Traducteurs"
        active={activeItem === 'Nos Traducteurs'}
        onClick={handleItemClick}
        as={Link}
        to="/traducteurs"
      />
      <Menu.Item
        name="Recrutement"
        active={activeItem === 'Recrutement'}
        onClick={handleItemClick}
        as={Link}
        to="/recrutement"
      />
      <Menu.Item
        name="A propos"
        active={activeItem === 'A propos'}
        onClick={handleItemClick}
        as={Link}
        to="/apropos"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="register"
          active={activeItem === 'register'}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
