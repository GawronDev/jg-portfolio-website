import { useState, useRef, useEffect } from 'react'
import HomeScreen from '../components/HomeScreen';
import TopBar from '../components/TopBar';
import Menu from '../components/Menu';
import CardScreen from "../components/CardScreen";
import ProjectScreen from '../components/ProjectsScreen';
import AboutMeScreen from '../components/AboutMeScreen';
import noiseTexture from '../assets/noise.png';
import SideIcons from '../components/SideIcons';
import TileScreen from '../components/TileScreen';

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
    setMenuStatus("open");
  }

  function closeMenu() {
    setMenuStatus("closed");
  }

  function cursorTurnOnHover() {
    let cursor = document.getElementById("cursor");
    cursor.style.width = "30px";
    cursor.style.mixBlendMode = "normal";
    cursor.style.backgroundColor = "#ff8800";
    cursor.style.opacity = "0.5";
}

function cursorTurnOffHover() {
    let cursor = document.getElementById("cursor");
    cursor.style.width = "40px";
    cursor.style.mixBlendMode = "luminosity";
    cursor.style.backgroundColor = "transparent";
    cursor.style.opacity = "1";
}


  return (
    <div className='main-wrapper'>
      <TopBar status={menuStatus} changeMenuState={changeMenuState} turnOnHover={cursorTurnOnHover} turnOffHover={cursorTurnOffHover}/>
      <SideIcons turnOnHover={cursorTurnOnHover} turnOffHover={cursorTurnOffHover}/>
      <svg className='noise-texture'>
        <defs>
          <filter id='noise'>
            <feTurbulence type='turbulence' baseFrequency='0.65' />
          </filter>
        </defs>
      </svg>
      {/* <img src={noiseTexture} className='noise-texture' draggable={false}/> */}
      <div className='content-wrapper'>
        <Menu status={menuStatus} changeMenuState={changeMenuState} turnOnHover={cursorTurnOnHover} turnOffHover={cursorTurnOffHover}/>
        <HomeScreen turnOnHover={cursorTurnOnHover} turnOffHover={cursorTurnOffHover}/>
        <TileScreen turnOnHover={cursorTurnOnHover} turnOffHover={cursorTurnOffHover}/>
      </div>
    </div>
  )
}