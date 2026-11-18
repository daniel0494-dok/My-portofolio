import { cn } from "../../lib/utils";

export default function button({ className, ...props }) {
  return (
    <button className={cn("button cursor-pointer", className)} {...props} />
  );
}

// rename
