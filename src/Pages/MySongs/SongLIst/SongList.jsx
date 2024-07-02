import React from "react";

const songs = [
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Float",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Buss Down",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "That's Me",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Double Time",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Open Up Your Eyes",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Revenge For What I Want",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
      songName: "Figment",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
      songName: "Foresee",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2023 Dark Trap",
      songName: "Figment",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap / Type Beat",
      songName: "Asteral ",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap",
      songName: "Heroes",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: " GoonyLoons |2022 Dark Trap",
      songName: "Dark Times",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap",
      songName: "On The Come Up",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2021 Dark Trap",
      songName: "WRLD",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
      songName: "Oops On Fire Prt. 2",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Chasin",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "My Gang",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Bread",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "WEDO",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Pull Up",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Trouble",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Slippin",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Purp",
      youtubeLinks: "",
      soundcloudLinks: "",
      spotifyLinks:
    },
  ];

const SongList = () => {
  const handleButtonClick = (links) => {
    if (links.length > 0) {
      const randomIndex = Math.floor(Math.random() * links.length);
      const randomLink = links[randomIndex];
      window.open(randomLink, '_blank');
    }
  };
  
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-h-[597px] max-w-96 overflow-y-auto border border-grey-200 rounded-lg p-4 bg-grey-100">
        {songs.map((song, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white">
            <img src={song.artistImage} alt={song.artistName} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div className="flex-1">
              <p className="font-bold">{song.songName}</p>
              <p className="text-gray-600">{song.artistName}</p>
            </div>
            <div className="flex gap-3">
              {song.spotifyLinks.length > 0 && (
                <button className="text-lg" onClick={() => handleButtonClick(song.spotifyLinks)}>
                  <img src="path/to/spotify-logo.png" alt="Spotify" className="w-6 h-6" />
                </button>
              )}
              {song.soundcloudLinks.length > 0 && (
                <button className="text-lg" onClick={() => handleButtonClick(song.soundcloudLinks)}>
                  <img src="path/to/soundcloud-logo.png" alt="SoundCloud" className="w-6 h-6" />
                </button>
              )}
              {song.youtubeLinks.length > 0 && (
                <button className="text-lg" onClick={() => handleButtonClick(song.youtubeLinks)}>
                  <img src="path/to/youtube-logo.png" alt="YouTube" className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  
  export default SongList;