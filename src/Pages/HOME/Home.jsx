import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { Nav1 } from '../../State/Nav'
import Footer from '../../Components/Footer/Footer';
import SongPlayer from "../../Components/SongPlayer/SongPlayer";

const Home = () => { 
    return (
      <div>
          <div className='relative'>
              <Header />
          </div>
          <div>
            <SongPlayer />
          </div>
          <div className='relative bottom-0 w-full'>
              <Footer />
          </div>
      </div>
    )
  };

export default Home; 