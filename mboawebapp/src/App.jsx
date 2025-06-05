import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import GetStarted from './pages/auth/GetStarted';
import Home from './pages/admin';
import Welcome from './pages/Welcome';
//import EnvTest from './Components/EnvTest';
import './App.css';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          {/* Route publique */}
          <Route path="/" element={<Welcome />} />
          <Route path="/GetStarted" element={<GetStarted />} />
          
          {/* Routes protégées */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/*<EnvTest />*/}
      </Router>
    </NotificationProvider>
  );
}

// Composant de protection des routes
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/GetStarted" replace />;
  }
  
  return children;
};

export default App;

