require('@testing-library/jest-dom/extend-expect');
require('@testing-library/jest-dom');
const React = require('react');

global.React = React; // this also works for other globally available libraries
