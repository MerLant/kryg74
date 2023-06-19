import React from 'react';
import MyRoutes from 'router/router';

import { Header, Footer } from 'components';

function App() {
    return (
        <>
            <Header />
            <MyRoutes />
            <Footer />
        </>
    );
}

export default App;
