export default function PageSidebar({ pages, setPage }) {

  return (

    <div className="w-32 md:block hidden border-r overflow-y-auto">

      <div className="bg-blue-600 text-white text-center py-2">
        সকল পাতা
      </div>

      {pages.map((p,i)=>(
        <div
          key={i}
          onClick={()=>setPage(i)}
          className="p-2 cursor-pointer"
        >
          <img src={p} />
        </div>
      ))}

    </div>

  )
}