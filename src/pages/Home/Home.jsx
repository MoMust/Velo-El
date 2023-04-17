import React from 'react'
import './Home.scss'
const Home = () => {

  const myVideo = document.getElementById("video1"); 

  function playPause() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  } 
  return (
    <div className="home">
      <div>
        <video className="videoTag" autoPlay loop muted>
          <source
            className="source"
            src="assets/videos/velo-electric-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ullam cumque quia nisi. Placeat sit, repellendus optio excepturi quasi eius id laboriosam unde obcaecati sed? Dolorem adipisci, voluptatum obcaecati earum reprehenderit pariatur, corrupti nihil est amet culpa tempore aliquid aliquam delectus doloribus perferendis, dignissimos consectetur provident nesciunt repellendus odit deserunt assumenda? Nesciunt distinctio sit laborum unde sed officia ipsam perferendis earum ab ad fugiat rerum ipsum at ipsa error voluptatem, architecto exercitationem quidem, repellendus, recusandae cum laboriosam? Dolor delectus, labore alias aspernatur ducimus rerum doloremque omnis a similique molestias porro reiciendis nostrum eum saepe asperiores, cum consequuntur at. Similique, rerum.</p>
    </div>
  );
}

export default Home