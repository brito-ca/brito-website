import '@/styles/globals.css'
import '@/styles/form.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
    const GA_TAG = 'GTM-586HRW6'
    return (
        <>
            <Script
                strategy='afterInteractive'
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG}`}
            />
            <Script id='google-analytics' strategy='afterInteractive'>
                {`
		            window.dataLayer = window.dataLayer || [];
	                function gtag(){dataLayer.push(arguments);}
	                gtag('js', new Date());
	                gtag('config', '${GA_TAG}', {
            	    page_path: window.location.pathname,
	                });
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}
