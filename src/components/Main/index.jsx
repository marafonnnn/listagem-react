import { CobrancasProvider } from '../../providers/cobranca';
import { Lista } from '../Lista';
import './styles.css';

function Main() {
  return (
    <CobrancasProvider>
      <main className="container background-form">
          <Lista/>
      </main>
      <footer className="mt-auto text-gray-50">
          <i>Venicius Marafon - hire me! :)</i>
      </footer>
    </CobrancasProvider>
  );
}

export default Main;