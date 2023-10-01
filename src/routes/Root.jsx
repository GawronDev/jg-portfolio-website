import { useState, useRef, useEffect } from 'react'
import HomeScreen from '../components/HomeScreen';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';

export default function Root() {
  var [menuStatus, setMenuStatus] = useState("closed");

  function openMenu() {
    console.log("Root: Opening menu");
    setMenuStatus("open");
  }

  function closeMenu() {
    console.log("Root: Closing menu");
    setMenuStatus("closed");
  }

  return (
    <div className='main-wrapper'>
      <TopBar openMenu={openMenu} closeMenu={closeMenu} />
      <div className='content-wrapper'>
        <Menu status={menuStatus} />
        <HomeScreen />
      </div>
    </div>
  )
}