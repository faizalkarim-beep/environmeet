export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="EnvironMeet home">
      <svg
        aria-hidden="true"
        viewBox="0 0 52 52"
        className="h-11 w-11 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="26" cy="26" r="24" className="text-teal/10" />
        <path d="M25 38c-1-9-5-16-12-21 8-1 15 3 18 10" />
        <path d="M25 38c1-8 6-14 13-18 2 9-3 16-13 18Z" />
        <circle cx="37" cy="13" r="4" />
        <path d="M37 17c-1 5-1 9 1 12M34 22c2 1 4 1 6 0" />
      </svg>
      {!compact && (
        <span className="text-lg font-semibold tracking-tight text-teal">
          environ<span className="font-normal">meet</span>
          <span className="ml-1 text-xs font-normal text-slate">.space</span>
        </span>
      )}
    </a>
  );
}
