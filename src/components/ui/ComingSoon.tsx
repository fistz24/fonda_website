import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <p className="text-4xl mb-4">🚧</p>
      <h1 className="text-xl font-semibold text-foreground mb-2">{title}</h1>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">
        This section is coming in the next phase of the build.
      </p>
      <Link
        href="/"
        className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  );
}
