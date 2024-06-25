import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import SongManager from '../MySongs/SongManager/SongManager';
import { Nav1 } from '../../State/Nav'
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    const [songs, setSongs] = useState([]);

    const updateSongs = (updatedSongs) => {
      setSongs(updatedSongs);
    };
  
    return (
      <div>
          <div>
              <Header />
          </div>
          <div className='absolute bottom-0 w-full'>
              <Footer />
          </div>
      </div>
    );
  };

export default Home; 