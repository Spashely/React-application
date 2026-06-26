import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";

function Contact() {
  return (
    <div>
  <Typography
  variant="h4"
  component="h4"
  align="center"
  margin-top="40px"
  >
    Contact form
  </Typography>
   <form className="form">

    <div className="name">

       <label for="firstName">First name</label>
       <input
            type="text"
            name="firstName"
            className="firstName"
            tabIndex="1"
       />
       <label for="lastName">Last name</label>
       <input
            type="text"
            name="lastName"
            className="lastName"
            tabIndex="2"
       />

       <label for="message">Message</label>

<textarea
  placeholder="Start typing..."
  className="message"
  name="message"/>
  <button type="submit" className="send">Send</button>

    </div>
 </form>
 <Container>
 <Stack  direction={{ xs: "column", md: "row" }} spacing={5}>
  <div>
    <h4>Address</h4>
    <div class="map-responsive">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.1487534210164!2d-3.094293173117797!3d55.94262563534779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b9a7365fccff%3A0x52629bc613f4b94b!2z0JrQvtC70LvQtdC00LYg0K3QtNC40L3QsdGD0YDQsw!5e0!3m2!1sru!2suk!4v1776793547352!5m2!1sru!2suk"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map">
    </iframe>  
    </div>
</div>
  <div><h4>Phone number</h4>
    03312345678
  </div>
 </Stack>
 </Container>
 </div>
  )
}


export default Contact;
