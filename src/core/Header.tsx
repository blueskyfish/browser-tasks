import React from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiMenuOpen } from '@mdi/js';
import './Header.css'
import Button from './Button';

export type HeaderProps = {
  title: string;
  isOpen: boolean;
  onMenu: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ title, isOpen, onMenu }) => {
  return (
    <header>
      <Button className="logoBtn" onClick={() => onMenu(!isOpen)}>
        {() => <Icon path={isOpen ? mdiMenuOpen : mdiMenu} size={1} color="var(--color-header-txt)" />}
      </Button>
      <p className="headerTitle">{title}</p>
    </header>
  )
};

export default Header;