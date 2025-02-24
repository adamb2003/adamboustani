import React, { useState } from "react";
import "./Footer.css";
import { Button } from "./Button";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Footer() {
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (message.trim() === "") {
      setSnackbarMessage("Please enter a message!");
      setOpenSnackbar(true);
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        timestamp: serverTimestamp(),
      });
      setSnackbarMessage("Message sent!");
      setOpenSnackbar(true);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbarMessage("Error sending message.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div id="footer" className="footer-container">
      <section className="send-message">
        <p className="message-heading">Send me a message!</p>
        <div className="input-area">
          <form onSubmit={sendMessage}>
            <input
              className="message-input"
              name="message"
              type="text"
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button buttonStyle="btn--outline" type="submit">
              Send
            </Button>
          </form>
        </div>
      </section>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarMessage === "Message sent!" ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              ADAM{" "}
              <i
                className="fa-solid fa-square-binary fa-spin fa-sm"
                style={{ color: "#00ff00" }}
              />
            </Link>
          </div>
          <small className="website-rights">Adam Boustani 2025</small>
          <div className="social-icons">
            <a
              href={require("../pdfs/adamboustani.pdf")}
              className="social-icon-link cv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
            >
              <i className="fa-solid fa-file" />
            </a>
            <Link
              className="social-icon-link github"
              to="https://github.com/adamb2003"
              target="_blank"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="https://www.linkedin.com/in/adamboustani"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link email"
              to="mailto:adamboustani@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
