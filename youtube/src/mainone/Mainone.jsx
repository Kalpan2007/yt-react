import React, { useState, useEffect } from "react";
import "./Mainone.css";

function MainBody() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recop, setRecop] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input value
  const [searchTerm, setSearchTerm] = useState("travel vlogs"); // Default search term
  const [selectedVideoId, setSelectedVideoId] = useState(null); // Track selected video
  const [nextPageToken, setNextPageToken] = useState(null); // Track pagination
  const [videoCount, setVideoCount] = useState(8);
  const [category, setCategory] = useState("all"); // Category state

  const categories = ["All", "Coke Studio","Tmkoc", "Travel", "Education", "Sports", "Music","Gaming","Bloging"];

  // Function to fetch videos
  const fetchVideos = (query, pageToken = "") => {
    const API_KEY = "AIzaSyAKbIuBnFHdUsIen-7uQVHb0_kZW_FRJOY";

    setLoading(true);
    setError(null);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&maxResults=${videoCount}&pageToken=${pageToken}&key=${API_KEY}`
    )
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
          videoId: item.id.videoId, // Capture videoId for iframe
        }));
        setVideos((prevVideos) => [...prevVideos, ...transformedVideos]); // Append new videos
        setNextPageToken(data.nextPageToken || null); // Update nextPageToken
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Fetch videos on mount or when search term or category changes
  useEffect(() => {
    const query = category === "All" ? searchTerm : `${category} ${searchTerm}`;
    setVideos([]); // Clear videos before refetching
    fetchVideos(query);
  }, [searchTerm, videoCount, category]);

  // Fetch recommendations
  useEffect(() => {
    fetch("https://youtube-api-nmsp.onrender.com/recop")
      .then((res) => res.json())
      .then((data) => setRecop(data))
      .catch((error) =>
        console.error("Error fetching recommendations:", error)
      );
  }, []);

  // Handle search query change
  const handleSearchClick = () => {
    setVideos([]); // Clear video list before searching
    setSearchTerm(searchQuery); // Update search term to trigger video fetch
  };

  const handleVideoCountChange = (count) => {
    setVideoCount(count);
  };

  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  };

  // If videos are still loading
  if (loading && videos.length === 0) {
    return <div>Loading...</div>;
  }

  // If there's an error
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
            <button type="button" onClick={handleSearchClick}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search Icon"
              />
            </button>
          </div>
          <div className="count-buttons">
            <button
              className="count-btn"
              onClick={() => handleVideoCountChange(2)}
            >
              2
            </button>
            <button
              className="count-btn"
              onClick={() => handleVideoCountChange(4)}
            >
              4
            </button>
            <button
              className="count-btn"
              onClick={() => handleVideoCountChange(6)}
            >
              6
            </button>
          </div>
          <div className="option">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
              alt=""
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
              alt=""
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
              alt=""
            />
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
              alt=""
            />
          </div>
        </div>

        <div className="hl"></div>

        {/* Category Menu */}
        <div className="category-menu">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`category-btn ${category === cat ? "active" : ""}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hl"></div>

    
      </div>

      {/* Main Video Container */}
      <div className="main-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className="main-item"
            onClick={() => setSelectedVideoId(video.videoId)} // Set selected videoId
          >
            <img src={video.thumbnail} alt={`Thumbnail of ${video.title}`} />
            <div>
              <div className="title">
                <p>{video.title}</p>
              </div>
              <div className="Name">
                <p>Channel: {video.channel}</p>
              </div>
              <div className="vd">
                <p>Date: {video.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Iframe for selected video */}
      {selectedVideoId && (
        <div className="video-player">
          <button
            className="close-btn"
            onClick={() => setSelectedVideoId(null)} // Close the video player
          >
            ✖
          </button>
          <iframe
            className="vdplay"
            width="100%" // Adjust width to 100% of the parent container
            height="400"
            src={`https://www.youtube.com/embed/${selectedVideoId}`} // Correct iframe src
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video Player"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default MainBody;
