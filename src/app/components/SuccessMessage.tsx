import { CheckCircle, Bell, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function SuccessMessage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animated gradient border */}
        <motion.div 
          className="absolute -inset-[2px] bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-3xl opacity-0 blur-lg"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>

        <div className="relative p-8 sm:p-12 text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 10
            }}
          >
            <motion.div 
              className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-5 shadow-lg relative"
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(34, 197, 94, 0.3)",
                  "0 10px 50px rgba(34, 197, 94, 0.5)",
                  "0 10px 30px rgba(34, 197, 94, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle className="w-20 h-20 text-green-600" />
              {/* Celebration particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1,
                    scale: 1 
                  }}
                  animate={{
                    x: Math.cos(i * Math.PI / 4) * 60,
                    y: Math.sin(i * Math.PI / 4) * 60,
                    opacity: 0,
                    scale: 0
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Thank You!
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Your feedback has been recorded. We'll keep you updated as we build this app.
          </motion.p>
          
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8 border border-indigo-100 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-blue-200/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>

            <h3 className="relative text-2xl mb-6 text-gray-900 font-semibold">What's Next?</h3>
            <div className="relative space-y-5 text-left max-w-md mx-auto">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white rounded-lg p-2 shadow-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Bell className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                </motion.div>
                <p className="text-gray-700 leading-relaxed">
                  We'll email you when the app launches
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div 
                  className="bg-white rounded-lg p-2 shadow-sm"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Users className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                </motion.div>
                <p className="text-gray-700 leading-relaxed">
                  You'll be among the first to access beta features
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.button
            onClick={() => window.location.reload()}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-lg hover:underline transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit another response →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}