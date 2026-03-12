"use client";

import { useState, useEffect } from "react";
import ReporterGallery from "./components/ReporterGallery";
import api from "../service/axios";

export default function ReporterPage() {
  const [reporters, setReporters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reporters from backend
  useEffect(() => {
    const fetchReporters = async () => {
      try {
        const res = await api.get("/admin/reporter"); // adjust your API route
        setReporters(res.data?.data || []);
      } catch (err) {
        console.error("Reporter fetch error:", err);
        setReporters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReporters();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">আমাদের সাংবাদিক</h1>

      {loading ? (
        <div className="text-center text-gray-500">লোড হচ্ছে...</div>
      ) : (
        <ReporterGallery reporters={reporters} />
      )}
    </div>
  );
}