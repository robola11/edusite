import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "11b240d6-0347-4582-b959-7c1bc502c44a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
            <p>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing
                 dolor urna a orci. Vestibulum suscipit nulla quis orci. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. Etiam rhoncus. Etiam ut purus mattis mauris
                   sodales aliquam.</p>
    <ul>
        <li><img src={mail_icon} alt="" />info@oroboss.com</li>
        <li><img src={phone_icon} alt="" />+234 906 0422 440</li>
        <li><img src={location_icon} alt="" /> 182 DSC Expressway, Udu Road, Delta State</li>
    </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Phone' required />
                <label>Enter Message Here</label>
                <textarea name="message" rows='6' placeholder='Enter Message' required></textarea>
                <button type='submit' className='btn dark-btn'>SUBMIT <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact;