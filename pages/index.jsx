import Head from 'next/head';
import { AppLayout } from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Website BRITO</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Banner title='Our mission' />
      <Banner title='Our Vision' />
      <div className={styles.title}>Home</div>
      <Hero
        title='WELCOME TO BRITO'
        text={['BRAZILIAN IT OTTAWA is non-profit group of IT Brazilians professionals located in Ottawa.', <br />,
          'Our main objective is empowering the community, assisting with networking, and continuous' +
          'learning with lectures and workshops.']}
        img_source='/ellipse.png' description='Parlemant' width='672' height='900'
      />
      <AppLayout>
        <p>
          <Link href={'typography-demo'}>Typography Demo</Link>
        </p>
        <p>
          Quis officia nisi ex laboris nisi adipisicing. Reprehenderit do irure
          velit est culpa dolor aliqua voluptate et exercitation dolore. Minim
          commodo est elit esse qui fugiat aliqua veniam nisi est sint laboris
          ea sint. Qui reprehenderit officia sint aute voluptate laboris
          consectetur do reprehenderit. Ea qui nulla officia culpa eiusmod
          ullamco pariatur officia nostrud.
        </p>
        <p>
          Sit culpa fugiat in cupidatat veniam ea sint nisi voluptate. Culpa do
          anim qui aliqua. Elit do amet aliqua exercitation dolore non. Minim
          non fugiat fugiat nisi esse quis culpa ipsum irure. Cillum non duis
          aute eiusmod ad excepteur minim enim consequat duis ut officia.
          Commodo ullamco veniam tempor cillum velit ea. Sint cupidatat enim
          duis in id non eiusmod laborum dolor non voluptate et Lorem.
        </p>
      </AppLayout>
    </>
  );
}
