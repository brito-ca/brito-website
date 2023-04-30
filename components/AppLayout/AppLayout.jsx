import { FloatingActionButton, Header, Footer } from '@/components'
import styles from '@/styles/AppLayout.module.css'
import Head from 'next/head'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
})

const AppLayout = (props) => {
    const { children, content } = props
    const { header, footer, meta } = content
    const { title, description } = meta
    return (
        <>
            <Head>
                <title>{`${title} ${description && `- ${description}`}`}</title>
                <meta name='description' content={meta?.description} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.svg' />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KJTQGHC');`,
                    }}
                />
            </Head>
            <div className={`${roboto.className} ${styles.container}`}>
                <FloatingActionButton />
                <Header {...header} />
                <main className={styles.main}>{children}</main>
                <Footer {...footer} />
            </div>
        </>
    )
}

export default AppLayout
