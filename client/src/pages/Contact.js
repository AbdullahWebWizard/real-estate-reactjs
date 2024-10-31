import React from 'react'
import Layout from '../components/layout/layout'
import "../styles/contact.css"
 
const Contact = () => {
  return (
    <Layout>
    <section className='contact '>
   <div className="contact_container">
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt" />
        <div className="topic">Address</div>
        <div className="text-one">UNIVERSITY OF WAH</div>
        <div className="text-two">WAH CANTT</div>
      </div>
      <div className="phone details">
        <i className="fas fa-phone-alt" />
        <div className="topic">Phone</div>
        <div className="text-one">+0092 3135 065487</div>
        <div className="text-two">+0092 3435 949799</div>
      </div>
      <div className="email details">
        <i className="fas fa-envelope" />
        <div className="topic">Email</div>
        <div className="text-one">m.abdullah@gmail.com</div>
        <div className="text-two">m.arslan@gmail.com</div>
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text">Send us a message</div>
      <p>If you have any work from me or any types of quries , you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your message" />
        </div>
        <div className="input-box message-box">
        </div>
          <input className="button"  type="button" defaultValue="Send Now" />
        
      </form>
    </div>
  </div>
</div>

      </section>
    </Layout>
  )
}

export default Contact
