import React from "react";

const songs = [
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Float",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Buss Down",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "That's Me",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Double Time",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Open Up Your Eyes",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap",
      songName: "Revenge For What I Want",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
      songName: "Figment",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
      songName: "Foresee",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2023 Dark Trap",
      songName: "Figment",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap / Type Beat",
      songName: "Asteral ",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap",
      songName: "Heroes",
    },
    {
      artistImage: "",
      artistName: " GoonyLoons |2022 Dark Trap",
      songName: "Dark Times",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2022 Dark Trap",
      songName: "On The Come Up",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2021 Dark Trap",
      songName: "WRLD",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
      songName: "Oops On Fire Prt. 2",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Chasin",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "My Gang",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Bread",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "WEDO",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2020 Dark Trap",
      songName: "Pull Up",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Trouble",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Slippin",
    },
    {
      artistImage: "",
      artistName: "GoonyLoons |2019 Dark Trap",
      songName: "Purp",
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
    const spotifyLinks = [
        //link 1 (Bread)
        "https://open.spotify.com/track/5N4GRyheBdS1XiwaRwoEd5?si=ee0ab4cfa4184df1",
        //link 2 (slippin)
        "https://open.spotify.com/track/7d7vx7ovlfrcdgoLEqYIO3?si=273bbf4719754535",
        //link 3 (wedo)
        "https://open.spotify.com/track/5LzZe7tfWxK0bgDalpF7LO?si=0675eef288cd4f33",
        //link 4 (trouble)
        "https://open.spotify.com/track/1A5pKUYSP2Fsy7UANPbNPr?si=821cd983dcb94b6e",
        //link 5 (Pull Up)
        "https://open.spotify.com/track/22ovKyKU6cWa2NEENj55uG?si=4da5846db73f432e",
        //link 6 (My Gang)
        "https://open.spotify.com/track/0HuM9NAGqUoUh433Fpy7cH?si=a4bb7a7a958440c3"
    ];
    const soundCloudLinks = [
        //link 1 (Float)
    "https://soundcloud.com/goonyloons/goonyloons-float?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link  2 (Buss Down)       
    "https://soundcloud.com/goonyloons/goonyloons-buss-down-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 3 (That's Me)
    "https://soundcloud.com/goonyloons/goonyloons-thats-me?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 4 (DOUBLE TIME)
    "https://soundcloud.com/goonyloons/goonyloons-double-time?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 5 (Open Up Your Eyes)
    "https://soundcloud.com/goonyloons/goonyloons-open-up-your-eyes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 6 (Revenge For What I Want)
    "https://soundcloud.com/goonyloons/goonyloons-revenge-for-what-i-want?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 7 (Foresee | 2024 Type Beat)
    "https://soundcloud.com/goonyloons/goonyloons-foresee?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link 8 (Figment)
    "https://soundcloud.com/goonyloons/goionyloons-figment?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link  9 (Asteral)
    "https://soundcloud.com/goonyloons/goonyloons-asteral?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   10 (Heroes)
    "https://soundcloud.com/goonyloons/goonyloons-heroes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   11 (Dark Times)
    "https://soundcloud.com/goonyloons/goonyloons-enemy1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   12 (On The Come Up)
    "https://soundcloud.com/goonyloons/goonyloons-on-the-come-up-new-809?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   13 (WRLD)     
    "https://soundcloud.com/goonyloons/goonyloons-kings-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   14 ("Oops On Fire Prt. 2" 2020)      
    "https://soundcloud.com/goonyloons/goonyloons-oops-on-fire-prt-2-lil-loaded-type-beat?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   15 (MTN DEW)      
    "https://soundcloud.com/goonyloons/fire-free-goonyloons-mtn-dew?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   16 (Chasin)      
    "https://soundcloud.com/goonyloons/goonyloons-goonyloons-chasin-with-808-pauses-mastered?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   17 (My Gang)      
    "https://soundcloud.com/goonyloons/goonyloons-my-gang-3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   18 (Bread)      
    "https://soundcloud.com/goonyloons/goonyloons-bread2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   19 (WEDO)      
    "https://soundcloud.com/goonyloons/vabistru-wedo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   20 (Pull Up)      
    "https://soundcloud.com/goonyloons/goonyloons-pull-up?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   21 (Trouble)      
    "https://soundcloud.com/goonyloons/goonyloons-trouble-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   22 (Slippin)      
    "https://soundcloud.com/goonyloons/goonyloons-slippin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        //link   23 (Purp)      
    "https://soundcloud.com/goonyloons/goonyloons-purp?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    ];
    const youtubeLinks = {
      mainChannelLink: {
        linksToChannels: [
            "https://www.youtube.com/@goonyloons7885",
            "https://www.youtube.com/channel/UChlg3jHzi3bf1SlxF24ag0w"
        ],
        link1Links: [
          //link 1 (MTN DEW)
          "https://www.youtube.com/watch?v=V-1i24bsbC4",
          //link 2 (Trouble)
          "https://www.youtube.com/watch?v=O-8sd1UfWmA",
          //link 3 (Slippin)
          "https://www.youtube.com/watch?v=vuytYdi7krM"
        ],
        link2Links: [
         //link 1 (Purp)
         "https://www.youtube.com/watch?v=9VhTVoXUwrQ&list=OLAK5uy_mktc1OdsmlphSoeoBWQYvN9Eeq0vpRyYI",
         //link 2 (Slippin)
         "https://www.youtube.com/watch?v=5yWb7sz_SM0&list=OLAK5uy_moC0jCK01bTkDWIl4qQhGmdOdswf1Kj9U",
         //link 3 (Trouble)
         "https://www.youtube.com/watch?v=x7f-CINJSlc&list=OLAK5uy_nOsOy-UguViYH1QpaDIRY82ViZZ24Vnnw",
         //link 4 (Bread)
        " https://www.youtube.com/watch?v=FKFuufwaOG0&list=OLAK5uy_n3naiA5pulPkOJAMjNpu-aEArHRrtxcn0",
         //link 5 (Wedo)
         "https://www.youtube.com/watch?v=60y6id1d5HU&list=OLAK5uy_lUv6bY_gNpYxMcEzs77Ycnt2X6q6mbyxA",
         //link 6 (My Gang)
         "https://www.youtube.com/watch?v=TyAqrpxKMhU&list=OLAK5uy_n2BcgkSnuNYbiVoCxIDfInXqsu0UqwJ_I",
         //link 7 (Pull Up)
         "https://www.youtube.com/watch?v=aZUQTH5hYRw&list=OLAK5uy_kf-zVr9NCeNhnuTvwciS-paCO9N9Of9cU"
        ]
    }

  };
  
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-h-[597px] max-w-96 overflow-y-auto border border-grey-200 rounded-lg p-4 bg-grey-100">
          {songs.map((song, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-grey-300 rounded-lg bg-white"
            >
              <img
                src={song.artistImage}
                alt="artist-image"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <p className="font-bold">{song.artistName}</p>
                <p className="text-gray-600">{song.songName}</p>
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