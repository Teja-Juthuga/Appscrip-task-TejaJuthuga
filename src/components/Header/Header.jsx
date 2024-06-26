import "./header.css";

export const Header = () => {
    return (
        <div>
            <div className="header-sm">
                <div className="header-alert">
                    <img src="images/alertlogo.png" alt="alertLogo" />
                    <p className="ms-2"> Sale Alert! </p>
                </div>
                <div className="main-header">
                    <div>
                        <i className="fa-solid fa-bars"></i>
                        <i className="fa-solid fa-star-of-life"></i>
                    </div>
                    <div>
                        <h3 style={{fontWeight:"700"}}> Shopper. </h3>
                    </div>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
                <hr />
                <div>
                    <p style={{ marginLeft: "25px" }}>
                        <span style={{ color: "#BFC8CD" }}> HOME </span> | SHOP{" "}
                    </p>
                </div>
            </div>
            <div className="header-md">
                <div className="header-alert">
                    <div className="alerts">
                        <img src="images/alertlogo.png" alt="alertLogo" />
                        <p> Sale Alert! </p>
                    </div>
                    <div className="alerts">
                        <img src="images/alertlogo.png" alt="alertLogo" />
                        <p> Sale Alert! </p>
                    </div>
                    <div className="alerts">
                        <img src="images/alertlogo.png" alt="alertLogo" />
                        <p> Sale Alert! </p>
                    </div>
                </div>
                <div className="main-header">
                    <div>
                        <i className="fa-solid fa-star-of-life"></i>
                    </div>
                    <div>
                        <h2 style={{fontWeight:"700"}}> Shopper. </h2>
                    </div>
                    <div>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className="categories">
                    <h4>SHOP</h4>
                    <h4>SKILLS</h4>
                    <h4>STORIES</h4>
                    <h4>ABOUT</h4>
                    <h4>CONTACT US</h4>
                </div>
                <hr />
            </div>
        </div>
    );
};
