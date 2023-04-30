const Home = () => {
    return (
        <main style={styles.main}>
            <img
                style={styles.image}
                src='https://res.cloudinary.com/dw2wjwhuv/image/upload/v1682864265/1681826552889_n2hbaj.jpg'
            />
        </main>
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
