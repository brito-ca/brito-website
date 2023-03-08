import Head from 'next/head'
import { AppLayout, Placeholder, Hero, Board } from '@/components'
import Banner from '@/components/Banner/Banner'
import labels from '@/constants/labels.en'

export default function Home() {
    return (
        <>
            <AppLayout>
                <Hero
                    title={labels.welcomeToBrito.title}
                    description={labels.welcomeToBrito.description}
                    image={labels.image}
                />
                <Placeholder title='About Us' />
                <Placeholder title='Hero' />
                <Placeholder id='about' title='About Us' />
                <Banner
                    title={labels.ourMission.title}
                    description={labels.ourMission.description}
                />
                <Board title='Our Board' cards={labels.card_data} />
                <Banner
                    id='join-us'
                    title={labels.joinUs.title}
                    description={labels.joinUs.description}
                />
                <Placeholder title='Form' />
                <Placeholder id='contact' title='Contact Us' />
            </AppLayout>
        </>
    )
}
