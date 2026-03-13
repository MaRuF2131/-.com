import { formatDate } from '@/utils/formatDate';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaRegClock } from 'react-icons/fa'

function PodcastCard({ news }) {
  return (
    <Link href={`/podcast/${news?._id}`} className="md:min-w-[34%] min-w-full sm:min-w-[70%] max-w-[400px] w-full group border  h-full border-gray-300 rounded-md p-2 cursor-pointer flex flex-nowrap items-start justify-start gap-2">
      
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

    </Link>
  );
}

export default PodcastCard