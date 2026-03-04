import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router';
import { InterestForm } from './components/InterestForm';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SuccessMessage } from './components/SuccessMessage';
import { AdminView } from './components/AdminView';
import { AboutUs } from './components/AboutUs';
import { motion } from 'motion/react';

function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (data: any) => {
    // Store submission in localStorage
    const submissions = JSON.parse(localStorage.getItem('leaseAppSubmissions') || '[]');
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('leaseAppSubmissions', JSON.stringify(submissions));
    
    setSubmitted(true);
    
    // Scroll to success message
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Bar */}
      <motion.nav 
        className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => navigate('/')}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Rent Is
            </motion.button>
            <div className="flex items-center gap-6">
              <motion.button
                onClick={() => navigate('/about')}
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors px-3 py-1 rounded-lg hover:bg-indigo-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => navigate('/admin')}
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors px-3 py-1 rounded-lg hover:bg-indigo-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Admin
              </motion.button>
              <motion.div 
                className="text-sm text-gray-600 px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.4)",
                    "0 0 0 10px rgba(99, 102, 241, 0)",
                    "0 0 0 0 rgba(99, 102, 241, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Coming Soon
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <Hero />
      <Features />
      {!submitted ? (
        <InterestForm onSubmit={handleSubmit} />
      ) : (
        <SuccessMessage />
      )}
      
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              My Rent Is
            </div>
            <p className="text-gray-600 mb-2">
              Empowering renters with data-driven insights
            </p>
            <p className="text-sm text-gray-500">
              © 2026 My Rent Is. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/admin',
    element: <AdminView />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}