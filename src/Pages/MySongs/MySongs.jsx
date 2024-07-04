import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SongList from "../MySongs/SongLIst/SongList"; 

function MySongs() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl text-center font-bold">My Songs</h1>
      </div>
      <div className="pb-10">
            <SongList />
        </div>
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default MySongs;
