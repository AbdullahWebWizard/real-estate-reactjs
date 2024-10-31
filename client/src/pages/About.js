import React from 'react'
import Layout from '../components/layout/layout'
import "../styles/about.css"



const About = () => {
  return (
  <Layout>
    <div>
    <h1 className='top-info'>
    {"We believe in a world where barriers to"}
    <br />
    {"real estate ownership are removed"}
</h1>
<div>
<p className='top-info2'>
    {"We believe in a world where real estate transactions are “self-driving"}
    <br />
    {"and REALTORS® are empowered by technology."}
    </p>
</div>
<div>
  <p className='heading2'>OUR MISSION</p>
  <br></br>
  <p className='top-info3'>{"Self-driving transactions for agents, home"}
    <br />
    {"buyers and sellers"}</p>
</div>
<div className='container'>
<div className='imag1'>
  <img className='image1' src='./propy-platform (1).png'/>
  <div className='text'>
 <p className='text1'> We are automating the closing process for all real estate purchase participants to make closing faster, easier and more secure. Our products help agents and title companies migrate to closing on blockchain.</p>
  </div>
</div>
</div>
<p className='heading2'>OUR STORY</p>
<div className="container">

<br></br>
  <div className="imag1">
    <img className='image1' src="./img1.jpg"/>
  </div>
  <div className="text_">
    <p className='text1'>Real Estate, a company supported by Silicon Valley leaders and the NAR REACH technology growth program, is revolutionizing the real estate industry by deploying a novel technology.</p>
<p className='text2'> As for a real estate professional , we frustrated with how time-consuming and rife with fraud real estate transactions were.
CryptoLands was built with the vision to automate the real estate sales process. The Palo Alto-based company is writing new pages in real estate history by introducing the technology to allow entirely online and self-driving real estate transactions on smart contracts.</p>
  </div>
</div>

<p className='heading2'>OUR TEAM</p>

<div>
<h1 className='top-info'>
    {"Buy and sell homes – faster, easier"}
    <br />
    {"and more securely"}
</h1>
<p className='top-info2'>Powered by Web3 Technology</p>
</div>





    </div>


    </Layout>
 
  )
}

export default About
