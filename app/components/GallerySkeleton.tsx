// app/components/GallerySkeleton.tsx
export default function GallerySkeleton() {
  return (
    <div className="animate-pulse space-y-8 py-20">
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}