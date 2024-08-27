import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastProvider } from './component/Toast';
import Main from './page/Main';
import ToastPage from './page/ToastPage';
import Layout from './page/Layout';
import TabsPage from './page/TabsPage';

function App() {
  return (
    <div className="w-screen h-screen">
      <ToastProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/toast" element={<ToastPage />} />
              <Route path="/tabs" element={<TabsPage />} />
              <Route path="*" element={<>Not Found</>} />
            </Routes>
          </Layout>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
