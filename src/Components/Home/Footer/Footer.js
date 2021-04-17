import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Repaint Car Service" , link: "/"},
        {name: "Repair" , link: "/repair"},
        {name: "Wheel Service" , link: "/wheel"},
        {name: "Glass changing" , link: "/glass"},
        {name: "Meter Testing" , link: "/meter"}
    ]
    const ourAddress = [
        {name: "Mymensingh - 2255" , link: "//google.com/map"},
        {name: "Repaint" , link: "//google.com/map"},
       
    ]
    const servicing = [
        {name: "Repaint Car Service" , link: "/"},
        {name: "Repair" , link: "/repair"},
        {name: "Wheel Service" , link: "/wheel"},
        {name: "Glass changing" , link: "/glass"},
        {name: "Meter Testing" , link: "/meter"}
    ]
    const services = [
        {name: "Repaint Car Service" , link: "/"},
        {name: "Repair" , link: "/repair"},
        {name: "Wheel Service" , link: "/wheel"},
        {name: "Glass changing" , link: "/glass"},
        {name: "Meter Testing" , link: "/meter"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Services"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Customization" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Servicing" menuItems={servicing}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"></a></li>
                            <li className="list-inline-item"><a href="//google.com"></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"></a></li>
                        </ul>
                        <div className="mt-5 text-white">
                            <h6>Call now</h6>
                            <button className="btn btn-info">+880 17001122334</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;