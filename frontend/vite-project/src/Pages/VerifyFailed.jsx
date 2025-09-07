import React from "react";

export default function VerifyFailed() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          ❌ Verification Failed
        </h1>
        <p className="mt-2 text-gray-600">
          Something went wrong. Please try again.
        </p>
        <a
          href="/login"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
