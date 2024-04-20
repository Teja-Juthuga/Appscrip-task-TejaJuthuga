import "./footer.css";

export const Footer = () => {
    return (
        <div>
            <div className="footer-sm">
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <div>
                        <h5> BE THE FIRST TO KNOW </h5>
                        <p> Sign up for updates from Shopper. </p>
                        <input type="search" placeholder="Enter Email" />
                        <button className="btn btn-outline-dark">
                            SUBSRIBE
                        </button>
                    </div>
                    <div>
                        <h5> CONTACT US </h5>
                        <h6> +44 221 133 5360 </h6>
                        <p>customercare@mettamuse.com</p>
                        <h5> Currency </h5>
                        <h6> USD</h6>
                        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <div>
                        <h5> Shopper. </h5>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>EU Compliances Docs</p>
                    </div>
                    <div>
                        <h5> Quick Links </h5>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h5> FOLLOW US </h5>
                        <div>
                            <i class="fa-brands fa-facebook ms-2"></i>
                            <i class="fa-brands fa-instagram ms-2"></i>
                        </div>
                    </div>
                </div>
                <div className="text-center">Copyright © 2023 mettamuse. All rights reserved.</div>
            </div>
        </div>
    );
};
