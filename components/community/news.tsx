import Image from "next/image";
import { Badge } from "../ui/badge";
import NewsCard from "../cards/newsCard";
const News = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-bold text-primary">Trending</h1>
          <h3 className="text-xs text-primary">view all</h3>
        </div>
        <div className="flex flex-row gap-4 overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
            <div
              key={idx}
              className="relative shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(44,47,48,0.06)] group"
            >
              <Image
                src="/car.jpeg"
                alt="Trending-news"
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <Badge className="uppercase mb-1">Sustainability</Badge>
                <h3 className="text-white font-headline text-md leading-tight mb-2">
                  The Rise of Sustainable Commuting
                </h3>
                <p className="text-white/70 text-xs font-medium">
                  5 min read • 2 hours ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-lg font-bold text-primary">Latest News</h1>
      <NewsCard />
    </div>
  );
};
export default News;
