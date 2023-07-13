import {
  ThreekitProvider,
  Player,
  PortalToElement,
  FlatForm,
} from '@threekit-tools/treble';
import Index from './components/Pages/Index';
import { Routes, Route } from 'react-router-dom';

import CarPlayer from './components/Player/CarPlayer';
import Product from './components/Pages/Product';
import PlayerCar from './components/Player/PlayerCar';

const App = () => {

  return (
    <>
      <ThreekitProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/PlayerCar" element={<PlayerCar />} />
          <Route path="/Product" element={<Product />} />
        
        </Routes>
      </ThreekitProvider>
    </>
  );
};

export default App;
