import * as React from "react";
import { cn } from "../utils/cn";
import { LucideIcon } from "../primitives/Icon";

export type DocumentType =
  | "PDS"
  | "TMD"
  | "FSG"
  | "Report"
  | "Statement"
  | "Form"
  | "Other";

export interface DocumentItem {
  id: string;
  title: string;
  type: DocumentType;
  year: number;
  href: string;
  size?: string; // e.g. "2.1 MB PDF"
  updatedAt?: string; // ISO or human date
  tags?: string[];
  description?: string;
  external?: boolean;
}

export interface DocumentListFilters {
  query: string;
  types: DocumentType[];
  sort: "recent" | "title" | "year";
}

export interface DocumentListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Items to display */
  items: DocumentItem[];
  /** Initial filters */
  initialFilters?: Partial<DocumentListFilters>;
  /** Callback fired when filters change */
  onFiltersChange?: (filters: DocumentListFilters) => void;
  /** Empty state text */
  emptyText?: string;
}

const DEFAULT_FILTERS: DocumentListFilters = {
  query: "",
  types: [],
  sort: "title",
};

const TYPE_ORDER: DocumentType[] = ["PDS", "TMD", "FSG", "Report", "Statement", "Form", "Other"];

/**
 * DocumentList — Filterable, accessible list of fund documents (PDS/TMD/FSG etc.).
 *
 * @example
 * <DocumentList items={documents} />
 */
export const DocumentList = React.forwardRef<HTMLDivElement, DocumentListProps>(
  ({ items, initialFilters, onFiltersChange, className, emptyText = "No documents found", ...rest }, ref) => {
    const [filters, setFilters] = React.useState<DocumentListFilters>({
      ...DEFAULT_FILTERS,
      ...initialFilters,
    });

    const toggleType = (type: DocumentType) => {
      setFilters((prev) => {
        const exists = prev.types.includes(type);
        const next = {
          ...prev,
          types: exists ? prev.types.filter((t) => t !== type) : [...prev.types, type],
        };
        onFiltersChange?.(next);
        return next;
      });
    };

    const setQuery = (q: string) => {
      setFilters((prev) => {
        const next = { ...prev, query: q };
        onFiltersChange?.(next);
        return next;
      });
    };

    const setSort = (s: DocumentListFilters["sort"]) => {
      setFilters((prev) => {
        const next = { ...prev, sort: s };
        onFiltersChange?.(next);
        return next;
      });
    };

    const filtered = React.useMemo(() => {
      let list = items.slice();
      const q = filters.query.trim().toLowerCase();
      if (q) {
        list = list.filter((d) =>
          [d.title, d.description, d.type, d.tags?.join(" ")]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(q)
        );
      }
      if (filters.types.length > 0) {
        list = list.filter((d) => filters.types.includes(d.type));
      }
      // Apply sorting
      switch (filters.sort) {
        case "title":
          list.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "year":
          list.sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
          break;
        case "recent":
          list.sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || "") || b.year - a.year);
          break;
      }
      return list;
    }, [items, filters]);

    const totalCount = items.length;
    const filteredCount = filtered.length;

    return (
      <div ref={ref} className={className} {...rest}>
        {/* Filter bar */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative w-full max-w-md">
              <LucideIcon iconName="Search" size="sm" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                className="w-full rounded-md border border-slate-300 pl-9 pr-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                placeholder="Search documents..."
                aria-label="Search documents"
                value={filters.query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="hidden md:block h-6 w-px bg-slate-200" aria-hidden="true" />

            <div className="flex flex-wrap items-center gap-2" aria-label="Filter by type">
              {TYPE_ORDER.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleType(t)}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                    filters.types.includes(t)
                      ? "border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-100"
                      : "border-slate-300 text-slate-600 hover:bg-slate-50"
                  )}
                  {...(filters.types.includes(t)
                    ? { "aria-pressed": "true" as const }
                    : { "aria-pressed": "false" as const })}
                >
                  <TypeBadgeIcon type={t} />
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results header */}
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-slate-600" aria-live="polite">
            Showing {filteredCount} of {totalCount} documents
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Sort by:</span>
            <select
              id="doc-sort"
              className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              value={filters.sort}
              onChange={(e) => setSort(e.target.value as DocumentListFilters["sort"])}
              aria-label="Sort documents"
            >
              <option value="title">Title (A–Z)</option>
              <option value="year">Year (desc)</option>
              <option value="recent">Most recent</option>
            </select>
          </div>
        </div>

        {/* Results list */}
        <ul className="mt-3 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white" role="list">
          {filteredCount === 0 && (
            <li className="p-6 text-center text-sm text-slate-600">{emptyText}</li>
          )}

          {filtered.map((doc) => (
            <li key={doc.id} className="p-4 md:p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={doc.href}
                      target={doc.external ? "_blank" : undefined}
                      rel={doc.external ? "noopener noreferrer" : undefined}
                      className="truncate text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={`${doc.title}${doc.size ? ", " + doc.size : ""}${doc.year ? ", " + doc.year : ""} (${doc.type})`}
                    >
                      {doc.title}
                    </a>
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      <TypeBadgeIcon type={doc.type} />
                      {doc.type}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                      <LucideIcon iconName="Calendar" size="xs" />
                      {doc.year}
                    </span>
                    {doc.size && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                        <LucideIcon iconName="HardDrive" size="xs" />
                        {doc.size}
                      </span>
                    )}
                    {doc.external && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                        <LucideIcon iconName="ExternalLink" size="xs" />
                        external
                      </span>
                    )}
                  </div>

                  {doc.description && (
                    <p className="mt-1 line-clamp-2 text-xs text-slate-600">{doc.description}</p>
                  )}

                  {doc.tags && doc.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap items-center gap-1.5" aria-label="Tags">
                      {doc.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700">
                          <LucideIcon iconName="Tag" size="xs" className="text-slate-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 items-center gap-2 self-start">
                  <a
                    href={doc.href}
                    target={doc.external ? "_blank" : undefined}
                    rel={doc.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <LucideIcon iconName="Download" size="xs" />
                    Download
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

DocumentList.displayName = "DocumentList";

const TypeBadgeIcon: React.FC<{ type: DocumentType }> = ({ type }) => {
  switch (type) {
    case "PDS":
      return <LucideIcon iconName="FileText" size="xs" className="text-emerald-600" />;
    case "TMD":
      return <LucideIcon iconName="FileCheck2" size="xs" className="text-blue-600" />;
    case "FSG":
      return <LucideIcon iconName="FileBadge2" size="xs" className="text-purple-600" />;
    case "Report":
      return <LucideIcon iconName="FileBarChart" size="xs" className="text-amber-600" />;
    case "Statement":
      return <LucideIcon iconName="ReceiptText" size="xs" className="text-rose-600" />;
    case "Form":
      return <LucideIcon iconName="FileSignature" size="xs" className="text-teal-600" />;
    default:
      return <LucideIcon iconName="File" size="xs" className="text-slate-500" />;
  }
};
