import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ServicesNavbar from './Services/ServicesNavbar';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import email from "../images/email.jpg";
import address from "../images/address.jpg";
import phone from "../images/phone.png";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8n2ep2r', 'template_jtwk1xx', form.current, 'trgXjfEfOXayrN4ra')
            .then((result) => {
                alert("Mail send to Admin!");
            }, (error) => {
                alert("Please provide correct detalis...");
            });
        e.target.reset()
    };
    return (
        <>
            <ServicesNavbar />
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src={phone} style={{ color: "#002d64", height: "3rem", width: "4rem" }} alt="phone" />
                                <div className="contact_info_content">
                                    <div className="contact_info_tittle">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 9659858447
                                    </div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src={email} alt="phone" style={{ height: "3rem", width: "4rem" }} />
                                <div className="contact_info_content">
                                    <div className="contact_info_tittle">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        saralbank@saral.com
                                    </div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src={address} alt="phone" style={{ height: "3rem", width: "4rem" }} />
                                <div className="contact_info_content">
                                    <div className="contact_info_tittle">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                    Airoli, Navi Mumbai
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <section>
            <Typography component="h1" variant="h4" alignContent="center"
                        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                        Get in Touch
                    </Typography>
                <div className="container">
                    <br />
                    <br />
                    
                    <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
                        <input type="text" placeholder='Full Name' name='customer_name' required />
                        <input type="email" placeholder='Email' name='customer_email' required />
                        <input type="text" placeholder='Subject' name='subject' required />
                        <textarea name="message" cols="70" rows="10"></textarea><br />
                        <button type='submit' className="--btn --btn-primary">Send Message</button>
                    </form>
                </div> */}
                <Container component="main" maxWidth="xs" className="contact-us">
                <Box sx={{ marginTop: 2, display: "flex", flexDirection: "column",  alignItems: "center"}} >
                    <Typography component="h1" variant="h4" 
                    fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                        Get in Touch
                    </Typography>
                    <Box component="form" onSubmit={sendEmail} ref={form} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            type="text"
                            fullWidth
                            label="Full Name"
                            name="customer_name"
                            required
                        />
                        <TextField
                            margin="normal"
                            type="email"
                            fullWidth
                            label="Email Address"
                            name="customer_email"
                            required
                        />
                        <TextField
                            margin="normal"
                            type="text"                            
                            fullWidth
                            label="Subject"
                            name="subject"
                            required
                        />
                        <textarea name="message" cols="70" rows="7"></textarea>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}   
                            style={{ backgroundColor: "#002d64", 
                            fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}                           
                        >Send Email</Button>
                    </Box>
                </Box>
                </Container>
            {/* </section> */}
        </>
    )
}

export default Contact