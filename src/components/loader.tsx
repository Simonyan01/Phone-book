import styles from "../styles/loader.module.scss"

const Loader: React.FC = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.spinner}></div>
            <p>Loading...</p>
        </div>
    )
}

export default Loader