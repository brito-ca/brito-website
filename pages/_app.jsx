import '@/styles/globals.css'
import '@/styles/form.css'
import Script from 'next/script'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

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
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </>
    )
}
