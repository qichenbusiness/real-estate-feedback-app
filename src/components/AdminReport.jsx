import { useState, useEffect } from 'react';
import { fetchResponses } from '../utils/api';

const AdminReport = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadResponses();
  }, []);

  const loadResponses = async () => {
    try {
      const data = await fetchResponses();
      setResponses(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching responses:', err);
      setError('Failed to load responses. Please check your Supabase connection.');
      setLoading(false);
    }
  };

  const formatCurrency = (num) => {
    if (!num || num === '') return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatRating = (rating) => {
    if (!rating || rating === '') return 'N/A';
    return `${rating} out of 5`;
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading responses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="card text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={loadResponses} className="btn-primary">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header - visible on screen and print */}
      <div className="mb-6 print:mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
          Feedback Report
        </h1>
        <h2 className="text-xl md:text-2xl text-primary-700 font-semibold mb-4">
          3561 W Dublin St, Chandler, AZ 85226
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Total Responses: <span className="font-bold">{responses.length}</span>
          </p>
          <button
            onClick={handlePrint}
            className="btn-primary print:hidden"
          >
            Print Report
          </button>
        </div>
      </div>

      {/* Table Container */}
      {responses.length === 0 ? (
        <div className="card text-center">
          <p className="text-gray-600 text-lg">No responses found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm print:text-xs">
            <thead>
              <tr className="bg-primary-800 text-white">
                <th className="border border-gray-400 p-2 text-left print:p-1">ID</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Date/Time</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Price Bracket</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Valuable Feature</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Turn-Key Budget</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Value Rating</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Preventing Factors</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">System Budget</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Appraisal</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Comparison</th>
                <th className="border border-gray-400 p-2 text-left print:p-1">Offer Trigger</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((response, index) => (
                <tr
                  key={response.id || index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border border-gray-300 p-2 print:p-1 font-mono text-xs">
                    {response.id || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {formatDate(response.timestamp)}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {response.q1_priceBracket || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1 max-w-xs">
                    <div className="truncate" title={response.q2_valuableFeature || ''}>
                      {response.q2_valuableFeature || 'N/A'}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {formatCurrency(response.q3_turnKeyBudget)}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1 text-center">
                    {formatRating(response.q4_valueRating)}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1 max-w-xs">
                    <div className="truncate" title={response.q5_preventingFactors || ''}>
                      {response.q5_preventingFactors || 'N/A'}
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {formatCurrency(response.q6_systemBudget)}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {response.q7_appraisalConfidence || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {response.q8_listingComparison || 'N/A'}
                  </td>
                  <td className="border border-gray-300 p-2 print:p-1">
                    {formatCurrency(response.q9_offerTriggerPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Print-specific styling via inline styles in CSS */}
      <style>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            background: white;
          }
          .print\\:hidden {
            display: none;
          }
          .print\\:mb-4 {
            margin-bottom: 1rem;
          }
          .print\\:p-1 {
            padding: 0.25rem;
          }
          .print\\:text-xs {
            font-size: 0.75rem;
          }
          table {
            page-break-inside: auto;
          }
          tr {
            page-break-inside: avoid;
            page-break-after: auto;
          }
          thead {
            display: table-header-group;
          }
          tfoot {
            display: table-footer-group;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminReport;
