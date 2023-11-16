import React, { useState, useEffect } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { MicStartIcon, MicStopIcon } from './Icons';
import "./AudioRecorder.css";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState('');
    const [isBlocked, setIsBlocked] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const start = () => {
        if (isBlocked) {
            console.log('Permission Denied');
        } else {
            Mp3Recorder.start()
                .then(() => {
                    setIsRecording(true);
                })
                .catch((e) => console.error(e));
        }
    };

    const stop = () => {
        Mp3Recorder.stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const url = URL.createObjectURL(blob);
                setBlobURL(url);
                setIsRecording(false);
                setShowPopover(true); // Show popover after stopping recording
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        navigator.getUserMedia(
            { audio: true },
            () => {
                console.log('Permission Granted');
                setIsBlocked(false);
            },
            () => {
                console.log('Permission Denied');
                setIsBlocked(true);
            }
        );
    }, []);

    const closePopover = () => {
        setShowPopover(false);
      };

    return (
        <>
          {isRecording ? (
            <span onClick={stop}>
              <MicStopIcon />
            </span>
          ) : (
            <span onClick={start}>
              <MicStartIcon />
            </span>
          )}
    
          {showPopover && (
            <div className="popover">
              <span className="close-btn" onClick={closePopover}>
                &times;
              </span>
              <audio src={blobURL} controls="controls" />
            </div>
          )}
        </>
      );
};

export default AudioRecorder;
