"use client";

import React, { ReactNode, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";


type ButtonProps<T extends React.ElementType = "button"> = {
  borderRadius?: string;
  children: ReactNode;
  as?: T;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends React.ElementType = "button">({
  borderRadius = "1.75rem",
  children,
  as,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps<T>) {
  const Component = as || "button";
  return React.createElement(
    Component,
    {
      className: cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl md:col-span-2",
        containerClassName
      ),
      style: {
        borderRadius: borderRadius,
      },
      ...otherProps,
    },
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,

        }}
      >
        {children}
      </div>
    </>
  );
}

type MovingBorderProps = {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.x ?? 0
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val)?.y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
