import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hello' element={<div>Hello</div>} />
        <Route path='/movie/:id' element={<Detail />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
