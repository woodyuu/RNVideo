import React, { useState } from 'react'
import '../css/style.css'
import video1 from '../assets/video/약속해줘-로그인.mp4'
import video2 from '../assets/video/약속해줘-캘린더편.mp4'
import video3 from '../assets/video/약속해줘-채팅.mp4'
import video4 from '../assets/video/약속해줘-알람.mp4'
import thumbnail1 from '../assets/thumbnail/약속해줘-로그인.PNG'
import thumbnail2 from '../assets/thumbnail/약속해줘-캘린더.PNG'
import thumbnail3 from '../assets/thumbnail/약속해줘-채팅.png'
import thumbnail4 from '../assets/thumbnail/약속해줘-알람.PNG'

const VideoGallery = () => {
  const videoList = [
    { video: video1, thumbnail: thumbnail1, name: '약속해줘 - 로그인' },
    { video: video2, thumbnail: thumbnail2, name: '약속해줘 - 캘린더' },
    { video: video3, thumbnail: thumbnail3, name: '약속해줘 - 채팅' },
    { video: video4, thumbnail: thumbnail4, name: '약속해줘 - 알람' },
  ]

  const [selectedVideo, setSelectedVideo] = useState(null)

  const openVideo = (video) => {
    setSelectedVideo(video)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="video-gallery">
      {videoList.map((item, index) => (
        <div
          key={index}
          className="video-thumbnail"
          onClick={() => openVideo(item.video)}
        >
          <img
            src={item.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className='thumbnail-img'
          />        
          <p className='thumbnail-click'>Click</p>  
          <p className="thumbnail-name">{item.name}</p>
          
        </div>
      ))}
      {selectedVideo && (
        <div className="video-modal">
          <video controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
          </video>
          <button className="close-button" onClick={closeVideo}>
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoGallery