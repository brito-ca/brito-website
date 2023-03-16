import styles from '@/styles/Board.module.css'
import { Card } from '@/components'

const Board = (props) => {
    const { cards, title } = props

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.board_box}>
                {cards?.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Board
