
            <ul className="song-list">
            {/* {currentAudioList.length ? (
                currentAudioList
                    .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let songName = item.title.toLowerCase();
                    return songName.startsWith(filter.toLowerCase());
                    })

                    .map((item, index) => ( */}

                    <li
                        className="audio-ls-container flex"

                        // onClick={() => {

                        // onTrackSelect(index);

                        // console.log(index);

                        // }}
                    >
                        <div className="audio-img">
                        <img src={`${baseURL}/${item.avatar}`} alt="" />
                        </div>

                        <div className="audio-info">
                        <p>{item.title}</p>
                        <p>{item.artist}</p>
                        </div>
                    </li>

                    {/* )) */}
            ) : (
            <div style={{ textAlign: "center" }}>No audio avaiable</div>
            )}
  </ul>









                {/* <SongRow index={index} title={item.title}></SongRow> */}

{/* {songInfo.track.artists[0]} */}
<img src={songInfo.track.album.images[0].url} className="songAvt" alt="" />
{/* {console.log("❤❤",songInfo)} */}
<div className="songInfo">
    <div className="songName">
       <h1> {songInfo.track.name} </h1>
    </div>
    <div className="artists">
        {songInfo.track.artists.map(item =>item.name).join(", ")}
        {" "}- {" "}  
        {songInfo.track.album.name}
    </div>