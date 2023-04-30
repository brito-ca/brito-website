import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <title>Brito - Brazilian IT Ottawa</title>
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
            <main style={styles.main}>
                <img
                    style={styles.image}
                    src='https://res.cloudinary.com/dw2wjwhuv/image/upload/v1682864265/1681826552889_n2hbaj.jpg'
                />
            </main>
        </>
    )
}

export default Home

const styles = {
    main: {
        backgroundColor: 'black',
        height: '100vh',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
    },
}
