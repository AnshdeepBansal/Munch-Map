const ContactUs = ()=>{
    return(
        <>
         <div class="contact-background">
        <div class="contact-container">
            <div class="contact-container-inner">
                <h1 class="contact-title">Contact Us</h1>

                <div class="contact-section">
                    <h2 class="contact-heading">General Inquiries</h2>
                    <p class="contact-info">For general questions or assistance, please reach out to us:</p>
                    <a href="mailto:info@yourwebsite.com" class="contact-email">info@yourwebsite.com</a>
                    <a href="tel:+11234567890" class="contact-phone">+1 (123) 456-7890</a>
                </div>

                <div class="contact-section">
                    <h2 class="contact-heading">Customer Support</h2>
                    <p class="contact-info">Need support? Our team is here to help:</p>
                    <a href="mailto:support@yourwebsite.com" class="contact-email">support@yourwebsite.com</a>
                    <a href="tel:+11234567891" class="contact-phone">+1 (123) 456-7891</a>
                    <p class="contact-hours">Support Hours: Monday to Friday, 9 AM - 6 PM (EST)</p>
                </div>

                <div class="contact-section">
                    <h2 class="contact-heading">Mailing Address</h2>
                    <p class="contact-address">
                        <span class="contact-highlight">Company Name</span>
                        1234 Your Street
                        City, State, ZIP Code
                        Country
                    </p>
                </div>

                <div class="contact-section">
                    <h2 class="contact-heading">Business Inquiries</h2>
                    <p class="contact-info">For partnership opportunities, media inquiries, or other business matters, contact us at:</p>
                    <a href="mailto:business@yourwebsite.com" class="contact-email">business@yourwebsite.com</a>
                    <a href="tel:+11234567892" class="contact-phone">+1 (123) 456-7892</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ContactUs;