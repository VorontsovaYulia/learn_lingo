import styles from './LevelButton.module.css'

export const LevelButton = ({levels}) => {

    return (
        <div className={styles['level-box']}>{levels.map((level, i) => {
            return <button key={i}>{level}</button>
        })}</div>
    );
 }