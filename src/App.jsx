import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import QuoteList from './components/QuoteList/QuoteList';
import './App.css';

function App() {
  return (
    <main className="container">
      <QuoteGenerator />
      <QuoteList />
    </main>
  );
}

export default App;
