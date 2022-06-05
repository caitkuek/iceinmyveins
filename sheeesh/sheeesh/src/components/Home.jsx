import Navbar from "./Navbar";
import axios from "axios";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <img className="home-img" src="https://i.imgur.com/WHRSdsJ.jpg" alt="nba"/>
            <h2 className="welcome">come on and slam and welcome to the jam!!</h2>
            {/* <video>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/xbVHY0hlCL0" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" 
            />
            </video> */}
            {/* <p>link to nba official site?</p>
            <p>nba official youtube?</p>
            <p>twitter?</p> */}
        </div>
    )
};

export default Home;
