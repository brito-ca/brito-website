import { FloatingActionButton, Header, Footer, Placeholder } from '@/components'
import styles from '@/styles/AppLayout.module.css'

const AppLayout = (props) => {
    const { children } = props
    return (
        <div className={styles.container}>
            <FloatingActionButton />
            <Header />
            <main>{children}</main>
            <Footer>
                <Placeholder title='Footer' />
            </Footer>
        </div>
    )
}
export default AppLayout
