"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <motion.div
      className={cn("animate-pulse rounded-md bg-muted/50", className)}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <Skeleton className="h-4 w-32 mx-auto" />
        <div className="space-y-4">
          <Skeleton className="h-16 md:h-20 lg:h-24 w-full max-w-md mx-auto" />
          <Skeleton className="h-16 md:h-20 lg:h-24 w-full max-w-lg mx-auto" />
        </div>
        <Skeleton className="h-6 w-8 mx-auto" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-32" />
        </div>
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
