import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";


function App() {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVideoVisible(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsVideoVisible(false);
  };

  return (
    <div className="App h-screen bg-heart bg-cover bg-center flex flex-col items-center gap-24 justify-center">
      <div className="text-2xl bg-pink-700 p-2 rounded-lg text-white">
        <button onClick={handleButtonClick}>
          nidaa 🥰
        </button>
      </div>
      <div className="text-center">
        <img
          src="/assets/nida.png"
          alt="Trees"
          className="shadow-custom rounded-lg"
          style={{ height: "300px" }}
        />
      </div>
      <div className="text-2xl bg-pink-700 p-2 rounded-lg text-white">
        <button onClick={handleButtonClick}>
          tıkla bakalım entebin hemami 🤓
        </button>
      </div>

      {isVideoVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsVideoVisible(false)}
        >
          <div className="relative">
            <ReactPlayer url="https://www.youtube.com/watch?v=l7vcZhzyXcE" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
