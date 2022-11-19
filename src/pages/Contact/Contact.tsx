import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PublicIcon from '@mui/icons-material/Public';
import './Contact.scss';

const Contact = () => {
    const [state, handleSubmit] = useForm("xbjbyvqk");
    if (state.succeeded) {
        return <p id="formText">Thanks for submitting!</p>;
    }
    return (
        <div className="con-container">
            <h2 id="text">Contact us</h2>
            <div className="contact-content">
                <div className="links">
                    <h3>Information</h3>
                    <div className="link__item">
                        <div className="icon">
                            <AddLocationAltIcon />
                        </div>
                        <div className="information">
                            <span>Adress</span>
                            <p>ul. NNN, Gdansk 00-000</p>
                        </div>
                    </div>
                    <div className="link__item">
                        <div className="icon">
                            <LocalPhoneIcon />
                        </div>
                        <div className="information">
                            <span>Phone</span>
                            <p>+48 729 368 168</p>
                        </div>
                    </div>
                    <div className="link__item">
                        <div className="icon">
                            <AttachEmailIcon />
                        </div>
                        <div className="information">
                            <span>Email</span>
                            <p>support@enqluence.com</p>
                        </div>
                    </div>
                    <div className="link__item">
                        <div className="icon">
                            <PublicIcon />
                        </div>
                        <div className="information">
                            <span>Website</span>
                            <p>std.enqluence.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <h3>Get in Touch</h3>
                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <input
                            type="text"
                            name="subject"
                            autoComplete="subject"
                            placeholder="Subject"
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            placeholder="Message"
                        />
                        <button className="btn" type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;