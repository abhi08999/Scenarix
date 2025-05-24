"use client";

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { createClient } from "pexels";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

const PER_PAGE = 20;

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPhotoRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || "");
        const response = await client.photos.search({
          query: "ai generated art",
          per_page: PER_PAGE,
          page,
        });

        if ("error" in response) {
          throw new Error(response.error);
        }

        const newPhotos = response.photos.map((photo: any) => ({
          id: photo.id,
          title: photo.alt || "Untitled",
          description: photo.alt || "No description available",
          image: photo.src.large2x,
          tags: ["Abstract", "Digital", "Art"],
          photographer: photo.photographer,
          photographerUrl: photo.photographer_url,
        }));

        setPhotos(prev => (page === 1 ? newPhotos : [...prev, ...newPhotos]));
        setHasMore(newPhotos.length === PER_PAGE);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (loading && page === 1) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading gallery...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
          aria-label="Try Again"
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore our collection of AI-generated artwork
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => {
            if (photos.length === idx + 1) {
              // Attach ref to last photo for infinite scroll
              return (
                <div
                  key={photo.id}
                  ref={lastPhotoRef}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {photo.description}
                    </p>
                  </div>
                </div>
              );
            }
            return (
              <div
                key={photo.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative aspect-square">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {photo.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {loading && page > 1 && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        )}
        {!hasMore && !loading && (
          <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
            No more images to load.
          </div>
        )}
      </div>
    </div>
  );
}
