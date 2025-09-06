import clsx from "clsx";

export type DividerProps = {
  className?: string;
  lineClassName?: string;
  leftDotClassName?: string;
  rightDotClassName?: string;
};

/**
 * Centered divider with a thin horizontal line and circular end caps.
 * Matches the inline markup used across pages for visual separation.
 */
export default function Divider({
  className,
  lineClassName,
  leftDotClassName,
  rightDotClassName,
}: DividerProps) {
  return (
    <div className={clsx("flex justify-center mt-8", className)}>
      <div className={clsx("relative w-28 h-px bg-black", lineClassName)}>
        <span
          className={clsx(
            "absolute -left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background",
            leftDotClassName
          )}
        />
        <span
          className={clsx(
            "absolute -right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full border border-[--color-border] bg-background",
            rightDotClassName
          )}
        />
      </div>
    </div>
  );
}
