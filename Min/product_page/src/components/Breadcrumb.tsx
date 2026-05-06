interface BreadcrumbProps {
  items: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mt-10 text-xl font-medium text-neutral-950" aria-label="현재 위치">
      {items.map((item, index) => (
        <span key={`${item}-${index}`}>
          {index > 0 && <span className="mx-1">&gt;</span>}
          <span>{item}</span>
        </span>
      ))}
    </nav>
  );
}
