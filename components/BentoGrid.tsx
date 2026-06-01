"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

export default function BentoGrid({ courses }: any) {
  return (
    <motion.main
      className="grid grid-cols-3 gap-4 p-6 w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* 🔥 HERO TILE */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        className="col-span-2 bg-zinc-900 p-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-gray-400 mt-2">
          You’re on a 5-day learning streak 🚀
        </p>
      </motion.section>

      {/* 🔥 COURSE CARDS */}
      {courses.map((course: any) => (
        <motion.div
          key={course.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.main>
  );
}