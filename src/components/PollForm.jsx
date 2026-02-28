"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function PollForm() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const selectedValue = watch("vote");

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-gray-300 rounded w-full h-full flex items-center justify-center p-2">

      <div className="bg-white  border border-gray-300 rounded w-full   p-2">

        {/* Header */}
        <div className="flex items-center gap-2 border-b-4 border-red-600 pb-2 mb-4">
          <span className="text-red-600 text-xl">📊</span>
          <h2 className="text-xl font-bold">অনলাইন জরিপ</h2>
        </div>

        {/* Date */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>🕒 ২৭ ফেব্রুয়ারি ২০২৬, ০৯:৪৫ পিএম</span>
          <span className="cursor-pointer">⬇</span>
        </div>

        {/* Images */}
        <div className="flex gap-2 mb-4">
          <img
            src="https://i.pravatar.cc/400?img=12"
            className="w-1/2 rounded-md object-cover"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/400?img=15"
            className="w-1/2 rounded-md object-cover"
            alt=""
          />
        </div>

        {/* Question */}
        <p className="font-semibold text-gray-800 mb-4">
          বাংলাদেশের জার্সি পরে দেশের পতাকা বহন করার নৈতিক সাহসই তাদের নেই,
          মন্তব্য আশিক মাহমুদের। তার এই মন্তব্যের সঙ্গে আপনি একমত?
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {["হ্যাঁ", "না", "মন্তব্য নেই"].map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 border rounded-md p-3 mb-3 cursor-pointer transition 
              ${selectedValue === option ? "border-red-600 bg-red-50" : "border-gray-300 hover:bg-gray-50"}`}
            >
              <input
                type="radio"
                value={option}
                {...register("vote", { required: "একটি অপশন নির্বাচন করুন" })}
                className="accent-red-600"
              />
              {option}
            </label>
          ))}

          {errors.vote && (
            <p className="text-red-500 text-sm mb-3">
              {errors.vote.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            ভোট দিন
          </button>

        </form>

        {submitted && (
          <p className="text-green-600 text-center mt-4">
            আপনার ভোট গ্রহণ করা হয়েছে ✅
          </p>
        )}

        <p className="text-center text-sm text-gray-500 mt-4">
          মোট ভোটদাতা: ১,৭৫৫ জন
        </p>

      </div>

    </div>
  );
}