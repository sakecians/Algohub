import React, { useState, useEffect,useContext } from "react";
import ReactPlayer from "react-player";
import { AlgorithmContext } from "../../context/Algorithm.context";

function VideoPlayer() {

const {algorithm} = useContext(AlgorithmContext);

const [videoUrl, setVideoUrl] = useState("bubble");

const videos = ()=>{
    if (algorithm === 'bubble'){
        setVideoUrl("https://youtu.be/wjUDU5dryes");
    }
    if (algorithm === 'merge'){
        setVideoUrl("https://youtu.be/upuopofDb2Q");
    }
    if (algorithm === 'quick'){
        setVideoUrl("https://youtu.be/rzAUr856LW8");
    }
    if (algorithm === 'radix'){
        setVideoUrl("https://youtu.be/upuopofDb2Q");
    }
}

useEffect(() => {
    videos();
})


  return (
    <div>
      <ReactPlayer
        url={videoUrl}
      />
    </div>
  )
}

export default VideoPlayer;