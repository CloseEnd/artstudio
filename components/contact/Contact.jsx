import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact me</h1>
      <p>
        Drop me a message for inquires about any art projects you would like or
        any other businesses.
      </p>
      <div className={styles.contactcontainer}>
        <div className={styles.form}>
          <form action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name..."
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter subject..."
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter subject..."
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message..."
              required
            ></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
        <div className={styles.info}>
          <p>whatsapp: +256728295086</p>
          <p>Email: closeend@gmail.com</p>
          <p>instagram: closeend</p>
          <p>facebook: close end</p>
          <p>telegram: +256728295086</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
