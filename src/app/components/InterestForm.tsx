import { useForm } from 'react-hook-form';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setEmailError(null);

    const SERVICE_ID = 'service_r9x46qo';
    const TEMPLATE_ID = 'template_p2nmddc';
    const PUBLIC_KEY = 'CH8aGnegVB679M7Jb';

    try {
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

      if (result.status === 200) {
        onSubmit(data);
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
      setEmailError('There was an issue sending your submission. Please try again or email us directly at scott@myrentis.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6" id="interest-form">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-6 sm:px-8 py-6 text-white text-center">
          <h2 className="text-3xl sm:text-4xl mb-3 font-bold">
            Help Us Build This!
          </h2>
          <p className="text-base sm:text-lg text-indigo-50">
            Share your thoughts and be the first to know when we launch
          </p>
        </div>

        <div className="px-6 sm:px-8 py-6">
          {emailError && (
            <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 text-sm">{emailError}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Contact Information
              </h3>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Help Us Understand Your Needs
              </h3>

              <div>
                <label htmlFor="communityName" className="block mb-2 text-gray-700 font-medium">
                  What is the name of your community? <span className="text-red-500">*</span>
                </label>
                <input
                  id="communityName"
                  type="text"
                  {...register('communityName', { required: 'Community name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your apartment community name"
                />
                {errors.communityName && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.communityName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="timeInApartment" className="block mb-2 text-gray-700 font-medium">
                  How long have you been in your current apartment? <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeInApartment"
                  {...register('timeInApartment', { required: 'Please select an option' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="less-than-1">Less than 1 year</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-plus">5+ years</option>
                  <option value="not-applicable">Not currently renting</option>
                </select>
                {errors.timeInApartment && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.timeInApartment.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="painPoint" className="block mb-2 text-gray-700 font-medium">
                  What's your biggest pain point when renting? <span className="text-red-500">*</span>
                </label>
                <select
                  id="painPoint"
                  {...register('painPoint', { required: 'Please select an option' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="pricing">Not knowing if I'm paying a fair price</option>
                  <option value="hidden-fees">Hidden fees and charges</option>
                  <option value="renewal-decisions">Deciding whether to renew my lease</option>
                  <option value="comparison">Comparing options across properties</option>
                  <option value="other">Other</option>
                </select>
                {errors.painPoint && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.painPoint.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="wouldUse" className="block mb-2 text-gray-700 font-medium">
                  Would you use a tool that shows you how your rent compares to your neighbors? <span className="text-red-500">*</span>
                </label>
                <select
                  id="wouldUse"
                  {...register('wouldUse', { required: 'Please select an option' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="definitely">Definitely! I'd use it right away</option>
                  <option value="probably">Probably, if it's easy to use</option>
                  <option value="maybe">Maybe, depends on the features</option>
                  <option value="unsure">Not sure</option>
                </select>
                {errors.wouldUse && (
                  <p className="text-red-500 text-sm mt-1.5">{errors.wouldUse.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="additionalFeedback" className="block mb-2 text-gray-700 font-medium">
                  Any additional feedback or features you'd like to see?
                </label>
                <textarea
                  id="additionalFeedback"
                  {...register('additionalFeedback')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Share your thoughts..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
