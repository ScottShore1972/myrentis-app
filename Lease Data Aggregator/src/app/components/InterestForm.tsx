import { useForm } from 'react-hook-form';
import { Mail, MapPin, Home, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface FormData {
  email: string;
  phone: string;
  currentlyRenting: string;
  timeInApartment: string;
  painPoint: string;
  wouldUse: string;
  additionalFeedback?: string;
}

interface InterestFormProps {
  onSubmit: (data: FormData) => void;
}

export function InterestForm({ onSubmit }: InterestFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setEmailError(null);

    // EmailJS Configuration
    const SERVICE_ID = 'service_r9x46qo';
    const TEMPLATE_ID = 'template_p2nmddc';
    const PUBLIC_KEY = 'CH8aGnegVB679M7Jb';

    try {
      // Send email via EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: 'scott@myrentis.com',
          from_email: data.email,
          from_phone: data.phone,
          currently_renting: data.currentlyRenting,
          time_in_apartment: data.timeInApartment,
          pain_point: data.painPoint,
          would_use: data.wouldUse,
          additional_feedback: data.additionalFeedback || 'None provided',
          submission_date: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      // Call the original onSubmit callback
      onSubmit(data);
    } catch (error: any) {
      console.error('Failed to send email:', error);
      setEmailError('Failed to send email. Your response has been saved locally.');
      
      // Still call onSubmit to show success message
      onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="interest-form" ref={ref}>
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <motion.div 
          className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-8 sm:px-12 py-10 text-white text-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Animated background shapes */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          ></motion.div>

          <motion.h2 
            className="relative text-4xl sm:text-5xl mb-4 font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Help Us Build This!
          </motion.h2>
          <motion.p 
            className="relative text-lg sm:text-xl text-indigo-50"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Share your thoughts and be the first to know when we launch
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="relative px-8 sm:px-12 py-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {emailError && (
            <motion.div 
              className="mb-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-yellow-800 text-sm">{emailError}</p>
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
            {/* Contact Information Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                Contact Information
              </h3>
              
              {/* Email */}
              <div>
                <motion.label 
                  htmlFor="email" 
                  className="block mb-2 text-gray-700 font-medium"
                  animate={focusedField === 'email' ? { color: '#4f46e5' } : {}}
                >
                  Email Address <span className="text-red-500">*</span>
                </motion.label>
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                >
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-indigo-500' : 'text-gray-400'}`} />
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-300"
                    placeholder="your@email.com"
                  />
                </motion.div>
                {errors.email && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Phone */}
              <div>
                <motion.label 
                  htmlFor="phone" 
                  className="block mb-2 text-gray-700 font-medium"
                  animate={focusedField === 'phone' ? { color: '#4f46e5' } : {}}
                >
                  Phone Number <span className="text-red-500">*</span>
                </motion.label>
                <motion.div 
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                >
                  <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-indigo-500' : 'text-gray-400'}`} />
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all hover:border-indigo-300"
                    placeholder="e.g., (123) 456-7890"
                  />
                </motion.div>
                {errors.phone && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Rental Information Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                Your Rental Situation
              </h3>

              {/* Currently Renting */}
              <div>
                <label htmlFor="currentlyRenting" className="block text-gray-700 font-medium mb-2">
                  What is your current living situation? <span className="text-red-500">*</span>
                </label>
                <select
                  id="currentlyRenting"
                  {...register('currentlyRenting', { required: 'Please select an option' })}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white hover:border-indigo-300 cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="yes">I am currently renting</option>
                  <option value="looking">I am looking to rent</option>
                  <option value="other">Other</option>
                </select>
                {errors.currentlyRenting && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.currentlyRenting.message}
                  </motion.p>
                )}
              </div>

              {/* Time in Apartment */}
              <div>
                <label htmlFor="timeInApartment" className="block text-gray-700 font-medium mb-2">
                  How long have you been in your current apartment? <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeInApartment"
                  {...register('timeInApartment', { required: 'Please select an option' })}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white hover:border-indigo-300 cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="not-currently-renting">Not currently renting</option>
                  <option value="1-12-months">1-12 months</option>
                  <option value="13-24-months">13-24 months</option>
                  <option value="24-plus-months">24 months or longer</option>
                </select>
                {errors.timeInApartment && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.timeInApartment.message}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Feedback Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3">
                Your Feedback
              </h3>

              {/* Pain Point */}
              <div>
                <label htmlFor="painPoint" className="block mb-2 text-gray-700 font-medium">
                  What's your biggest challenge when renting? <span className="text-red-500">*</span>
                </label>
                <select
                  id="painPoint"
                  {...register('painPoint', { required: 'Please select an option' })}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white hover:border-indigo-300 cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="knowing-fair-price">Not knowing if rent is fair market price</option>
                  <option value="hidden-fees">Unexpected fees and charges</option>
                  <option value="renewal-decisions">Deciding whether to renew or move</option>
                  <option value="negotiation">Not having data to negotiate</option>
                  <option value="comparison">Comparing multiple properties</option>
                  <option value="other">Other</option>
                </select>
                {errors.painPoint && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.painPoint.message}
                  </motion.p>
                )}
              </div>

              {/* Would Use */}
              <div>
                <label htmlFor="wouldUse" className="block mb-2 text-gray-700 font-medium">
                  Would you use an app that shows aggregated lease data? <span className="text-red-500">*</span>
                </label>
                <select
                  id="wouldUse"
                  {...register('wouldUse', { required: 'Please select an option' })}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-white hover:border-indigo-300 cursor-pointer"
                >
                  <option value="">Select...</option>
                  <option value="definitely">Definitely - I need this!</option>
                  <option value="probably">Probably - sounds useful</option>
                  <option value="maybe">Maybe - depends on the features</option>
                  <option value="not-sure">Not sure</option>
                </select>
                {errors.wouldUse && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1.5"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.wouldUse.message}
                  </motion.p>
                )}
              </div>

              {/* Additional Feedback */}
              <div>
                <motion.label 
                  htmlFor="additionalFeedback" 
                  className="block mb-2 text-gray-700 font-medium"
                  animate={focusedField === 'feedback' ? { color: '#4f46e5' } : {}}
                >
                  Any other thoughts or features you'd want to see? (Optional)
                </motion.label>
                <textarea
                  id="additionalFeedback"
                  {...register('additionalFeedback')}
                  onFocus={() => setFocusedField('feedback')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all hover:border-indigo-300"
                  placeholder="Share your ideas..."
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white py-4 px-6 rounded-xl transition-all text-lg font-semibold shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 hover:opacity-10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Submit & Get Updates'}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}