import styles from '@/styles/Board.module.css'
import labels from '@/constants/labels.en'
import { Icon } from '@/components'
import Card from '@/components/Board/Card'

const Board = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>{'Our Board'}</h3>
            </div>
            <div className={'${styles.board_box} flex-row-center'}>
                <Card/>
            </div>
        </div>
    )
}
export default Board
