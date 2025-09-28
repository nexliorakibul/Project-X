interface Params { params: { id: string } }
export default function SemesterPage({ params }: Params) {
  const { id } = params;
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Semester {id}</h2>
      <p>TODO: List courses for this semester (SSR/DB).</p>
    </div>
  );
}
