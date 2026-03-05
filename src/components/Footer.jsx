// components/Footer.tsx
import Link from "next/link";
import { 
  FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram, 
  FaTelegramPlane, FaTiktok, // অতিরিক্ত যোগ করা যায় যদি থাকে
  FaWhatsapp,
  FaMailchimp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

  const option=[
    {
      "name": "কন্ঠস্বর",
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
      "path": "#"
    },
    {
      "name": "বিজ্ঞাপন",
      "path": "#"
    },
    {
      "name": "যোগাযোগ",
      "path": "/contact"
    },
    {
      "name": "ছুটির তালিকা",
      "path": "#"
    },
    {
      "name": "দিবস",
      "path": "#"
    }
  ]


export default function Footer() {
  return (
    <footer className="w-full relative mt-10 pb-4 bg-white text-[#333333] text-[19px] leading-none  border-t border-[#dddddd]">

        <div className="flex mt-5 md:mt-0 flex-wrap items-start justify-between gap-5 w-full border-b p-3 border-b-gray-300">
            <p className="w-md">
                বাংলাদেশ ও বিশ্বের সকল খবর, ব্রেকিং নিউজ, লাইভ নিউজ, রাজনীতি, বাণিজ্য, খেলা, বিনোদনসহ সকল সর্বশেষ সংবাদ সবার আগে পড়তে ক্লিক করুন কালবেলা ডট কম।
            </p>
            <div className="absolute no-scrollbar overflow-auto w-full md:static md:w-auto top-0 right-0 md:flex-1 flex md:flex-wrap flex-nowrap items-center  justify-start  gap-x-3 gap-y-1">
                {option.map((v,i)=><Link className="text-xl font-bold text-nowrap" href={v?.path} key={i}>{v?.name}</Link>)}
            </div>
        </div>
        
        {/* সম্পাদক + প্রকাশক + অ্যাড্রেস সেকশন */}
        <div className="flex flex-wrap items-start justify-between gap-5 w-full border-b py-6 px-3 border-b-gray-300">
           <div className="max-w-xl">
                <p className="font-bold  mb-1 text-[#111111]">
                    সম্পাদক: N/A । প্রকাশক: N/A
                </p>
                <p>
                    কন্ঠস্বর মিডিয়া লিমিটেডের হাউস ১৪ / ব্লক জে / রোড ৭, রামপুরা বনশ্রী, ঢাকা ১২১৯
                </p>
           </div>

            {/* যোগাযোগ + বিজ্ঞাপন + সার্কুলেশন */}
            <div className="flex-1">
                <p>
                ফোন : 01747773132 
                </p>
                <p>
                <span>ই-মেইল:<a href="mailto:Konthoshor24@gmail.com" className=" hover:underline">Konthoshor24@gmail.com</a></span>
                </p>
                <p className="">বিজ্ঞাপন বিভাগ:<span>ফোন: 01747773132| ই-মেইল:<a href="mailto:Konthoshor24@gmail.com" className=" hover:underline">Konthoshor24@gmail.com</a></span></p>
                <p className="">সার্কুলেশন:ফোন: 01747773132 | কন্ঠস্বর মিডিয়া লিমিটেডের একটি প্রকাশনা।</p>
            </div>
        </div>

        {/* সোশ্যাল মিডিয়া + নিউজলেটার + অ্যাপ */}
        <div className="flex flex-wrap items-start justify-between gap-5 w-full  py-6 px-3 ">
            <div className="w-full max-w-md flex flex-col items-start justify-start">
                <p className="font-bold mb-2">সোশ্যাল মিডিয়া</p>
                <div className="flex flex-wrap items-start justify-start gap-1 text-3xl mb-4">
                    <a href="https://www.facebook.com/share/1KciEdBv1Y/?mibextid=wwXIfr" className="text-[#3b5998] hover:opacity-80">
                    <FaFacebookF />
                    </a>
{/*                     <a href="#" className="text-[#ff0000] hover:opacity-80">
                    <FaYoutube />
                    </a>
                    <a href="#" className="text-[#1da1f2] hover:opacity-80">
                    <FaTwitter />
                    </a> */}
                    <a href="https://wa.me/8801747773132" className="text-[#e1306c] hover:opacity-80">
                    <FaWhatsapp />
                    </a>
                    <a href="mailto:Konthoshor24@gmail.com" className="text-[#0077b5] hover:opacity-80">
                    <MdEmail />
                    </a>
                    {/* আরো যদি থাকে: Likee, Soundcloud, Google News – আইকন যোগ করতে পারো */}
                </div>
           </div>
           <div className="flex-1 text-end">
                 <p className="mb-2">
                    নিউজলেটার কন্ঠস্বর থেকে প্রতিদিন মেইলে আপডেট পেতে সাবস্ক্রাইব করুন।
                </p>
                <p>
                    <Link href="#" className="text-[#0066cc] hover:underline">মোবাইল অ্যাপস</Link>
                </p>

           </div>

        </div>

        {/* কপিরাইট + ডিসক্লেইমার */}
        <div className="  flex items-center justify-between bg-[#ededed] py-2 px-3   text-[#555555]">
          <p className="">
            স্বত্ব © কন্ঠস্বর মিডিয়া লিমিটেড ২০২৬
          </p>
          <p>
            ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
          </p>
        </div>
    </footer>
  );
}