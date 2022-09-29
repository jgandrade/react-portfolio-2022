import React, { useState } from 'react';
import '../styles/contact.css';
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [captchaToken, setCaptchaToken] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (
            captchaToken === undefined ||
            captchaToken === '' ||
            captchaToken === null
        ) {
            return Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please tick the button for the captcha to proceed',
                showConfirmButton: false,
                timer: 1000
            });
        }

        fetch(`${import.meta.env.VITE_CAPTCHA_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                captcha: captchaToken
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === true) {
                    fetch(`${import.meta.env.VITE_FORM_URL}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: formData.name,
                            email: formData.email,
                            message: formData.message
                        })
                    }).then(res => res.json())
                        .then(dataForm => {                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your message has been sent to johnglennandrade@gmail.com',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            setFormData({
                                name: "",
                                email: "",
                                message: ""
                            });
                        });
                }
            });
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

    function onChange(value) {
        return setCaptchaToken(value);
    }
    
    return (
        <div id="contact" className='contact'>
            <h2>Connect With Me</h2>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg> johnglenn.andrade@gmail.com</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your name' required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Your email' required />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Your Message' rows="10" required />
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_SITE_KEY}
                        onChange={onChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </div>
    )
}
