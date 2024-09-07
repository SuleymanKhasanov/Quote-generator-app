import { useSelector } from 'react-redux';
import styles from './QuoteList.module.css';

const QuoteList = () => {
  const quoteData = useSelector((state) => state.quotes);

  return (
    <section className={styles.quoteList}>
      {quoteData.length > 0 ? (
        <ul className={styles.list}>
          {quoteData.map((quote, index) => (
            <li key={index} className={styles.listItem}>
              <blockquote>
                <i>"{quote.quote}"</i> <br />
                <span>— {quote.author}</span>
              </blockquote>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quotes available</p>
      )}
    </section>
  );
};

export default QuoteList;
