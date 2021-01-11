import React from 'react';
//import { IconContext } from "react-icons";
//import { FaGithub, FaReact, FaFacebook } from "react-icons/fa";

// import { render } from "react-dom";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '../css/style.css';

function Central() {
  return (
    <div>
      {/* <!-- Main page --> */}

      <div class="welcome-content">
        <h1>WellCome to the StartUP Team</h1>
        <hr></hr>
        <p>For all your professional web designing and development</p>
      </div>

      {/* <!-- first section --> */}

      <div id="container">
        <div class="grid-boxes">

          <div class="grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAX8mMzrPY6fvqdLsC_QNLaakpUx22CnN6cA&usqp=CAU" alt="" class="w-100"></img>
            <h4>Amazing. Incredible</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Innovation</a>
          </div>

          <div class="grid-box">
            <img src="https://d1t2cyxhsn73kx.cloudfront.net/image/article/teamwork.jpg" alt="" class="w-100"></img>
            <h4>Incredible how we work</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Story</a>
          </div>

          <div class="grid-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDlvgZ2dp9P70KYHluP4qPHdKdeI_0nsXHg&usqp=CAU" alt="" class="w-100"></img>
            <h4>Incredible Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum expedita est asperiores at nobis eligendi corporis repellendus natus distinctio!</p>
            <a href="#" class="btn">Our Vision</a>
          </div>

        </div>
      </div>

      <hr class="horizonal"></hr>
      
      {/* <!-- port --> */}

      <div class="port">
        <h1>portfolio</h1>
        <p class="port-text"><strong>Our Team of expert can help you bring your ideas in to light!</strong></p>
      </div>

      {/* <!-- Boxes div --> */}

      <div class="boxes">

        <div class="box">
          <img src="https://cdn.mos.cms.futurecdn.net/jgXYNK8U4o4itGBBMRtCKa-1200-80.jpg" alt="" width="350px" height="200px"></img>
          <h3>Analytics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>

        <div class="box">
          <img src="https://timesbusinessworld.com/wp-content/uploads/2019/09/Business-Marketing0.jpg" alt="" width="350px" height="200px"></img>
          <h3>Marketing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>

        <div class="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKfT5VH2ZnqIk34Szx0sKBwgTJef9bAYuOog&usqp=CAU" alt="" width="350px" height="200px"></img>
          <h3>Development</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</p>
        </div>

        <div class="box">
          <img src="https://www.practicalparenting.com.au/media/12522/01_03_19-pitbull-landscape.jpg" alt="" width="350px" height="200px"></img>
          <h3>Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
        </div>
      </div>

      <hr class="horizonal"></hr>

      <div className="head-text">
        <h2>We built all what you need, quality web Design and development Services?</h2>
        <p class="port-text"><strong>Here is some of the best web languages, framwork/libarary and designing we used</strong></p>
      </div>
      
      <div class="columns-container">

        <div class="flex-columns">
        <img src="https://img.icons8.com/ios-filled/100/000000/jquery.png"
            alt="" width="100px" class="general-icon"></img>
          <p><strong>Jquery</strong></p>
        </div>

        <div class="flex-columns">
          <img src="https://img.icons8.com/nolan/100/react-native.png"
            alt="" class="general-icon"></img>
          <p><strong>Reactjs</strong></p>
        </div>

        <div class="flex-columns">
          <img src="https://img.icons8.com/color/100/000000/nodejs.png"
            alt="" class="general-icon"></img>
          <p><strong>Nodejs</strong></p>
        </div>

        <div class="flex-columns">
          <img src="https://img.icons8.com/color/100/000000/javascript-logo-1.png"
            alt="" class="general-icon"></img>
          <p><strong>Javascript</strong></p>
        </div>

        <div class="flex-columns">
          <img src="https://img.icons8.com/nolan/100/html-5.png"
            alt="" class="general-icon"></img>
          <p><strong>HTML5</strong></p>
        </div>

        <div class="flex-columns">
          <img src="https://img.icons8.com/color/100/000000/css3.png"
            alt="" class="general-icon"></img>
          <p><strong>CSS3</strong></p>
        </div>

        <div class="flex-columns">
        <img src="https://img.icons8.com/color/100/000000/mongodb.png"
          alt="" class="general-icon"></img> 
          <p><strong>MongoDB</strong></p>
        </div>

        <div class="flex-columns">
        <img src="https://img.icons8.com/nolan/100/mysql.png"
          alt="" class="general-icon"></img> 
          <p><strong>mySql</strong></p>
        </div>

        <div class="flex-columns">
        <img src="https://img.icons8.com/color/100/000000/adobe-photoshop.png"
          alt="" class="general-icon"></img> 
          <p><strong>Photoshop</strong></p>
        </div>

        <div class="flex-columns">
        <img src="https://img.icons8.com/windows/100/4a90e2/figma.png"
          alt="" class="general-icon"></img> 
          <p><strong>Figma</strong></p>
        </div>

      </div>
    </div>
  );
}

export default Central;