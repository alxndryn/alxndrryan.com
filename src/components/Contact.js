const Contact = () => {
  return (
    <section className="container">
      <div className="landing-inner landing-inner-contact">
        <h1 id="contact" className="medium">
          Contact
        </h1>
        <p className="lead hide-sm">
          Have a question? Send me a message and I will get back to you!
        </p>
        <p className="lead hide-lg">Have a question?</p>

        <form className="form p-2 hide-sm">
          <div className="form-group">
            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              type="password"
              name="password2"
              placeholder="Message"
            />
          </div>
          <input className="btn btn-primary" value="Send" type="submit" />
        </form>
        <input
          className="btn btn-primary hide-lg"
          value="Compose"
          type="submit"
        />
      </div>
    </section>
  );
};

export default Contact;
