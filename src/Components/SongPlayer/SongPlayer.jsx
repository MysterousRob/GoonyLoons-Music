import React from "react";
import AudioPlayer from "./Audioplayer";

const songPlayerSongs = [
    {
        artistImage: "Public/pictures-2/Float.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Float",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-float?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Buss-Down.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Buss Down",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-buss-down-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/That's-Me.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "That's Me",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-thats-me?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Double-Time.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Double Time",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-double-time?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Open-Up-Your-Eyes.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Open Up Your Eyes",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-open-up-your-eyes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Revenge-For-What-I-Want.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Revenge For What I Want",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-revenge-for-what-i-want?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Foresee.png",
        artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
        songName: "Foresee",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-foresee?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Figment.png",
        artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
        songName: "Figment",
        songUrl: "https://soundcloud.com/goonyloons/goionyloons-figment?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Asteral.png",
        artistName: "GoonyLoons |2022 Dark Trap / Type Beat",
        songName: "Asteral ",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-asteral?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Heroes.png",
        artistName: "GoonyLoons |2022 Dark Trap",
        songName: "Heroes",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-heroes?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Dark Times.png",
        artistName: " GoonyLoons |2022 Dark Trap",
        songName: "Dark Times",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-enemy1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/On-The-Come Up.png",
        artistName: "GoonyLoons |2022 Dark Trap",
        songName: "On The Come Up",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-on-the-come-up-new-809?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/WRLD.png",
        artistName: "GoonyLoons |2021 Dark Trap",
        songName: "WRLD",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-kings-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Oops-On-Fire-Prt-2.png",
        artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
        songName: "Oops On Fire Prt. 2",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-oops-on-fire-prt-2-lil-loaded-type-beat?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/MTN-DEW.png",
        artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
        songName: "MTN DEW",
        songUrl: "https://soundcloud.com/goonyloons/fire-free-goonyloons-mtn-dew?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Chasin.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Chasin",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-goonyloons-chasin-with-808-pauses-mastered?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/My-Gang.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "My Gang",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-my-gang-3?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Bread.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Bread",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-bread2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/WEDO.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "WEDO",
        songUrl: "https://soundcloud.com/goonyloons/vabistru-wedo?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Pull-Up.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Pull Up",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-pull-up?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Trouble.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Trouble",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-trouble-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Slippin.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Slippin",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-slippin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        artistImage: "Public/pictures-2/Purp.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Purp",
        songUrl: "https://soundcloud.com/goonyloons/goonyloons-purp?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
]

const SongPlayer = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-h-[700px] max-w-[850px] overflow-y-auto border border-grey-200 rounded-lg p-4 bg-grey-100">
        {songPlayerSongs.map((songPlayerSongs, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white">
            <div className="flex items-center w-full">
            <img src={songPlayerSongs.artistImage} alt={songPlayerSongs.artistName} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div className="flex-1">
              <p className="font-bold">{songPlayerSongs.songName}</p>
              <p className="text-gray-600">{songPlayerSongs.artistName}</p>
            </div>
          </div>
          <AudioPlayer src={songPlayerSongs.songUrl}/>
          </div>
        ))}
        </div>
      </div>
    )
  };

export default SongPlayer;