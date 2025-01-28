import styles from './Card.module.css';

const Card = ({ image, caption }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={caption} className={styles.cardImage} />
      <p className={styles.cardCaption}>{caption}</p>
    </div>
  );
};

export default Card;