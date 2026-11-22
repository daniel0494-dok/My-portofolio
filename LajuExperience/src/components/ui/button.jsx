import { cn } from "../../lib/utils";

export default function button({ className, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={cn("button shrink-0 cursor-pointer", className)}
      {...props}
    />
  );
}

// rename
