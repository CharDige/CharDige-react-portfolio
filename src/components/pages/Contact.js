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
        if(!validateEmail(email)) {
            setErrorMessage("Oops! Your email doesn't appear to be valid. How about another one?")
            return;
        }

        // Check if name or message fields have any input
        if (!name || !email || !message) {
            setErrorMessage("You've missed a spot! Please fill out all fields");
            return;
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
                    Fill out and submit the below form to get into contact with me. Or, flick me an email at <a href="mailto:chardige23@gmail.com">chardige23@gmail</a>
                </p>

            </div>
        </div>
    )
}