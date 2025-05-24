
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
       <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://cloudflare-images.seekho.in/blog-image/compressed-banner/09015d69-7879-4f3e-b3a9-f575160f03dc/f757295dde9f483eae13c2cda98be8b2.webp" // Use optimized JPG instead of PNG
        preload="none" // Add preload="none" to prevent early loading
      >
        <source src="7670835-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        {/* Add WebM alternative for better compression */}
        <source src="/hero-video-optimized.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          MagicMoments
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white">
          Transform your ideas into stunning illustrations and logos with AI
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/demo"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            aria-label="Try demo"
          >
            Try Demo
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="View pricing"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}