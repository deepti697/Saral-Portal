import React from 'react';
import Footer from './index1';
import { Icon } from './footer';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Our Offerings</Footer.Title>
                    <Footer.Link href="#">Digital FD</Footer.Link>
                    <Footer.Link href="#">Mutual Fund</Footer.Link>
                    <Footer.Link href="#">FastTag</Footer.Link>
                    <Footer.Link href="#">Digital Gold</Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Branches</Footer.Title>
                    <Footer.Link href="#">Hyderabad</Footer.Link>
                    <Footer.Link href="#">Mumbai</Footer.Link>
                    <Footer.Link href="#">Chennai</Footer.Link>
                    <Footer.Link href="#">Bangalore</Footer.Link>
                    <h6 className='accfont'>Copyright@AxisBatch10</h6>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Media Center</Footer.Title>
                    <Footer.Link href="#">News Coverage</Footer.Link>
                    <Footer.Link href="#">Podcast</Footer.Link>
                    <Footer.Link href="#">Press Releases</Footer.Link>
                    <Footer.Link href="#">Webcast</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>      
        </Footer>
    )
}