import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Form = () => {
    const [state, setState] = useState({})
    const [sent, setSent] = useState(false);
    
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
              'form-name': form.getAttribute('name'),
              ...state,
            }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
        
        setSent(true)

      }

    //TODO error checking successful submit
    if (sent) {
      return (
        <section className="contact-form">
          
          <h2>Thanks for reaching out!</h2>
          <button className="send-again-btn" onClick={() => setSent(false)}>Send another</button>

        </section>
        );
    } else {

      return (
        <section className="contact-form">
          <form
            name="contact"
            className="form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p className='form-input less-pad'>
              <label>
                Name:
                        <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p className='form-input'>
              <label>
                Email:
                        <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p className='form-input'>
              <label>
                Leave a Message:
                        <br />
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p className='form-submit'>
              <button className="submit-btn" type="submit">Send</button>
            </p>
          </form>
        </section>
      );
    }
}

export default Form
