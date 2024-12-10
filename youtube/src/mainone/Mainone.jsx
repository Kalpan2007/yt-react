import { useState, useEffect } from 'react';
import './Mainone.css';

function MainContent() {
    
   

    const [videoData, setVideoData] = useState([]);


    useEffect(() => {
        fetch(`https://yt-react.onrender.com/videoData`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched video data:', data); 
          setVideoData(data); 
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);;



    const menuItems = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Coke Studio' },
        { id: 3, title: 'Case Study' },
        { id: 4, title: 'Music' },
        { id: 5, title: 'Bangla Lofi' },
        { id: 6, title: 'Tour' },
        { id: 7, title: 'Saintmartin' },
        { id: 8, title: 'Tech' },
        { id: 9, title: 'iPhone 13' },
        { id: 10, title: 'User Interface Design' },
        { id: 11, title: 'Computer' },
    ];



    return (
        <div className="main-content">
            <div className="header">
                <div className="search-bar">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="search-button">
                        <img
                            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                            alt="Search Icon"
                        />
                    </button>
                </div>

                <div className="menu-icons">
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
                        alt="Create Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
                        alt="More Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
                        alt="Notifications Icon"
                        className="menu-icon"
                    />
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
                        alt="Profile Icon"
                        className="menu-icon profile"
                    />
                </div>
            </div>
            <hr />
            <div className="horizontal-menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        {item.title}
                    </div>
                ))}
                <div className="arrow">
                    <img
                        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
                        alt="Arrow Icon"
                    />
                </div>
            </div>
            <hr />
            <div className='firstrow-container'>
                <div className="firstrow">
                    {videoData.map((video) => (
                        <div className="box" key={video.id}>
                            <div className="thumbnail">
                                <img
                                    src={video.thumbnail}
                                    alt=""
                                    className="thumbnail-img"
                                />
                            </div>
                            <div className="content">
                                <div className="logoicon">
                                    <img
                                        src={video.logo}
                                        alt={`${video.channel} Logo`}
                                        className="logo-img"
                                    />
                                </div>
                                <div className="text-content">
                                    <p className="title">{video.title}</p>
                                    <p className="channal">
                                        {video.channel}
                                        <img
                                            src={video.verified}
                                            alt="Verified Icon"
                                            className="verify"
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainContent;
