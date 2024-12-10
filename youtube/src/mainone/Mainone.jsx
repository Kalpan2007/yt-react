import React, { useState, useEffect } from "react";
import "./Mainone.css";

function MainBody() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recop, setRecop] = useState([]);
  const [searchQuery, setSearchQuery] = useState("travel vlogs");  // Add search query state

  // Fetch YouTube data based on the search query
  const fetchVideos = () => {
    const API_KEY = 'AIzaSyAlcCXP_XhhjkNPSbOuwKgp8j8q4Q-NmxY';
    const maxResults = 10;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube videos");
        }
        return res.json();
      })
      .then((data) => {
        const transformedVideos = data.items.map((item) => ({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          date: new Date(item.snippet.publishedAt).toLocaleDateString(),
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(transformedVideos);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Fetch recent recommendations (assuming this API exists on your server)
  useEffect(() => {
    fetch("https://youtube-api-nmsp.onrender.com/recop")
      .then((res) => res.json())
      .then((data) => setRecop(data))
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, []);

  // Run the fetchVideos function when the component is mounted or search query changes
  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  // Handle Search Query Change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  // Handle Search Button Click
  const handleSearchSubmit = () => {
    fetchVideos(); // Re-fetch videos based on the search query
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(); // Re-fetch videos if enter key is pressed
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mainbody">
      <div className="header">
        {/* Search Bar */}
        <div className="search-container">
          <div className="input-item">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={searchQuery}  // Bind the input field to the search query state
              onClick={handleSearchChange}  // Update state when user types
              onKeyDown={handleKeyPress}  // Trigger search on Enter key press
            />
            <button onClick={handleSearchSubmit}>Search</button>  {/* Search button */}
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
              alt="Search Icon"
            />
          </div>
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
            alt="Microphone Icon"
          />
        </div>
        <div className="option">
          {/* Option Icons */}
        </div>
        <div className="hl"></div>

        {/* Recent Recommendations */}
        <div className="yt-recent">
          <div className="yt-recent-container">
            {recop.map((op, index) => (
              <div key={index} className="yt-recent-item">
                <p>{op.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hl"></div>
      </div>

      {/* Main Video Container */}
      <div className="main-container">
        {videos.map((video, index) => (
          <div key={index} className="main-item">
            <img src={video.thumbnail} alt={`Thumbnail of ${video.title}`} />
            <div>
              <p>{video.title}</p>
              <p>Channel: {video.channel}</p>
              <p>Date: {video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainBody;
