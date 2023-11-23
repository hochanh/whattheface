import React, {useEffect} from 'react'

const AppStreamCam = () => {

    const streamCamVideo = () => {
        var constraints = {audio: true, video: {width: 1280, height: 720}};
        // @ts-ignore
        navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (mediaStream) {
                const video = document.querySelector("video");
                if (!video) {
                    return
                }

                video.srcObject = mediaStream;
                video.onloadedmetadata = function (e) {
                    video.play();
                };
            })
            .catch(function (err) {
                console.log(err.name + ": " + err.message);
            }); // always check for errors at the end.
    }

    useEffect(() => {
        streamCamVideo()
    }, [])

    return (
        <div>
            <video autoPlay={true} id="videoElement"></video>
        </div>
    );
}

export default AppStreamCam
