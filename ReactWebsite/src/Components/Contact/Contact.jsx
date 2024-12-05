import React from 'react';
import {useFormik} from 'formik';
import './contact.css';

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
      },
    });
            
    
    const [isVisible, setIsVisible] = React.useState(false);

    function ShowContact() {
            setIsVisible(!isVisible);
            }

        return (
            <>
            <button onClick={ShowContact}>Contact</button>
               
           { isVisible && (
           <section >
            <h1>Chat with me!</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Your Name</label>
                <input
                 type="text" 
                 id="name" 
                 name="name" 
                 placeholder="Your Name"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 required
                 />
                 {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                

                <label htmlFor="email">Your Email</label>
                <input
                 type="email" 
                 id="email" 
                 name="email" 
                 placeholder="Your Email"
                 onChange={formik.handleChange}
                 value={formik.values.email}
                 required
                 />
                    {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}


                <label htmlFor="message">Your Message</label>
                <textarea 
                type="text" 
                id="message" 
                name="message" 
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
                required
                />
                    {formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null}




                <button type="submit">Submit</button>
            </form>

            
        </section>)}
     
        </>
          
        )
       
    }
    export { Contact };