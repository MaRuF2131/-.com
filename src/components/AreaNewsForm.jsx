"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function AreaNewsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedDivision = watch("division");
  const selectedDistrict = watch("district");

  // Dummy Data
  const divisions = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী"];

  const districts = {
    ঢাকা: ["গাজীপুর", "নারায়ণগঞ্জ"],
    চট্টগ্রাম: ["কক্সবাজার", "রাঙ্গামাটি"],
    রাজশাহী: ["বগুড়া", "নাটোর"],
  };

  const upazilas = {
    গাজীপুর: ["কালিয়াকৈর", "টঙ্গী"],
    নারায়ণগঞ্জ: ["সিদ্ধিরগঞ্জ"],
    কক্সবাজার: ["টেকনাফ"],
    রাঙ্গামাটি: ["বাঘাইছড়ি"],
    বগুড়া: ["শাজাহানপুর"],
    নাটোর: ["লালপুর"],
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="w-full lg:border lg:rounded-xl lg:p-6 lg:bg-gray-50 lg:shadow-sm">
      
      {/* Title */}
      <div className="lg:flex hidden items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-orange-500"></div>
        <h2 className="text-xl font-bold">আমার এলাকার সংবাদ</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 lg:block flex justify-between flex-wrap">

        {/* Division */}
        <div className="w-[45%] lg:w-full">
          <select
            {...register("division", { required: "বিভাগ নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
          >
            <option value="">বিভাগ</option>
            {divisions.map((div, i) => (
              <option key={i} value={div}>
                {div}
              </option>
            ))}
          </select>
          {errors.division && (
            <p className="text-red-500 text-sm mt-1">
              {errors.division.message}
            </p>
          )}
        </div>

        {/* District */}
        <div className="w-[45%] lg:w-full">
          <select
            {...register("district", { required: "জেলা নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
            disabled={!selectedDivision}
          >
            <option value="">জেলা</option>
            {selectedDivision &&
              districts[selectedDivision]?.map((dist, i) => (
                <option key={i} value={dist}>
                  {dist}
                </option>
              ))}
          </select>
          {errors.district && (
            <p className="text-red-500 text-sm mt-1">
              {errors.district.message}
            </p>
          )}
        </div>

        {/* Upazila */}
        <div className="w-[45%] lg:w-full">
          <select
            {...register("upazila", { required: "উপজেলা নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
            disabled={!selectedDistrict}
          >
            <option value="">উপজেলা</option>
            {selectedDistrict &&
              upazilas[selectedDistrict]?.map((upa, i) => (
                <option key={i} value={upa}>
                  {upa}
                </option>
              ))}
          </select>
          {errors.upazila && (
            <p className="text-red-500 text-sm mt-1">
              {errors.upazila.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="lg:w-full lg:h-auto h-12 w-[47%] bg-gray-700 text-white lg:py-3 py-0 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          অনুসন্ধান <FiSearch />
        </button>

      </form>
    </div>
  );
}