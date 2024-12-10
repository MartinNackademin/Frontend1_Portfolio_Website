import React from 'react';
import {useFormik} from 'formik';
import './contact.css';
import contactIcon from './contact_icon.png';
import close from './close_icon.png';






function contactvalidate(values){
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length > 100) {
      errors.message = 'Must be 100 characters or less';
    }
  
    return errors;

}

function Contact() {

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },
      validate: contactvalidate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        ToggleContact();
      },
    });
            
    
    const [isVisible, setIsVisible] = React.useState(false);

    function ToggleContact() {
            setIsVisible(!isVisible);
            }

        return (
            <>

           <div id='contactIcon'>
           { !isVisible &&  <img src={contactIcon} 
                alt="A clickable Icon that brings up the Contact Form"
                onClick={ToggleContact}
                
                 />}
            </div>
           { isVisible && (
          
                <div id='ContactForm'>

                
                <img src={close} 
                alt="A clickable Icon that closes the Contact Form"
                onClick={ToggleContact}
                id='contactClose'
                 />
            <form onSubmit={formik.handleSubmit}noValidate >
                <label className='contactlabel' htmlFor="name">Your Name</label>
                <input
                 type="text" 
                 id="name" 
                 name="name"
                 autoComplete="on" 
                 placeholder="Your Name"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 required
                 />
                 {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                

                <label className='contactlabel' htmlFor="email">Your Email</label>
                <input
                 type="email" 
                 id="email"
                 autoComplete="on"  
                 name="email" 
                 placeholder="Your Email"
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 required
                 />
                    {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}


                <label className='contactlabel' htmlFor="message">Your Message</label>
                <textarea 
                type="text" 
                id="message" 
                name="message"
                rows="10"
                cols="30" 
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
                required
                />
                    {formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null}




                <button type="submit">Send Message</button>
            </form>

            </div>
       )}
     
        </>
          
        )
       
    }
    export { Contact };