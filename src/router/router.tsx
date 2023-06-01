import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Home, NotFound } from '../pages';

const MyRoutes = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to='404' />} />
            <Route path='/404' element={<NotFound />} />
        </Routes>
    </Router>
);

export default MyRoutes;
