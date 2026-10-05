import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react"; // or your icon library

const videoData = [
  {src: "../challenge-services.mp4", title: "Our Services", description:"We offer various services to our clients. Click below to view our services.", link: "/Services",buttonText: "View Services"},
  { src: "../demo-video-2.mp4", title: "About Us", description:"Discover more about us in the News page.", link: "/News", buttonText: "Discover More" },
];

export default function FloatingCard() {
  const [visible, setVisible] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  // Each video has its own source, title, description, and destination
 

  // When the card is hidden, schedule it to reappear after 2 minutes
  useEffect(() => {
    let timer;
    if (!visible) {
      timer = setTimeout(() => {
        setVisible(true);
        setVideoIndex((prev) => (prev + 1) % videoData.length);
      }, 2 * 60 * 1000);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div>
      {visible && (
        <div className="fixed bottom-6 right-1 md:right-6 h-130 w-80 bg-black shadow-lg rounded-lg p-4 z-120 transition transform">
          <button
            onClick={() => setVisible(false)}
            className="px-3 py-1 bg-gray-500 text-white float-end rounded hover:bg-blue-950"
          >
            <X />
          </button>

          <video
            width="100%"
            autoPlay
            muted
            loop
            className="w-full h-70 rounded"
          >
            <source src={videoData[videoIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h2 className="text-lg font-bold mb-2 text-white">
            {videoData[videoIndex].title}
          </h2>
          <p className="text-white mb-4">{videoData[videoIndex].description}</p>

          <Link
            to={videoData[videoIndex].link}
            className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-blue-300"
          >
            {videoData[videoIndex].buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
