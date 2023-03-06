import Head from 'next/head'
import { AppLayout, Placeholder } from '@/components'
import Banner from '@/components/Banner/Banner'
import labels from '@/constants/labels.en'
import styles from '@/styles/background.module.css'



export default function Home() {
    return (
        <>
            <Head>
                <title>Website BRITO</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <AppLayout>
                <Placeholder title='Hero' />
                <Placeholder id='about' title='About Us' />
                <div className={styles.logoOnmission}>
                <Banner
                    title={labels.ourMission.title}
                    description={labels.ourMission.description}
                />
                <Banner title={labels.ourVision.title} description={labels.ourVision.description} />
                </div>
                <Placeholder title='Our Board' />
                <div className={styles.logoOnJoinUs}>
                <Banner
                    id='join-us'
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
                </div>
                <Placeholder title='Form' />
                <Placeholder id='contact' title='Contact Us' />
            </AppLayout>
        </>
    )
}
