import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Contacts from '../containers/Contacts';
import Products from '../containers/Products';
import NotFound from '../containers/NotFound';
import Bikes from '../containers/Bikes';
import Networks from '../containers/Networks';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/bikes' element={<Bikes />} />
                <Route exact path='/networks' element={<Networks />} />
                <Route exact path='/contacts' element={<Contacts />} />
                <Route exact path='/products' element={<Products />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
