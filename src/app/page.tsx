import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>This is a h1 elemt</h1>
      <h2>This is a h2 element</h2>
      <Link href="/test">Test</Link>
    </div>
  );
}
