"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FaFacebookF, FaInstagram, FaShareAlt, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Pagination from "@/app/service/Pagination";
import Link from "next/link";

export default function PhotoGallery() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [slideData,setslideData]=useState(null)
  const [newsData, setNewsData] = useState([]);
  const loadMoreRef = useRef();
  const router=useRouter()
      const {
          data,
          fetchNextPage,
          hasNextPage,
          isFetchingNextPage,
          isFetching,
          status
         } = Pagination({
          url:`/user/news`,
          keyValuepair:{
            id:"",
            division:"",
            distic:"",
            upozela:"",
            locationType:'',
            subcategory:'',
            category:"",
            database:"photo_gallery"
            },
            page:1,limit:5
          });
  
        useEffect(()=>{
          console.log("data",data);
            if(data){ 
              const value=data?.pages?.flatMap((page) => page?.data?.data) || []; 
              setNewsData(value);
            }
        },[data])

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const click=(slide)=>{
        console.log(slide);
        
     setslideData(slide) 
    /* router.push(`/photo-story/${id}`) */
  }


  return (
    <div className="bg-[#1f1f1f] p-4 text-white w-full">
        <div className=" w-full gap-10 pb-4 flex items-center justify-between">
           <Link href={`#`}  className="text-3xl ">ফটোগ্যালারি</Link>
           <p className="h-1 flex-1 bg-rose-50"></p>
        </div>

      <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-4 md:h-[505px] h-auto">

        {/* LEFT GALLERY */}
        <div className="md:col-span-3 col-span-1 ">

          <div className="relative w-full  ">

            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded"
            >
              {(slideData||newsData[0])?.images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative border-4 border-rose-50">

                    <img
                      src={item.imageUrl}
                      className="w-full h-[420px] object-cover"
                    />

                    {/* Caption */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-xl leading-none">
                      {item.caption}
                    </div>

                    {/* Social icons */}
                    <div className="absolute right-3 top-3 flex flex-col gap-2">

                      <div className="bg-black/60 p-2 rounded cursor-pointer">
                        <FaFacebookF />
                      </div>

                      <div className="bg-black/60 p-2 rounded cursor-pointer">
                        <FaInstagram />
                      </div>

                      <div className="bg-black/60 p-2 rounded cursor-pointer">
                        <FaTwitter />
                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full flex justify-center mt-1">
                <button className="cursor-pointer flex text-center  items-center gap-2 text-sm bg-black/60 px-3 py-1 rounded">
                        <FaShareAlt />
                        Share
                </button>
            </div>
            <div className="w-full flex justify-center z-50 ">
                {/* Thumbnails */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView="auto"
                    spaceBetween={10}
                    centeredSlides={true}
                    slideToClickedSlide={true}
                    watchSlidesProgress={true}
                    className="mt-1 w-fit"
                >
                {(slideData||newsData[0])?.images.map((item, i) => (
                    <SwiperSlide key={i} className="!w-30">
                    <img
                        src={item.imageUrl}
                        className="h-12 w-full object-cover cursor-pointer"
                    />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-4 col-span-1 overflow-auto no-scrollbar md:h-full h-[400px] md:border-l-2 md:pl-2 md:border-rose-50">

          {newsData.slice(1).map((item, i) => (
            <div onClick={()=>click(item)} key={i} className="relative group cursor-pointer ">

              <img
                src={item?.images[0]?.imageUrl}
                className="w-full md:h-32 h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute text-xl bottom-2 left-2 right-2  font-medium leading-none">
                {item.title}
              </div>

            </div>
          ))}

           <div ref={loadMoreRef}>
           </div>

        </div>
      </div>
    </div>
  );
}