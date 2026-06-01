"use client";

import { Home, Book, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { icon: Home, id: "home" },
  { icon: Book, id: "courses" },
  { icon: User, id: "profile" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="w-20 bg-zinc-900 h-screen flex flex-col items-center py-6 relative">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            onClick={() => setActive(item.id)}
            className="relative mb-4 cursor-pointer"
          >
            {/* 🔥 Animated background */}
            {active === item.id && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 bg-purple-500/20 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}

            <div className="p-4 relative z-10">
              <Icon className="text-white" />
            </div>
          </div>
        );
      })}
    </nav>
  );
}