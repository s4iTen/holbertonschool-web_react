import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";
import "./Footer.css";

function Footer() {
    const { user } = useContext(AppContext);

    return (
        <div className="footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && (
                <p>
                    <a href="/contact">Contact us</a>
                </p>
            )}
        </div>
    );
}

export default Footer;
