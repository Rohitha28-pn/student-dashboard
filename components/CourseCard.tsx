"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function CourseCard({ course }: any) {
  // 🔥 Safe dynamic icon selection
  const Icon = (Icons as any)[course.icon_name] || Icons.Book;

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-zinc-900 p-5 rounded-xl cursor-pointer relative overflow-hidden"
    >
      {/* 🔥 Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition duration-300" />

      {/* 🔥 Content */}
      <div className="relative z-10">
        {/* Icon */}
        <Icon className="text-purple-400 mb-3" size={28} />

        {/* Title */}
        <h2 className="font-semibold text-lg">{course.title}</h2>

        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-zinc-700 rounded">
          <motion.div
            className="h-2 bg-purple-500 rounded"
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Percentage */}
        <p className="text-sm text-gray-400 mt-2">
          {course.progress}%
        </p>
      </div>
    </motion.article>
  );
}