"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import {
  Sun,
  Moon,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const nav = [
  {
    section: "START HERE",
    items: [
      { label: "Welcome", emoji: "👋", href: "/" },
      { label: "Why My Background Makes Sense", emoji: "⭐", href: "/why" },
      { label: "Connecting The Dots", emoji: "🧭", href: "/dots" },
    ],
  },
  {
    section: "THINKING AREAS",
    items: [
      { label: "Strategy", emoji: "📈", href: "/thinking/strategy" },
      { label: "Growth", emoji: "🚀", href: "/thinking/growth" },
      { label: "Product", emoji: "📦", href: "/thinking/product" },
      { label: "Analytics", emoji: "📊", href: "/thinking/analytics" },
      { label: "Operations", emoji: "⚙️", href: "/thinking/operations" },
      { label: "Finance", emoji: "💰", href: "/thinking/finance" },
    ],
  },
  {
    section: "EXPERIENCES",
    items: [
      { label: "Consulting", emoji: "🏦", href: "/experience/consulting" },
      { label: "Venture Capital", emoji: "💎", href: "/experience/vc" },
      { label: "Consumer Brands", emoji: "🥤", href: "/experience/consumer" },
      { label: "MBA @ Carnegie Mellon", emoji: "🏛", href: "/experience/mba" },
      { label: "Chime", emoji: "💳", href: "/experience/chime" },
      { label: "Rena Pastry", emoji: "🍰", href: "/experience/rena" },
    ],
  },
  {
    section: "PROJECTS",
    items: [
      { label: "Case Study Library", emoji: "📁", href: "/projects" },
    ],
  },
  {
    section: "ABOUT",
    items: [
      { label: "Resume", emoji: "📄", href: "/resume" },
      { label: "Articles", emoji: "✍️", href: "/articles" },
      { label: "Contact", emoji: "📬", href: "/contact" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: typeof theme; icon: React.ReactNode }[] = [
    { value: "light", icon: <Sun size={13} /> },
    { value: "dark", icon: <Moon size={13} /> },
    { value: "system", icon: <Monitor size={13} /> },
  ];

  return (
    <motion.aside
      animate={{ width: collapsed ? 56 : 228 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative flex flex-col h-screen border-r border-sidebar-border bg-sidebar-bg shrink-0 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-sidebar-border">
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-semibold text-foreground tracking-tight pl-1"
            >
              FondaOS
            </motion.span>
          )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-sidebar-item-hover transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-5">
        {nav.map((group) => (
          <div key={group.section}>
            <AnimatePresence>
              {!collapsed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] font-semibold tracking-widest text-muted-foreground/60 uppercase px-2 mb-1"
                >
                  {group.section}
                </motion.p>
              )}
            </AnimatePresence>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      title={collapsed ? item.label : undefined}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
                        "text-sidebar-item hover:text-foreground hover:bg-sidebar-item-hover",
                        active && "text-foreground bg-sidebar-item-active font-medium"
                      )}
                    >
                      <span className="text-base shrink-0 w-5 text-center">
                        {item.emoji}
                      </span>
                      <AnimatePresence>
                        {!collapsed && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.15 }}
                            className="truncate"
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer — theme toggle */}
      <div className="px-3 py-3 border-t border-sidebar-border">
        <AnimatePresence>
          {!collapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1 bg-muted rounded-md p-0.5"
            >
              {themeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={cn(
                    "flex-1 flex items-center justify-center py-1 rounded text-muted-foreground transition-colors",
                    theme === opt.value
                      ? "bg-background text-foreground shadow-sm"
                      : "hover:text-foreground"
                  )}
                >
                  {opt.icon}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setTheme(
                  theme === "dark" ? "light" : theme === "light" ? "system" : "dark"
                )
              }
              className="w-full flex justify-center text-muted-foreground hover:text-foreground p-1"
            >
              {theme === "dark" ? (
                <Moon size={14} />
              ) : theme === "light" ? (
                <Sun size={14} />
              ) : (
                <Monitor size={14} />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
}
