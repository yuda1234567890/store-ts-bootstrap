import { FC, ReactElement } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

const App: FC = (): ReactElement => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:name' element={<></>} />
          <Route path='/product/:id' element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
