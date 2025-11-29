import React from 'react'
import {useWindowStore} from "#store/window.js";
import {WindowControls} from "#components/index.js";
import {WindowWrapper} from "#hoc/WindowWraper.jsx";

const Video = () => {
    const {windows} = useWindowStore();
    const data = windows.videofile?.data;

    if (!data) return null;

    const {name, videoUrl} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="videofile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {videoUrl ? (
                    <div className="w-full">
                        <video
                            src={videoUrl}
                            className="w-full h-auto max-h-[70vh] rounded-lg"
                            controls
                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

const VideoWindow = WindowWrapper(Video, "videofile");
export default VideoWindow;
