import React from 'react'
import background from '../images/background.mp4'

const Background = () => (
    <video autoPlay="autoplay" loop="loop" className="video_background" preload="auto" volume="0">
        <source src={background} type="video/mp4" />
    </video>
)

export default Background