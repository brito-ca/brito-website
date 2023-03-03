import styles from '@/styles/Board.module.css';

const Board = (props) => {
    const { title } = props;
    return (
        <div className='flex-row-center'>
            <div >
                <h3 >{title}</h3>
                <div className='body1 b1'>
                    <p>{'description'}</p>
                </div>
            </div>
        </div>
    );
};
export default Board