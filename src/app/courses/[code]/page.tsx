interface Params { params: { code: string } }
export default function CoursePage({ params }: Params) {
  const { code } = params;
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{code}</h2>
      <div className="border rounded-xl p-4">
        <p>Tabs: Curriculum | Resources | Past Papers | Labs | Slides | Books | FAQs</p>
      </div>
    </div>
  );
}
