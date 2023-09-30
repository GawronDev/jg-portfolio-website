import { useState, useRef, useEffect } from 'react'
import HomeScreen from '../components/HomeScreen';
import TopBar from '../components/TopBar';

export default function Root() {
  
  return (
    <div className='main-wrapper'>
      <TopBar />
      <div className='content-wrapper'>
        <HomeScreen />
      </div>
    </div>
  )
}