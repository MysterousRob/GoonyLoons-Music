import React from "react";

const songPlayerSongs = [
    {
        artistImage: "Public/pictures-2/Float.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Float",
      },
      {
        artistImage: "Public/pictures-2/Buss-Down.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Buss Down",
      },
      {
        artistImage: "Public/pictures-2/That's-Me.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "That's Me",
      },
      {
        artistImage: "Public/pictures-2/Double-Time.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Double Time",
      },
      {
        artistImage: "Public/pictures-2/Open-Up-Your-Eyes.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Open Up Your Eyes",
      },
      {
        artistImage: "Public/pictures-2/Revenge-For-What-I-Want.png",
        artistName: "GoonyLoons |2024 Dark Trap",
        songName: "Revenge For What I Want",
      },
      {
        artistImage: "Public/pictures-2/Foresee.png",
        artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
        songName: "Foresee",
      },
      {
        artistImage: "Public/pictures-2/Figment.png",
        artistName: "GoonyLoons |2024 Dark Trap / Type Beat",
        songName: "Figment",
      },
      {
        artistImage: "Public/pictures-2/Asteral.png",
        artistName: "GoonyLoons |2022 Dark Trap / Type Beat",
        songName: "Asteral ",
      },
      {
        artistImage: "Public/pictures-2/Heroes.png",
        artistName: "GoonyLoons |2022 Dark Trap",
        songName: "Heroes",
      },
      {
        artistImage: "Public/pictures-2/Dark Times.png",
        artistName: " GoonyLoons |2022 Dark Trap",
        songName: "Dark Times",
      },
      {
        artistImage: "Public/pictures-2/On-The-Come Up.png",
        artistName: "GoonyLoons |2022 Dark Trap",
        songName: "On The Come Up",
      },
      {
        artistImage: "Public/pictures-2/WRLD.png",
        artistName: "GoonyLoons |2021 Dark Trap",
        songName: "WRLD",
      },
      {
        artistImage: "Public/pictures-2/Oops-On-Fire-Prt-2.png",
        artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
        songName: "Oops On Fire Prt. 2",
      },
      {
        artistImage: "Public/pictures-2/MTN-DEW.png",
        artistName: "GoonyLoons |2020 Dark Trap / Type Beat",
        songName: "MTN DEW",
      },
      {
        artistImage: "Public/pictures-2/Chasin.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Chasin",
      },
      {
        artistImage: "Public/pictures-2/My-Gang.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "My Gang",
      },
      {
        artistImage: "Public/pictures-2/Bread.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Bread",
      },
      {
        artistImage: "Public/pictures-2/WEDO.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "WEDO",
      },
      {
        artistImage: "Public/pictures-2/Pull-Up.png",
        artistName: "GoonyLoons |2020 Dark Trap",
        songName: "Pull Up",
      },
      {
        artistImage: "Public/pictures-2/Trouble.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Trouble",
      },
      {
        artistImage: "Public/pictures-2/Slippin.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Slippin",
      },
      {
        artistImage: "Public/pictures-2/Purp.png",
        artistName: "GoonyLoons |2019 Dark Trap",
        songName: "Purp",
      },
]

const SongPlayer = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full max-h-[700px] max-w-[850px] overflow-y-auto border border-grey-200 rounded-lg p-4 bg-grey-100">
        {songPlayerSongs.map((songPlayerSongs, index) => (
          <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white">
            <img src={songPlayerSongs.artistImage} alt={songPlayerSongs.artistName} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div className="flex-1">
              <p className="font-bold">{songPlayerSongs.songName}</p>
              <p className="text-gray-600">{songPlayerSongs.artistName}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  };

export default SongPlayer;