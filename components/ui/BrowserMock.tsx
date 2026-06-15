import { ArrowDownToLine } from "lucide-react";
import { Sparkle } from "./Sparkle";
import { cn } from "@/lib/utils";

export function BrowserMock({
  url,
  columns,
  rows,
  highlightIndex,
  filename,
  className,
}: {
  url: string;
  columns: string[];
  rows: string[][];
  highlightIndex: number;
  filename: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-blob border-2 border-ink bg-card",
        "shadow-[6px_6px_0px_0px_hsl(var(--ink))]",
        "overflow-hidden",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b-2 border-ink bg-muted px-4 py-3">
        {/* Traffic-light dots */}
        <span className="h-3 w-3 rounded-full bg-bubblegum border border-ink" />
        <span className="h-3 w-3 rounded-full bg-brightyellow border border-ink" />
        <span className="h-3 w-3 rounded-full bg-kelly border border-ink" />
        {/* URL bar */}
        <div className="ml-2 flex-1 rounded-pill border border-ink bg-card px-3 py-1 text-xs font-sans text-muted-foreground truncate">
          {url}
        </div>
      </div>

      {/* Spreadsheet table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-sans">
          <thead>
            <tr className="bg-muted border-b-2 border-ink">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left font-display font-semibold text-ink whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-border",
                  i === highlightIndex && "bg-amber/40"
                )}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="px-4 py-2 text-ink whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1.5">
                      {i === highlightIndex && j === 0 && (
                        <Sparkle
                          size={12}
                          className="text-amber shrink-0"
                        />
                      )}
                      {cell}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-end border-t-2 border-ink bg-muted px-4 py-2">
        <span className="inline-flex items-center gap-1.5 rounded-pill bg-kelly text-cream border border-ink px-3 py-1 text-xs font-display font-semibold">
          <ArrowDownToLine className="w-3 h-3" />
          {filename}
        </span>
      </div>
    </div>
  );
}
