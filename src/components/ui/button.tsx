import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // --- Base Styles ---
  // 기본 스타일: 폰트 굵기, 전환 효과, 외곽선, 포커스링 등 공통 스타일 정의
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out active:scale-[.98] disabled:pointer-events-none disabled:bg-gray-100 disabled:text-gray-400 dark:disabled:bg-gray-700 dark:disabled:text-gray-500 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/60",
  {
    variants: {
      variant: {
        // --- Primary Variant ---
        // 주요 버튼: 토스의 시그니처 파란색 배경과 흰색 텍스트
        default:
          "bg-[#0064FF] text-white shadow-sm hover:bg-[#0055D4] dark:bg-[#0064FF] dark:hover:bg-[#0055D4]",

        // --- Destructive Variant ---
        // 파괴적 행위 버튼: 명확한 붉은색으로 경고의 의미 전달
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90 dark:bg-red-600 dark:hover:bg-red-700",

        // --- Secondary Variant ---
        // 보조 버튼: 회색 계열을 사용하여 Primary 버튼을 돋보이게 함
        secondary:
          "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",

        // --- Ghost Variant ---
        // Ghost 버튼: 배경 없이 텍스트만으로 구성하여 위계가 가장 낮음
        ghost:
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100",

        // --- Link Variant ---
        // 링크 버튼: 일반 텍스트 링크처럼 보이지만 버튼의 역할을 함
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // --- Sizing ---
        // 사이즈: 여백(padding)을 좀 더 넉넉하게 조정하여 시원한 느낌을 줌
        default: "h-11 px-5",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export default Button;
