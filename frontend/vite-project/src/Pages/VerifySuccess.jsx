import React from "react";
import { useLocation } from "react-router-dom";

export default function VerifySuccess() {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");
  const geoDataRaw = query.get("geoData");

  let geoData = {};
  try {
    if (geoDataRaw) {
      geoData = JSON.parse(decodeURIComponent(geoDataRaw));
    }
  } catch (e) {
    console.error("Failed to parse geoData", e);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-green-600 text-center">
          ✅ Email Verified!
        </h1>
        <p className="mt-2 text-gray-700 text-center">
          Your email <span className="font-semibold">{email}</span> has been
          successfully verified.
        </p>

        {/* GeoData Display */}
        {geoData && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800">
              🌍 Approximate Location Details:
            </h2>
            <pre className="mt-2 bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {JSON.stringify(geoData, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
          >
            Continue to Login
          </a>
        </div>
      </div>
    </div>
  );
}
