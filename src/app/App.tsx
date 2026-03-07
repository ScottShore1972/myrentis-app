import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router';
import { InterestForm } from './components/InterestForm';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SuccessMessage } from './components/SuccessMessage';
import { AdminView } from './components/AdminView';
import { AboutUs } from './components/AboutUs';

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
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-end items-center">
            <button
              onClick={() => navigate('/about')}
              className="text-sm text-gray-600 hover:text-indigo-600 px-3 py-1"
            >
              About
            </button>
          </div>
        </div>
      </nav>

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