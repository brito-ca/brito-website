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
    return (
        <>
            <Head>
                <title>Website BRITO</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={`${roboto.className} ${styles.container}`}>
                <FloatingActionButton />
                <Header navigation={content.navigation} />
                <main className={styles.main}>{children}</main>
                <Footer
                    footerContent={content.footerContent}
                    navigation={content.navigation}
                    socialMedia={content.socialMedia}
                />
            </div>
        </>
    )
}

export default AppLayout
