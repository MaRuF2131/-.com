"use client";

import { useForm, useWatch } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import { DivisionList } from "@/json.data/DivisionList";
import { useEffect } from "react";

export default function AreaNewsForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  // watch values reactively
  const selectedDivision = useWatch({ control, name: "division" });
  const selectedDistrict = useWatch({ control, name: "district" });

  // Reset district & upazila when division changes
  useEffect(() => {
    setValue("district", "");
    setValue("upazila", "");
  }, [selectedDivision, setValue]);

  // Reset upazila when district changes
  useEffect(() => {
    setValue("upazila", "");
  }, [selectedDistrict, setValue]);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  const districts = selectedDivision ? Object.keys(DivisionList[selectedDivision]) : [];
  const upazilas =
    selectedDivision && selectedDistrict
      ? DivisionList[selectedDivision][selectedDistrict]
      : [];

  return (
    <div className="w-full lg:border lg:rounded-xl lg:p-6 lg:bg-gray-50 lg:shadow-sm">
      {/* Title */}
      <div className="lg:flex hidden items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-orange-500"></div>
        <h2 className="text-xl font-bold">আমার এলাকার সংবাদ</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-wrap justify-between"
      >
        {/* Division */}
        <div className="w-[48%] lg:w-full">
          <select
            {...register("division", { required: "বিভাগ নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
          >
            <option value="">বিভাগ</option>
            {Object.keys(DivisionList).map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>
          {errors.division && (
            <p className="text-red-500 text-sm mt-1">{errors.division.message}</p>
          )}
        </div>

        {/* District */}
        <div className="w-[48%] lg:w-full">
          <select
            {...register("district", { required: "জেলা নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
            disabled={!selectedDivision}
          >
            <option value="">জেলা</option>
            {districts.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
          {errors.district && (
            <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
          )}
        </div>

        {/* Upazila */}
        <div className="w-[48%] lg:w-full">
          <select
            {...register("upazila", { required: "উপজেলা নির্বাচন করুন" })}
            className="w-full border rounded-lg p-3 bg-white"
            disabled={!selectedDistrict}
          >
            <option value="">উপজেলা</option>
            {upazilas.map((upa) => (
              <option key={upa} value={upa}>
                {upa}
              </option>
            ))}
          </select>
          {errors.upazila && (
            <p className="text-red-500 text-sm mt-1">{errors.upazila.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-[48%] lg:w-full h-12 lg:h-10  bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
        >
          অনুসন্ধান <FiSearch />
        </button>
      </form>
    </div>
  );
}