import cookie from "js-cookie";
import Script from "next/script";

const GoogleAnalytics = ({ consent }) => {
    if (!consent) {
        return <div></div>
    }

    return (
        <div>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9B5V1X5R6Z" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-9B5V1X5R6Z');
                `}
            </Script>
        </div>
    );
}

export default GoogleAnalytics;