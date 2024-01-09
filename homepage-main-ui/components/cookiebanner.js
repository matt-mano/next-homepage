import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import GoogleAnalytics from "./googleanalytics";

const CookiePrompt = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        const consentCookie = cookie.get("cookieConsent");

        if (!consentCookie) {
            setShowBanner(true);
        } else {
            setConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        setShowBanner(false);
        cookie.set("cookieConsent", "accepted", { expires: 365 });
        setConsent(true);
    };

    const rejectCookies = () => {
        setShowBanner(false);
    };

    if (!showBanner) {
        return consent && <GoogleAnalytics consent={consent} />
    }

    return (
        <article className="message">
            <div className="message-header">
                <p>This website uses cookies</p>
            </div>
            <div className="message-body">
                <p>
                    This website uses optional cookies.  Accepting cookies helps me better understand how this site is doing!
                </p>
                <br />
                <button className="button is-small is-dark" onClick={acceptCookies}>Accept all Cookies</button>
                <button className="button is-small is-secondary" onClick={rejectCookies}>Reject all cookies</button>
            </div>
            {consent && <GoogleAnalytics consent={consent} />}

        </article>
    );
};

export default CookiePrompt;