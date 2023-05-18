import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/includes/AppHeader';
import AppFooter from './components/includes/AppFooter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
       <Layout>
          <Router>
            <Header>
              <AppHeader />
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/faq' element={<Faq/>} />
                <Route path='/contact' element={<Contact/>} />
              </Routes>
            </Content>
          </Router>
          <Footer>
            <AppFooter/>
          </Footer>
        </Layout>
    </div>
  );
}

export default App;
