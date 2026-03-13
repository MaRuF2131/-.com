export default function PageGrid({ image,setPage,currentPage }) {

  return (

    <div className="grid grid-cols-1 gap-4 p-6">
        <img
          src={image}
          onClick={()=>setPage(currentPage+1)}
          className="cursor-pointer border"
        />
    </div>

  )
}