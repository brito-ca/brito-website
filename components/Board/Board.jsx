import styles from '@/styles/Board.module.css'
import Card from '@/components/Board/Card'

const Board = (props) => {
    const { data, title } = props
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={styles.board_box}>
                    {data.map((card) => (
                        <Card {...card} />
                    ))}
            </div>
        </div>
    )
}
export default Board
