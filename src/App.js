import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Main from './components/Main';

const AppLayout = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);