import React, { useState } from 'react';
import '../styles/contact.css';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        alert('Email Sent');
    }

    function handleChange(e) {
        const { name, value } = e.target;
        return setFormData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return (
        <div id="contact" className='contact'>
            <h2>Connect With Me</h2>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg> johnglenn.andrade@gmail.com</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your name' required></input>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your email' required></input>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Your Message' rows="10" required></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
