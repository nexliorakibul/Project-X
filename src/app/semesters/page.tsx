export default function SemestersPage() {
  const semesters = Array.from({ length: 12 }).map((_, i) => i + 1);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Semesters</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {semesters.map((s) => (
          <a key={s} href={`/semesters/${s}`} className="border rounded-xl p-4 hover:bg-gray-50">
            Semester {s}
          </a>
        ))}
      </div>
    </div>
  );
}
