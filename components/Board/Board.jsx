import styles from '@/styles/Board.module.css';

const Board = (props) => {
    const {title} = props;
    return(
        <div className={styles.container}>
            <div className={styles.board_title_container}>
                <h1 className={styles.board_title_text}>{title}</h1>
            </div>
        </div>
    );
};
export default Board