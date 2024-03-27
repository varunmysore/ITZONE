import React, { useRef } from "react";
import video from "../../assets/video.mp4";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closeVideo = (e) => {
    if (e.target === player.current) setPlayState(false);
  };
  return (
    <div
      className={`videoPlayer ${playState ? "" : "hidden"}`}
      ref={player}
      onClick={closeVideo}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
