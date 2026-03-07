import { useNavigate } from 'react-router';
import { Target, Users, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-start items-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-gray-600 hover:text-indigo-600 px-3 py-1"
            >
              ← Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Who We Are */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 mb-8 border border-gray-100 relative overflow-hidden"
          whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          ></motion.div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div 
              className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-8 h-8 text-blue-600" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are professionals with 20 years' experience in apartment acquisitions, asset management and property management. We know that all leverage and power in today's market is held by Landlords. The advertising you receive is paid for by them.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are flipping the script on Landlords so your data comes from those who live right next door, not from high paid advertising websites.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 mb-8 border border-gray-100 relative overflow-hidden"
          whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          ></motion.div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div 
              className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="w-8 h-8 text-indigo-600" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We believe you deserve access to the same level of market data and transparency that exists in other major financial decisions. My Rent Is is built to level the playing field.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By aggregating and anonymizing lease data from real renters, we're creating a platform where you can see what others are paying for similar units in your community—empowering you to negotiate better terms, avoid overpaying, and make informed decisions about when to renew or move.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 mb-8 border border-gray-100 relative overflow-hidden"
          whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          ></motion.div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div 
              className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="w-8 h-8 text-red-600" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Problem We're Solving
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Renters face a fundamental information asymmetry. Landlords and property managers have access to comprehensive market data, but renters are often left guessing:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                {[
                  'Is my rent competitive with similar units?',
                  'What is my total cost to rent including utilities and other charges?',
                  'Am I being offered a fair renewal rate?',
                  'What lease terms are neighbors negotiating?'
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start"
                  >
                    <span className="text-indigo-600 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Our Solution */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12 mb-8 border border-gray-100 relative overflow-hidden"
          whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
          ></motion.div>
          <div className="flex items-start gap-4 mb-6 relative z-10">
            <motion.div 
              className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <TrendingUp className="w-8 h-8 text-green-600" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My Rent Is will allow renters to securely input or upload their lease data—rent amount, fees, lease terms, unit details, and location. In return, users get access to:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-4">
                {[
                  { label: 'Aggregated comparisons:', text: 'See how your rent compares to similar units in your building, neighborhood, or city' },
                  { label: 'Fee transparency:', text: 'Discover what fees others are paying and which ones might be negotiable' },
                  { label: 'Renewal insights:', text: 'Understand typical rent increases to prepare for renewal negotiations' },
                  { label: 'Market trends:', text: 'Track how rental prices are changing over time in your area' }
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start"
                  >
                    <span className="text-green-600 mr-3 mt-1">✓</span>
                    <span><strong>{item.label}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                All data is anonymized and aggregated to protect individual privacy while maximizing collective benefit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl shadow-xl p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Animated background */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          
          <h2 className="relative text-3xl font-bold mb-4">
            Help Us Build This
          </h2>
          <p className="relative text-lg mb-6 text-indigo-50">
            We're currently gathering feedback from renters like you to build the best possible platform
          </p>
          <motion.button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('interest-form')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="relative bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Feedback
          </motion.button>
        </div>
      </div>

      {/* Footer */}
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