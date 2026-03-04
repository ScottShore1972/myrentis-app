import { BarChart3, Shield, DollarSign, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: BarChart3,
      title: 'Aggregated Data',
      description: 'See average rent, deposits, and fees for your unit type in real-time',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: DollarSign,
      title: 'Price Comparison',
      description: 'Know if you\'re paying fair market rates or being overcharged',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Renewal Insights',
      description: 'Make informed decisions about lease renewals with market trends',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Anonymous & Secure',
      description: 'Your data is aggregated and anonymized to protect your privacy',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent pointer-events-none"></div>
      
      <motion.div 
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          How It Works
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Your lease information is not confidential. We will ask for your lease charges, monthly invoices and utility invoices to complete a full picture of annual costs.
        </motion.p>
      </motion.div>
      
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const colors = colorMap[feature.color];
          return (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></motion.div>
              
              {/* Animated border glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                initial={false}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>

              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  className={`${colors.bg} rounded-xl p-4 flex-shrink-0 border ${colors.border} relative overflow-hidden`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></motion.div>
                  <Icon className={`w-7 h-7 ${colors.icon} relative z-10`} />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl mb-3 text-gray-900 font-semibold"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}