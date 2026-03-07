import { BarChart3, Shield, DollarSign, Calendar } from 'lucide-react';

export function Features() {

  const features = [
    {
      icon: BarChart3,
      title: 'Aggregated Data',
      description: 'See average rent, deposits, and fees for your unit type in real-time',
      color: 'indigo',
    },
    {
      icon: DollarSign,
      title: 'Price Comparison',
      description: 'Know if you\'re paying fair market rates or being overcharged',
      color: 'blue',
    },
    {
      icon: Calendar,
      title: 'Renewal Insights',
      description: 'Make informed decisions about lease renewals with market trends',
      color: 'purple',
    },
    {
      icon: Shield,
      title: 'Anonymous & Secure',
      description: 'Your data is aggregated and anonymized to protect your privacy',
      color: 'green',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
    blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your lease information is not confidential. We will ask for your lease charges, monthly invoices and utility invoices to complete a full picture of annual costs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const colors = colorMap[feature.color];
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className={`${colors.bg} rounded-xl p-3 flex-shrink-0 border ${colors.border}`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}