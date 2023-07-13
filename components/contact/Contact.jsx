"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";

const Contact = () => {
  const emailRef = useRef();
  const subjectRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();

    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        "service_rjg17fi",
        "template_ho2xdf7",
        templateParams,
        "ATfiQfzdqhdgZ3pAW"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thanks, message sent successfully");
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className={styles.contact} id="contact">
      <h1>Contact me</h1>
      <p>
        Drop me a message for inquires about any art projects you would like or
        any other businesses.
      </p>
      <div className={styles.contactcontainer}>
        <div className={styles.form}>
          <form onSubmit={sendMessage} action="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              ref={nameRef}
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Enter Subject"
              ref={subjectRef}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Email"
              ref={emailRef}
            />
            <textarea
              name="message"
              id="message"
              cols="25"
              rows="7"
              required
              placeholder="Enter Message..."
              ref={messageRef}
            ></textarea>
            <button>send message</button>
          </form>
        </div>
        <div className={styles.info}>
          <p>
            whatsapp:{" "}
            <a
              target="_blank"
              rel="nonreferrer"
              href="https://wa.me/256772632727"
            >
              +256772632727
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/CLOSE-END-105023639330529"
            >
              closeend11@gmail.com
            </a>{" "}
          </p>
          <p>instagram: Close End</p>
          <p>
            facebook page:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/CLOSE-END-105023639330529"
            >
              Close End
            </a>{" "}
          </p>
          <p>telegram: +256772632727</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
