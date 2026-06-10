import React from "react";

const AiIcon = () => (
  <svg
    className="w-10 h-10 text-purple-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 10v2m14-2v2M10 9h2m-2 6h2m-6-4h4m-4 0v4m4-4v4m-5.464-5.464l-.707.707m12.728 0l-.707-.707M6.464 17.464l-.707-.707m12.728 0l-.707.707M10 12a2 2 0 100-4 2 2 0 000 4z"
    ></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-400 mr-2 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const GenAISaasProductCard = () => {
  const features = [
    "Real-time data processing",
    "Advanced predictive analytics",
    "Automated workflow integration",
    "Scalable cloud infrastructure",
  ];

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-700 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/30">
      <div className="absolute inset-0 z-0 rounded-3xl opacity-40 blur-xl bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500"></div>

      <div className="relative z-10 flex flex-col items-start space-y-4 bg-gray-900 rounded-3xl p-6">
        <AiIcon />
        <h2 className="text-3xl font-extrabold text-white">Nimbus AI</h2>
        <p className="text-gray-400 text-base font-light">
          Revolutionizing intelligence, empowering innovation.
        </p>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>

        <ul className="space-y-3 text-lg text-white">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon />
              <span className="text-gray-300 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transform transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 active:scale-95">
          Explore Features
        </button>
      </div>
    </div>
  );
};

export default GenAISaasProductCard;
