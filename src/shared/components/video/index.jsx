import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      playerRef.current = videojs(videoElement, {
        controls: true,
        autoplay: false,
        preload: 'auto',
        responsive: true,
        fluid: true,
      });

      return () => {
        if (playerRef.current) {
          playerRef.current.dispose();
        }
      };
    }
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
          controls
          preload="auto"
          width="640"
          height="264"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
