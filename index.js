"use client"
import { useEffect, useState } from 'react';
import About from './app/components/About';
import Contact from './app/components/Contact';
import Footer from './app/components/Footer';
import Header from './app/components/Header';
import Navbar from './app/components/Navbar'
import Services from './app/components/Services';
import Work from './app/components/Work';
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=> {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{

      setIsDarkMode(false)

    }
  }, [])

  useEffect(() => {
if(isDarkMode){
  document.documentElement.classList.add('dark');
  localStorage.theme = 'dark'
}else{

  document.documentElement.classList.remove('dark');

  localStorage.theme = ''
}
  }, [isDarkMode])
  return (
   <>
  <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
  <Header isDarkMode={isDarkMode}/>
  <About isDarkMode={isDarkMode}/>
  <Services isDarkMode={isDarkMode}/>
  <Work isDarkMode={isDarkMode}/>
  <Contact isDarkMode={isDarkMode}/>
  <Footer isDarkMode={isDarkMode}/>
   </>
  );
}
