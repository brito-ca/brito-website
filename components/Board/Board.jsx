import styles from '@/styles/Board.module.css'
import Card from '@/components/Board/Card'
import Line from '@/components/Board/Line'

const Board = (props) => {
    const { image, info } = props
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.title}>{info.title}</h3>
            </div>
            <div className={styles.board_box}>
                <div className={styles.card_one}>
                    <Card image={image.marcelo} info={info.marcelo} />
                </div>
                <div className={styles.card_two}>
                    <Card image={image.diego} info={info.diego} />
                </div>
                <div className={styles.card_three}>
                    <Card image={image.roger} info={info.roger} />
                </div>
            </div>
        </div>
    )
}
export default Board
