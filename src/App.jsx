import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Admin from './pages/Admin';
// import Doctor from './pages/Doctor';
// import Staff from './pages/Staff';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { SocketProvider } from './contexts/SocketContext';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Team from './pages/Team';
import Ai from './pages/Ai';
import LoginPage from './pages/Login/LoginPage';
import Admin from './pages/Admin';

const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>

      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
             <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
              } />
              <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Admin />
                </ProtectedRoute>
              } />
           {/*     <Route path="/doctor/*" element={
                <ProtectedRoute allowedRoles={['doctor']}>
                  <Doctor />
                </ProtectedRoute>
              } />
              <Route path="/staff/*" element={
                <ProtectedRoute allowedRoles={['staff']}>
                  <Staff />
                </ProtectedRoute>
              } /> */}
              <Route path="/team" element={<Team />} /> 
              <Route path="/ai" element={<Ai />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
      
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
