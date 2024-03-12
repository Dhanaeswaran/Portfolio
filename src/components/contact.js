import { useRef } from 'react';
import '../cssfile/contact.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contacttran } from '../transation/textvarient';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(new Promise((resolve, reject) => {
      emailjs
        .sendForm('service_b0v6yn', 'template_f5siyll', form.current, {
          publicKey: 'h8Kh0efsU_ENOEwCp',
        })
        .then(
          () => {
            resolve();
          },
          (error) => {
            reject();
            console.log('FAILED...', error.text);
          },
        );    
    }),
    {
      pending: "Loding.....",
      success: "Mail Successfully send",
      error: "Error occured",
    });
    
      };
    return ( 
        <div className="contact" id='content'>
            <motion.div
                initial='hidden'
                whileInView='show'
                variants={contacttran()}
                className='contactform'
                viewport={{ once : true,}}
            >
                <form ref={form} onSubmit={sendEmail}>
                    <div className="contacttitle">
                    <h1>CONTACT</h1>
                    </div>
                    <div className="contactpadding">
                        <div className="field">
                            <label>Name : </label>
                            <br/>
                            <input type="text" name='user_name' placeholder="What's your name?"/>
                        </div>
                        <div className="field">
                            <label>Email :  </label>
                            <br/>
                            <input type="text" name='user_email' placeholder="What's your Email?"/>
                        </div>
                        <div className="field">
                            <label>Message : </label>
                            <br/>
                            <textarea type="text" name='message' placeholder="Enter the message"/>
                        </div>
                        <div className="contactbutton">
                            <button className='contactbtn themesecound' type='submit'>Send</button>
                        </div>
                    </div>
                </form>
            </motion.div>
            <ToastContainer
            autoClose = {3000}
            theme='dark'
            pauseOnFocusLoss = {false}/>
        </div>
     );
}
 
export default Contact;