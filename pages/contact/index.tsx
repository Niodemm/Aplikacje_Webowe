import Heading from "../../components/header";
import React, { useState } from "react";
import Error from "./../../components/errormessage";

function Contact() {
  const FormSentMessage = () => {
    return <h2>Your message has been sent.</h2>;
  };

  const [emailAddress, setEmailAddress] = useState("");
  const [emailError, setEmailError] = useState("");

  const [topic, setTopic] = useState("business");

  const [agreement, setAgreement] = useState(false);
  const [agreementError, setAgreementError] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formValidation = () => {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/i;

    setEmailError("");
    setAgreementError("");
    setMessageError("");

    if (emailAddress.length === 0) {
      setEmailError("E-mail address cannot be null.");
    } else if (!emailRegex.test(emailAddress)) {
      setEmailError("The given e-mail address is wrong.");
    }

    if (!agreement) {
      setAgreementError("You need to agree to process the data.");
    }

    if (message.length < 20) {
      setMessageError("The message has to be at least 20 characters long.");
    }

    if (
      emailAddress.length > 0 &&
      emailRegex.test(emailAddress) &&
      agreement &&
      message.length >= 20
    ) {
      handleFormSubmit();
    }
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", {
      emailAddress,
      topic,
      agreement,
      message,
    });

    
    setFormSubmitted(true);
  };

  return (
    <div>
      <Heading title="Contact" />
      {formSubmitted ? (
        <FormSentMessage />
      ) : (
        <div id="form">
          <label htmlFor="Email">E-mail address:</label>
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="E-mail..."
            value={emailAddress}
            onChange={(event) => {
              setEmailAddress(event.target.value);
            }}
          />
          <Error message={emailError}></Error>
          <label htmlFor="Topic">Topic:</label>
          <select
            name="Topic"
            id="Topic"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          >
            <option value="business">Business inquiries</option>
            <option value="payments">Payments</option>
            <option value="jobapplications">Job applications</option>
            <option value="helpdesk">Help Desk</option>
            <option value="other">Other</option>
          </select>
          <label>
            <input
              type="checkbox"
              name="Agreement"
              checked={agreement}
              onChange={(event) => {
                setAgreement(event.target.checked);
              }}
            />{" "}
            I agree to process my personal data.
          </label>
          <Error message={agreementError}></Error>
          <label htmlFor="Message">Message:</label>
          <textarea
            name="Message"
            id="Message"
            cols={30}
            rows={10}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <Error message={messageError}></Error>
          <button onClick={formValidation}>Send</button>
        </div>
      )}
    </div>
  );
}

export default Contact;
