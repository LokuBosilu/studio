import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      className={cn("text-foreground", className)}
      {...props}
    >
      <text
        x="0"
        y="15"
        fontFamily="Belleza, sans-serif"
        fontSize="16"
        fill="currentColor"
        className="font-headline"
      >
        Laya Art Gallery
      </text>
    </svg>
  );
}
