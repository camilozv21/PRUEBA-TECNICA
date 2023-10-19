import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element />
          <Route path='/register' element />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
