// VideoPlayer.js
import React from 'react';

const getVideoIdFromUrl = (url) => {
  // Extract the video ID from the URL
  const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

  if (videoIdMatch) {
    return videoIdMatch[1];
  }

  // Return null if the URL is not a valid YouTube video URL
  return null;
};

const VideoPlayer = ({ videoUrl }) => {
  // Get the video ID from the URL
  const videoId = getVideoIdFromUrl(videoUrl);

  if (!videoId) {
    // Handle invalid video URL
    return <div className="invalid-video">Invalid YouTube video URL</div>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        className='iframe'
        title="YouTube Video"
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
