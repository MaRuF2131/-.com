// components/Footer.tsx
import Link from "next/link";
import { 
  FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram, 
  FaTelegramPlane, FaTiktok // অতিরিক্ত যোগ করা যায় যদি থাকে
} from "react-icons/fa";

const option=[
  {
    "name": "কালবেলা",
    "path": "/"
  },
  {
    "name": "গোপনীয়তার নীতি",
    "path": "/privacy-policy"
  },
  {
    "name": "শর্তাবলি",
    "path": "/terms-and-conditions"
  },
  {
    "name": "মন্তব্য প্রকাশের নীতিমালা",
    "path": "/comment-policy"
  },
  {
    "name": "বাংলা কনভার্টার",
    "path": "/bangla-converter"
  },
  {
    "name": "বিজ্ঞাপন",
    "path": "/advertisement"
  },
  {
    "name": "যোগাযোগ",
    "path": "/contact"
  },
  {
    "name": "ছুটির তালিকা",
    "path": "/holiday-list"
  },
  {
    "name": "দিবস",
    "path": "/special-days"
  }
]


export default function Footer() {
  return (
    <footer className="w-full mt-10 pb-4 bg-white text-[#333333] text-[19px] leading-none  border-t border-[#dddddd]">

        <div className="flex flex-wrap items-start justify-between gap-5 w-full border-b p-3 border-b-gray-300">
            <p className="w-md">
                বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, লাইভ নিউজ, রাজনীতি, বাণিজ্য, খেলা, বিনোদনসহ সকল সর্বশেষ সংবাদ সবার আগে পড়তে ক্লিক করুন কালবেলা ডট কম।
            </p>
            <div className=" flex-1 flex flex-wrap items-center  justify-start md:gap-4 gap-x-3 gap-y-1">
                {option.map((v,i)=><Link className="text-xl font-bold font-black" href={v?.path} key={i}>{v?.name}</Link>)}
            </div>
        </div>
        
        {/* সম্পাদক + প্রকাশক + অ্যাড্রেস সেকশন */}
        <div className="flex flex-wrap items-start justify-between gap-5 w-full border-b py-6 px-3 border-b-gray-300">
           <div className="max-w-xl">
                <p className="font-bold  mb-1 text-[#111111]">
                    সম্পাদক: সন্তোষ শর্মা । প্রকাশক: মিয়া নুরুদ্দিন আহাম্মেদ অপু
                </p>
                <p>
                    কালবেলা মিডিয়া লিমিটেডের পক্ষে প্রকাশক কর্তৃক নিউমার্কেট সিটি কমপ্লেক্স, ৪৪/১, রহিম স্কয়ার,
                    নিউমার্কেট, ঢাকা থেকে প্রকাশিত এবং 
                    ২৮/বি, টয়েনবি সার্কুলার রোড, মতিঝিল ঢাকা, শরীয়তপুর প্রিন্টিং প্রেস থেকে মুদ্রিত।
                </p>
           </div>

            {/* যোগাযোগ + বিজ্ঞাপন + সার্কুলেশন */}
            <div className="flex-1">
                <p>
                ফোন : +৮৮ ০২ ৪৪৬১৭০০৩, +৮৮ ০২ ৪৪৬১৭০০৪ 
                </p>
                <p>
                <span>ফ্যাক্স : +৮৮ ০২ ৪৪৬১৭০০২ । ই-মেইল:<a href="mailto:news@kalbela.com" className=" hover:underline">news@kalbela.com</a></span>
                </p>
                <p className="">বিজ্ঞাপন বিভাগ:<span>ফোন: +৮৮ ০২ ৪৪৬১৭০০৫, ০১৭৩০ ০৯৩৩২৮ | ই-মেইল:<a href="mailto:ads@kalbela.com" className=" hover:underline">ads@kalbela.com</a></span></p>
                <p className="">সার্কুলেশন:ফোন: ০১৭৩০ ০৯৩৩৪৭ | কালবেলা মিডিয়া লিমিটেডের একটি প্রকাশনা।</p>
            </div>
        </div>

        {/* সোশ্যাল মিডিয়া + নিউজলেটার + অ্যাপ */}
        <div className="flex flex-wrap items-start justify-between gap-5 w-full  py-6 px-3 ">
            <div className="w-full max-w-md flex flex-col items-start justify-start">
                <p className="font-bold mb-2">সোশ্যাল মিডিয়া</p>
                <div className="flex flex-wrap items-start justify-start gap-1 text-3xl mb-4">
                    <a href="https://www.facebook.com/kalbeladigital/" className="text-[#3b5998] hover:opacity-80">
                    <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/@kalbelanews24" className="text-[#ff0000] hover:opacity-80">
                    <FaYoutube />
                    </a>
                    <a href="#" className="text-[#1da1f2] hover:opacity-80">
                    <FaTwitter />
                    </a>
                    <a href="#" className="text-[#e1306c] hover:opacity-80">
                    <FaInstagram />
                    </a>
                    <a href="#" className="text-[#0077b5] hover:opacity-80">
                    <FaLinkedinIn />
                    </a>
                    {/* আরো যদি থাকে: Likee, Soundcloud, Google News – আইকন যোগ করতে পারো */}
                </div>
           </div>
           <div className="flex-1 text-end">
                 <p className="mb-2">
                    নিউজলেটার কালবেলা থেকে প্রতিদিন মেইলে আপডেট পেতে সাবস্ক্রাইব করুন।
                </p>
                <p>
                    <Link href="#" className="text-[#0066cc] hover:underline">মোবাইল অ্যাপস</Link>
                </p>

           </div>

        </div>

        {/* কপিরাইট + ডিসক্লেইমার */}
        <div className="  flex items-center justify-between bg-[#ededed] py-2 px-3   text-[#555555]">
          <p className="">
            স্বত্ব © কালবেলা মিডিয়া লিমিটেড ২০২৬
          </p>
          <p>
            ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
          </p>
        </div>
    </footer>
  );
}