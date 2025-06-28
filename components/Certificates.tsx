'use client';

import { HorizontalInfiniteScrollCards } from './ui/HorizontalInfiniteScrollCards';
import { certificates } from '@/data';

export default function Certificates() {
  return (
    <section className="py-20 bg-[#0d0d0d] text-white" id="certificates">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold mb-2 text-purple">Certificates</h2>
        <blockquote className="mt-4 text-sm sm:text-base italic text-gray-400 max-w-2xl mx-auto">
          &ldquo;The illiterate of the 21st century will not be those who cannot read and write,
          but those who cannot learn, unlearn, and relearn.&rdquo; – Alvin Toffler
        </blockquote>
      </div>

      <div className="relative">
        <HorizontalInfiniteScrollCards allItems={certificates} />
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm sm:text-base">
          Scroll right to explore my learning journey
        </p>
      </div>
    </section>
  );
}