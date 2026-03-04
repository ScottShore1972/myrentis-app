import { useState, useEffect } from 'react';
import { Download, Trash2, RefreshCw } from 'lucide-react';

interface Submission {
  email: string;
  phone: string;
  currentlyRenting: string;
  timeInApartment: string;
  painPoint: string;
  wouldUse: string;
  additionalFeedback?: string;
  timestamp: string;
}

export function AdminView() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const loadSubmissions = () => {
    const data = localStorage.getItem('leaseAppSubmissions');
    if (data) {
      setSubmissions(JSON.parse(data));
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const downloadAsJSON = () => {
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lease-app-submissions-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadAsCSV = () => {
    if (submissions.length === 0) return;

    const headers = [
      'Email',
      'Phone',
      'Currently Renting',
      'Time in Apartment',
      'Pain Point',
      'Would Use',
      'Additional Feedback',
      'Timestamp',
    ];

    const csvRows = [
      headers.join(','),
      ...submissions.map((sub) =>
        [
          sub.email,
          sub.phone,
          sub.currentlyRenting,
          sub.timeInApartment,
          sub.painPoint,
          sub.wouldUse,
          sub.additionalFeedback || '',
          sub.timestamp,
        ]
          .map((field) => `"${field}"`)
          .join(',')
      ),
    ];

    const csvStr = csvRows.join('\n');
    const dataBlob = new Blob([csvStr], { type: 'text/csv' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lease-app-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearAllData = () => {
    if (
      window.confirm(
        'Are you sure you want to delete all submissions? This cannot be undone.'
      )
    ) {
      localStorage.removeItem('leaseAppSubmissions');
      setSubmissions([]);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getLabelForValue = (field: string, value: string) => {
    const labels: Record<string, Record<string, string>> = {
      currentlyRenting: {
        yes: 'Currently renting',
        looking: 'Looking to rent',
        other: 'Other',
      },
      timeInApartment: {
        '1-12-months': '1-12 months',
        '13-24-months': '13-24 months',
        '24-plus-months': '24 months or longer',
      },
      painPoint: {
        'knowing-fair-price': 'Not knowing if rent is fair market price',
        'hidden-fees': 'Unexpected fees and charges',
        'renewal-decisions': 'Deciding whether to renew or move',
        negotiation: 'Not having data to negotiate',
        comparison: 'Comparing multiple properties',
        other: 'Other',
      },
      wouldUse: {
        definitely: 'Definitely - I need this!',
        probably: 'Probably - sounds useful',
        maybe: 'Maybe - depends on the features',
        'not-sure': 'Not sure',
      },
    };

    return labels[field]?.[value] || value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-10 text-white">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-indigo-50 text-lg">
              View and download form submissions
            </p>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="text-gray-700 font-medium">
                Total Submissions: <span className="text-indigo-600 text-xl">{submissions.length}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={loadSubmissions}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
                <button
                  onClick={downloadAsJSON}
                  disabled={submissions.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  Download JSON
                </button>
                <button
                  onClick={downloadAsCSV}
                  disabled={submissions.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  Download CSV
                </button>
                <button
                  onClick={clearAllData}
                  disabled={submissions.length === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>
            </div>
          </div>

          {/* Submissions List */}
          <div className="p-8">
            {submissions.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-xl mb-2">No submissions yet</p>
                <p className="text-sm">Submissions will appear here once users fill out the form</p>
              </div>
            ) : (
              <div className="space-y-6">
                {submissions.map((submission, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-indigo-200 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Submission #{submissions.length - index}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {formatDate(submission.timestamp)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Email</p>
                        <p className="text-gray-900 font-medium">{submission.email}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Phone</p>
                        <p className="text-gray-900 font-medium">{submission.phone}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Living Situation</p>
                        <p className="text-gray-900 font-medium">
                          {getLabelForValue('currentlyRenting', submission.currentlyRenting)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Time in Apartment</p>
                        <p className="text-gray-900 font-medium">
                          {getLabelForValue('timeInApartment', submission.timeInApartment)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Biggest Challenge</p>
                        <p className="text-gray-900 font-medium">
                          {getLabelForValue('painPoint', submission.painPoint)}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-1">Interest Level</p>
                        <p className="text-gray-900 font-medium">
                          {getLabelForValue('wouldUse', submission.wouldUse)}
                        </p>
                      </div>

                      {submission.additionalFeedback && (
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600 mb-1">Additional Feedback</p>
                          <p className="text-gray-900 font-medium">
                            {submission.additionalFeedback}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-900 mb-3">
            ⚠️ Important: localStorage Limitations
          </h3>
          <div className="text-yellow-800 space-y-2 text-sm">
            <p>
              • Data is stored in your browser's localStorage and will be cleared if you clear browser data
            </p>
            <p>
              • Each user's submission is only visible on their own device
            </p>
            <p>
              • For production use, you'll need a real database (Supabase, Firebase, etc.)
            </p>
            <p>
              • Download the data regularly to avoid losing submissions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
