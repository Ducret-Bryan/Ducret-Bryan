import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import reportWebVitals from './utils/test/reportWebVitals';
import GlobalStyle from './utils/style/GlobalStyle'
import './reset.css';

import Header from './components/Header/index.jsx';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Router>
    <GlobalStyle />
    <Header />
    <Routes>
    </Routes>
  </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
