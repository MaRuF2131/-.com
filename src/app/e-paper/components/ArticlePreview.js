export default function ArticlePreview({ page }) {

  return (
    <div className="w-[420px] border-l bg-gray-100 p-4 overflow-y-auto">

      <img
        src={page}
        className="w-full shadow"
      />

    </div>
  );
}