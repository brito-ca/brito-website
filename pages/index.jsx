import Head from 'next/head';
import { AppLayout } from '@/components';
import Link from 'next/link';
import ContactUs from '@/components/ContactUs/ContactUs';

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
        
        <section>
          <ContactUs/>
        </section>

      </AppLayout>
    </>
  );
}