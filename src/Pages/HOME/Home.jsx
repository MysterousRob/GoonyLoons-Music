import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import SongManager from '../MySongs/SongManager/SongManager';
import { Nav1 } from '../../State/Nav'
import Footer from '../../Components/Footer/Footer';
import SongList from "../MySongs/SongLIst/SongList";  

const Home = () => {
    const [songs, setSongs] = useState([]);

    const updateSongs = (updatedSongs) => {
      setSongs(updatedSongs);
    };
  
    return (
      <div>
          <div className='relative'>
              <Header />
          </div>
          <div>
            <SongList />
          </div>
          <div className='relative bottom-0 w-full'>
              <Footer />
          </div>
      </div>
    )
  };

export default Home; 