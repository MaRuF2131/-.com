import { formatDate } from '@/utils/formatDate';
import Image from 'next/image'
import React from 'react'
import { FaRegClock } from 'react-icons/fa'

function PodcastCard({ news }) {
    console.log("news",news);
    
  return (
    <div className=" w-full group border  h-full border-gray-300 rounded-md p-2 cursor-pointer flex flex-wrap items-start justify-start gap-2">
      <div className='w-full flex flex-nowrap items-start justify-start gap-2'>
            <Image
                src={news?.thumbnail}
                alt={news?.title}
                width={120}
                height={84}
                className="rounded-md object-cover aspect-[10/6]"
            />

            <div className="flex flex-col justify-between">
                <h2 className="text-[22px] font-semibold opacity-80 group-hover:text-[#0a58ca] leading-none">
                {news?.title}
                </h2>

                <p className="text-lg opacity-70 flex items-center gap-1">
                <FaRegClock className="text-lg text-gray-600" />
                {formatDate(news?.createdAt)}
                </p>
            </div>
        </div>

      <audio controls className="w-full">
            <source src={news?.audioUrl} />
      </audio>

    </div>
  );
}

export default PodcastCard