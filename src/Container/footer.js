import React from 'react'
import Footer from '../Components/Footer'
import '../Components/Navbar/Navbar.css'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                

                <Footer.Column className='footer'>
                <Footer.Title href="/Home">car-caool<i class="fas fa-car"></i></Footer.Title>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/Ride">Ride</Footer.Link>
                    <Footer.Link href="/Earn">Consulting</Footer.Link>
                    <Footer.Link href="/Drive">Drive</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title href="/contact-us">Contact Us</Footer.Title>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}