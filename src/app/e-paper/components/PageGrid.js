export default function PageGrid({ pages,setPage }) {

  return (

    <div className="grid grid-cols-4 gap-4 p-6">

      {pages.map((p,i)=>(
        <img
          key={i}
          src={p}
          onClick={()=>setPage(i)}
          className="cursor-pointer border"
        />
      ))}

    </div>

  )
}