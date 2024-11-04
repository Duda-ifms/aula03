import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import styles from './Home.module.css';

  const Home = () => {
    return(
      <div className={styles.home}>
        <h1>Ola sou a Duda</h1>
        <p>Esse codigo ta dando erro</p>
      </div>

    );
  };
     export default Home;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
