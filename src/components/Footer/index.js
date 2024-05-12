

import "./index.css"

const Footer = () => (
    <div className="footer-main-container">
        <div className="be-the-first-text-lorem-text-email-input-and-button-container">
            <h1 className="be-the-first-to-know-text">BE THE FIRST TO KNOW</h1>
            <p className="lorem-ipsum-is-dummy-text-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <br/>
            <div className="input-email-element-subscribe-btn-container">
                <input type="text" placeholder="Enter your e-mail..." className="input-email-element"/>
                <button type="button" className="subscribe-button">SUBSCRIBE</button>
            </div>
        </div>
        <div>
            <h1 className="call-us-head-text">CALL US</h1>
            <div className="phone-number-and-customer-care-mail-container">
               <p>+442211335360</p>  
               <li className="customer-care-email-list-text">customercare@mettamuse.com</li>
            </div>
           
        </div>

        <div className="currency-usa-flag-usd-text-container">
            <h1 className="currency-head-text">CURRENCY</h1>
            <div className="phone-number-and-customer-care-mail-container">
               <img src="../.././usa.png" alt="flag" className="usa-flag"/>
               <li className="usd-text">USD</li>
            </div>
        </div>

        <div className="metta-mause-and-drop-down-container">
           <h1 className="metta-muse-text">metta muse</h1>
            <img src="arrow-right.png" alt="arrow-right"/>
        </div>
        <div className="quick-link-and-arrow-right-container">
           <h1 className="quick-link-text">QUICK LINKS</h1>
            <img src="arrow-right.png" alt="arrow-right"/>
        </div>

        <div className="follow-us-and-arrow-right-container">
           <h1 className="follow-us-text">FOLLOW US</h1>
            <img src="arrow-right.png" alt="arrow-right"/>
        </div>

        <div>
            <h1 className="metta-muse-accepts-text">metta muse ACCEPTS</h1>
            <div className="payment-images-container">
                <img src="../.././gPay.png" alt="g pay" className="payment-images"/>
                <img src="../.././masterImg.png" alt="master" className="payment-images"/>
                <img src="../.././payPal.png" alt="pay pal" className="payment-images"/>
                <img src="../.././amex.png" alt="amex" className="payment-images"/>
                <img src="../.././applePay.png" alt="apple pay" className="payment-images"/>
                <img src="../.././pay.png" alt="pay" className="payment-images"/>
            </div>
        </div>
        <div className="copy-right-text-image-container">
            <img src="copy-right-text-image.png" alt="copy-right"/>
        </div>

        
       
        
    </div>
)


export default Footer