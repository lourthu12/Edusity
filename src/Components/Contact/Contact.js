import React from 'react'
import './Contact.css'
import msg_icon from "../../Assets/msg-icon.png";
import mail_icon from "../../Assets/mail-icon.png";
import phone_icon from "../../Assets/phone-icon.png";
import location_icon from "../../Assets/location-icon.png";


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b92dcdf8-7417-4546-ae07-f5d75ef39602");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Send Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className='contact-col'>
           <h3>Send us a message <img src={msg_icon} alt='' /></h3>
           <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
           <ul>
            <li><img src={mail_icon} alt=''/>Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
            <li><img src={location_icon} alt=''/>77 Massachusetts Ave, Cambridge
MA 02139, United States</li>
           </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter Your name' required />
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your mobile number' required />
                <label>Write your message here</label>
                <textarea name='messgae' id=''  rows = "6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact

