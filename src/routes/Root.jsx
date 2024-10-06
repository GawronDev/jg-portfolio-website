import { useState, useRef, useEffect } from 'react'
import HomeScreen from '../components/HomeScreen';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';
import CardScreen from "../components/CardScreen";
import ProjectScreen from '../components/ProjectsScreen';
import AboutMeScreen from '../components/AboutMeScreen';
import noiseTexture from '../assets/noise.png';
import SideIcons from '../components/SideIcons';

export default function Root() {
  var [menuStatus, setMenuStatus] = useState("closed");

  function changeMenuState() {
    if (menuStatus == "closed") {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    console.log("open menu");
    setMenuStatus("open");
  }

  function closeMenu() {
    console.log("close menu");
    setMenuStatus("closed");
  }

  return (
    <div className='main-wrapper'>
      <TopBar status={menuStatus} changeMenuState={changeMenuState}/>
      <SideIcons />
      <svg className='noise-texture'>
        <defs>
          <filter id='noise'>
            <feTurbulence type='turbulence' baseFrequency='0.65' />
          </filter>
        </defs>
      </svg>
      {/* <img src={noiseTexture} className='noise-texture' draggable={false}/> */}
      <div className='content-wrapper'>
        <Menu status={menuStatus} changeMenuState={changeMenuState}/>
        <HomeScreen />
        {/* <ProjectScreen /> */}
        {/* <AboutMeScreen /> */}
      </div>
    </div>
  )
}