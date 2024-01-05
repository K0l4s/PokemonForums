import React, { useEffect, useState } from 'react'
import './Youtube.css'
type Props = {}

const Youtube = (props: Props) => {
    const [subscriberCount,setSubscriberCount] = useState(0);
    const [viewCount, setViewCount] = useState(0);
    const [videoCount, setVideoCount] = useState(0);
    const getYoutubeInf = async () => {
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/channels?id=UC0YtzXrJfoPtKrsX_AXWLcg&part=statistics&key=AIzaSyDV3nQV8FvWzsgrCZDB1KvP8Mj3U4sRNMo');
            const data = await response.json();
            setSubscriberCount(data.items[0].statistics.subscriberCount);
            setViewCount(data.items[0].statistics.viewCount);
            setVideoCount(data.items[0].statistics.videoCount);
            // console.log(subscriberCount);
        }catch (error) {
        }
    }
    useEffect(() => {
        getYoutubeInf();
    }, [])
  return (
    <div>
        <h1>Youtube</h1>
        <p>Subscribers: {subscriberCount}</p>
        <p>Views: {viewCount}</p>
        <p>Videos: {videoCount}</p>
        <a href='https://youtube.com/@PokedexVina?si=r7DqAV4u49RAwKxD'><button>Subscribe</button></a>
        {/* Tự động nhúng hết tất cả video có trên kênh */}
        <h1>Video nổi bật</h1>
        <div className="videoList">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oev-hlYofKo?si=AKvePpyMelgyo1PW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
    </div>
  )
}

export default Youtube