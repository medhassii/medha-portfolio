import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>

        <p>
          I'm always open to discussing new opportunities, projects, and
          collaborations.
        </p>

        <div className="contact-links">
          <a href="mailto:medhasingh1399@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/medha01"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/medhassii"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;