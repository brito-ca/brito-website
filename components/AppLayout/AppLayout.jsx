import { FloatingActionButton, Header, Footer, Placeholder } from '@/components'
import styles from '@/styles/AppLayout.module.css'
import Head from 'next/head'

const AppLayout = (props) => {
    const { children, navigation } = props
    return (
        <>
            <Head>
                <title>Website BRITO</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={styles.container}>
                <FloatingActionButton />
                <Header navigation={navigation} />
                <main>{children}</main>
                <Footer>
                    <Placeholder title='Footer' />
                </Footer>
            </div>
        </>
    )
}
export default AppLayout
