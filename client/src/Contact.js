import React, {useState} from 'react'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({name, email, subject, message})
        }

        fetch('http://localhost:3000/users/contact', options)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('Your message has been sent!');
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    alert('Opps! Something went wrong...');
                }
            })
    }
        

    return (
        <div className="Contact not-stream-component">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <span className="required">*</span>name
                <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="email">
                    <span className="required">*</span>email
                <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="subject">
                    <span className="required">*</span>subject
                <input type="text" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>
                <label htmlFor="message">
                    <span className="required">*</span>message
                <input type="textarea" rows="20" id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}