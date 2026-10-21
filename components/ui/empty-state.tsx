/** Shown in place of a Strapi collection that has no published entries. */
export function EmptyState({ children = "No items found." }: { children?: string }) {
  return (
    <div className="empty-state">
      <div>{children}</div>
    </div>
  );
}
