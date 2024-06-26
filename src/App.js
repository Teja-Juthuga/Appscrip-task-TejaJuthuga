import { Helmet } from 'react-helmet';
import { Header } from './components/Header/Header';
import { Products } from './components/Products/Products';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Helmet>
        <title>Shopper.</title>
        <meta name="description" content="Explore wide range of products, Shop Now!" />
        <h1> Shopper. </h1>
      </Helmet>
      <Header/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
