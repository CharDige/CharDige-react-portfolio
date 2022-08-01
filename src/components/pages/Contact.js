import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    // Variables for form fields and making their initial values and empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Handling the input value to trigger the change
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on input, we set the state of the input
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    // Handle the form submission
    const handleFormSubmit = (e) => {
        // Prevent the default behaviour
        e.preventDefault();

        // Validate the email
        if (!validateEmail(email)) {
            setErrorMessage("Oops! Your email doesn't appear to be valid. How about another one?")
            return;
        } else {
            setErrorMessage('');
        }

        // Check if name or message fields have any input
        if (!name || !email || !message) {
            setErrorMessage("You've missed a spot! Please fill out all fields");
            return;
        } else {
            setErrorMessage('');
        }

        // Log to the console that it's been submitted
        console.log('Form submitted!');

        // Clear out the input field after submitted
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='row' id='margin-style'>
            <div className='col-12 col-md-3'>
                <h2 className='heading-style'>
                    Contact
                </h2>
            </div>

            <div className='col-12 col-md-9 left-border'>
                <p>
                    Got a challenge I can help with, a question about my coding skills, or maybe you just want to ask about my favourite book?
                    <br></br>
                    <br></br>
                    Fill out and submit the below form to get into contact with me. Or, flick me an email at <a href="mailto:chardige23@gmail.com">chardige23@gmail.com</a>
                </p>

                <form className='form-margin'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label label-style">Your name</label>
                        <input value={name} name="name" onChange={handleInputChange} type="text" className="form-control input-style" id="name" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label label-style">Email</label>
                        <input value={email} name="email" onChange={handleInputChange} type="email" className="form-control input-style" id="email" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label label-style">Your message</label>
                        <input value={message} name="message" onChange={handleInputChange} type="text" className="form-control input-style" id="message" placeholder='Message' />
                    </div>
                    <button type="button" className="btn btn-style" onClick={handleFormSubmit}>Submit</button>
                </form>

                {errorMessage && (
                    <div>
                        <p className="error">{errorMessage}</p>
                    </div>   
                )}
            </div>
        </div>
    )
}