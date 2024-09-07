import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newQuote } from '../../redux/slice/slice';
import randomQuotesArray from '../../assets/quotesAssets';
import styles from './QuoteGenerator.module.css';

const QuoteGenerator = () => {
  const dispatch = useDispatch();

  const [quoteInput, setQuoteInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const hanndlerFromSubmit = (event) => {
    event.preventDefault();

    if (quoteInput && authorInput) {
      const quoteData = {
        quote: quoteInput,
        author: authorInput,
      };

      dispatch(newQuote(quoteData));

      setAuthorInput('');
      setQuoteInput('');
    }
  };

  const hanndlerForGenerateRandomQuote = () => {
    const rondomizer = Math.floor(Math.random() * 50);
    dispatch(newQuote(randomQuotesArray[rondomizer]));
  };

  return (
    <section className={styles.quoteGenerator}>
      <h1>Write you quote</h1>
      <form
        action="#"
        onSubmit={hanndlerFromSubmit}
        className={styles.form}
      >
        <input
          type="text"
          className={styles.textInput}
          placeholder="Write quote"
          value={quoteInput}
          onChange={(event) => setQuoteInput(event.target.value)}
        />
        <input
          type="text"
          className={styles.authorInput}
          placeholder="Write author name"
          value={authorInput}
          onChange={(event) => setAuthorInput(event.target.value)}
        />
        <div className={styles.btnBlock}>
          <button type="submit">Submit</button>
          <button
            className={styles.randomBtn}
            onClick={hanndlerForGenerateRandomQuote}
          >
            Random quote
          </button>
        </div>
      </form>
    </section>
  );
};

export default QuoteGenerator;
