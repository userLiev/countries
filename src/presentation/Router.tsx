import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Main from './components/main/Main';
import HomePage from './pages/home/HomePage';
import InfoPage from './pages/info/InfoPage';

const Router: FC = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer />
    </Layout>
  );
};

export default Router;
