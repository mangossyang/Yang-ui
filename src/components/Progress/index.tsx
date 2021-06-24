

import React, { useState } from 'react'
import './progress.css'
let totalTime = 3000

const Progress: React.FC = () => {
    const [isPlay, setIsPlay] = useState(false) //是否播放
    const [count, setCount] = useState(0)
    const [type, setType] = useState(0)

    const handleVideo = () => setIsPlay(!isPlay)
    //重播
    const replay = ()=>{
        setIsPlay(true)
        setType(type?0:1)
    }
    const end = () => {
        setCount(count+1)
        replay()
    }
    return (
        <>
            <button onClick={handleVideo}>{isPlay ? '暂停' : '播放'}</button>
            <button onClick={replay}>重播</button>
            <span>{`播放次数为：${count}`}</span>
            <div className="container">
                <div
                    className={`progress ${isPlay ? 'play' : 'pause'}`}
                    style={{
                        animationDuration: `${totalTime}ms`,
                        animationName: `${type ? 'replay' : 'play'}`
                    }}
                    onAnimationEnd={end}  // 动画结束时的事件
                />
            </div>
        </>
    )
}

export default Progress