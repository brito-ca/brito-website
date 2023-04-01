import { FloatingActionButton, Header, Footer } from '@/components'
import styles from '@/styles/AppLayout.module.css'
import Head from 'next/head'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

const AppLayout = (props) => {
    const { children, header, footer, meta } = props
    return (
        <>
            <Head>
                <title>{meta?.title}</title>
                <meta name='description' content={meta?.description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={`${roboto.className} ${styles.container}`}>
                <FloatingActionButton />
                <Header {...header} />
                <main>{children}</main>
                <Footer {...footer} />
            </div>
        </>
    )
}
export default AppLayout
