import React from "react";
import { useLocation } from "react-router-dom";

export default function VerifySuccess() {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold text-green-600">
          ✅ Email Verified!
        </h1>
        <p className="mt-2 text-gray-600">
          Your email <span className="font-semibold">{email}</span> has been
          successfully verified.
        </p>
        <a
          href="/login"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
        >
          Continue to Login
        </a>
      </div>
    </div>
  );
}
