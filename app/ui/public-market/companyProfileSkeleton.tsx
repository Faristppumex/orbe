export default function CompanyProfileSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-pulse">
      {/* Left Column */}
      <div className="md:col-span-5 col-span-12 space-y-4">
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300" />
          <div className="ml-4 space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-24" />
            <div className="flex space-x-2">
              <div className="h-6 w-16 bg-gray-300 rounded-3xl" />
              <div className="h-6 w-16 bg-gray-300 rounded-3xl" />
            </div>
            <div className="h-5 bg-gray-300 rounded w-32" />
            <div className="h-3 bg-gray-300 rounded w-28" />
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-1/2" />
          <div className="h-3 bg-gray-300 rounded w-32" />
        </div>
      </div>

      {/* Middle Column */}
      <div className="md:col-span-2 col-span-12 space-y-4 pt-3">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i}>
            <div className="h-3 bg-gray-300 rounded w-24 mb-1" />
            <div className="h-4 bg-gray-300 rounded w-32" />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="md:col-span-5 col-span-12 flex flex-col space-y-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-5 w-32 bg-gray-300 rounded" />
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>

        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="h-5 w-5 bg-gray-300 rounded-full" />
            <div className="h-4 w-48 bg-gray-300 rounded" />
          </div>
        ))}

        <div className="mt-4 h-9 w-48 bg-gray-300 rounded-3xl" />
      </div>
    </div>
  );
}
