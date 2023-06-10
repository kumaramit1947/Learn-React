import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', { className: 'react-head' }, 'Jai Shree Ram');
// Nested sibling elements
const wrapper = React.createElement('div', { className: 'parent' },
    [heading, React.createElement('p', { className: 'desc' }, 'Lord of the World')]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(wrapper);