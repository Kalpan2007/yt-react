import './Sidebar.css'


function Sidebar() {
    const subscriptions = [
        { id: 1, title: "Nadir On the go", imgurl: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" },
        { id: 2, title: "Coke Studios", imgurl: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" },
        { id: 3, title: "MKBHD", imgurl: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" },
        { id: 4, title: "Figma", imgurl: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" },
    ];




    return (
        <>
            <div className="sidebar">
                <div className="logopart">
                    <div>
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" />
                    </div>
                    <div className="logo">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" />
                    </div>
                </div>
                <div className="part2">
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Home
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Explores
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Shorts
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Subscription
                        </div>
                    </div>
                </div>
                <hr className='hr' />
                <div className="part3">
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Liked Videos
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Library
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            History
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Your Videos
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            Watch Later
                        </div>
                    </div>
                    <div className="part2item">
                        <div>
                            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" />
                        </div>
                        <div className="part2t">
                            View More
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="part4"></div>
                <h4 className="part4h">
                    SUBSCRIPTION
                </h4>
                <div className="subscriptions-container">
                    {subscriptions.map((sub) => (
                        <div className="subs" key={sub.id}>
                            <img src={sub.imgurl} alt={sub.title} />
                            <div className="substext">{sub.title}</div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Sidebar;