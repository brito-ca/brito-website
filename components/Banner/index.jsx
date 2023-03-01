import Head from 'next/head';
import Link from 'next/link';
import Banner from '@/components/Banner/Banner';
import labels from '@/constants/labels.en';

export default function Home() {
  return (
    <>
      <Head>
        <title>Website BRITO</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
     
        
        <section>
        <Banner title={labels.ourMission.title} description={labels.ourMission.description}/>
        
        <Banner title={labels.ourVision.title} description={labels.ourVision.description}/>
        </section>
        <section>
        <Banner title={labels.joinUs.title} description={labels.joinUs.description}/>
        </section>
  
    </>
  );
}