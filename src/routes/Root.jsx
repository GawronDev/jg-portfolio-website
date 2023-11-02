import { useState, useRef, useEffect } from 'react'
import HomeScreen from '../components/HomeScreen';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';
import CardScreen from "../components/CardScreen";
import ProjectScreen from '../components/ProjectsScreen';

export default function Root() {
  var [menuStatus, setMenuStatus] = useState("closed");

  function openMenu() {
    setMenuStatus("open");
  }

  function closeMenu() {
    setMenuStatus("closed");
  }

  return (
    <div className='main-wrapper'>
      <TopBar openMenu={openMenu} closeMenu={closeMenu} />
      <div className='content-wrapper'>
        <Menu status={menuStatus} />
        <HomeScreen />
        <CardScreen />
        <ProjectScreen />
      </div>
    </div>
  )
}