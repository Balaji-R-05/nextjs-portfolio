"use client";
import Image from "next/image";
import { achievements } from "@/data";

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-black-100">
      <h2 className="text-3xl sm:text-5xl font-bold text-purple text-center mb-10">
        Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-[#0c0f20] p-4 rounded-xl border border-white/60 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
            <p className="text-sm text-neutral-100">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}