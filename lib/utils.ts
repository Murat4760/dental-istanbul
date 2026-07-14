/** Tiny class-name joiner — filters falsy values and space-joins the rest. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
