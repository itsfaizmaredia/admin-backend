import { Card } from "@capstone/ui";

export default function NewCoursePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Create Course</h1>
      <Card>
        <form className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Course title
            </label>
            <input
              id="title"
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}
