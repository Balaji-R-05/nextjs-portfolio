'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type Certificate = {
  desc: string;
  name: string;
  time: string;
  image: string;
  tags?: string[];
};

export const HorizontalInfiniteScrollCards = ({
  allItems,
  className,
}: {
  allItems: Certificate[];
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const [visibleItems, setVisibleItems] = useState<Certificate[]>([]);
  const [loadCount, setLoadCount] = useState(1);
  const ITEMS_PER_LOAD = 4;

  useEffect(() => {
    setVisibleItems(allItems.slice(0, loadCount * ITEMS_PER_LOAD));
  }, [loadCount, allItems]);

  useEffect(() => {
    const currentLoader = loaderRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setLoadCount((prev) => prev + 1);
          }, 300);
        }
      },
      { root: scrollRef.current, threshold: 1.0 }
    );

    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, []);


  return (
    <div
      ref={scrollRef}
      className={cn(
        'relative z-20 max-w-7xl overflow-x-auto whitespace-nowrap px-4 pb-4',
        'scrollbar-hide',
        className
      )}
    >
      <div className="flex gap-6 w-max">
        {visibleItems.map((item, idx) => (
          <div
            key={idx}
            className="inline-block w-[320px] sm:w-[380px] shrink-0 rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg p-4 transition hover:shadow-xl"
          >
            <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border border-zinc-800">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-md font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500">{item.time}</p>
              <p className="text-sm text-gray-300 mt-1 whitespace-normal">
                {item.desc}
              </p>

              {item.tags?.length && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className= "bg-zinc-700/50 text-zinc-200 text-xs px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        <div ref={loaderRef} className="w-[1px] h-full bg-transparent shrink-0" />
      </div>
    </div>
  );
};
