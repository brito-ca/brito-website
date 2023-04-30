import '@/styles/globals.css'
import '@/styles/form.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
