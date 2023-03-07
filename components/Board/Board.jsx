import styles from '@/styles/Board.module.css'
import labels from '@/constants/labels.en'
import Card from '@/components/Board/Card'

const Board = (props) => {
    const {image} = props
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>{'Our Board'}</h3>
            </div>
            <div className={styles.board_box}>
                <Card
                    image={image.marcelo}
                />
            </div>
        </div>
    )
}
export default Board
