const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideo = () => {
  navigator.mediaDevices.getUserMedia({ video: false, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(error => {
      console.log(error);
    })
};

const paintToCanvas = () => {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 16)
};

const takePhoto = () => {
  //played the sound
  snap.currentTime = 0;
  snap.play();

  //take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
};

getVideo();

video.addEventListener('canplay', paintToCanvas);
