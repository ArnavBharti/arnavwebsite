import Link from "next/link";

export default function NotFound() {
  return (
    <div role="main">
      <h1 className="text-2xl font-bold py-4 text-red-700">404 not found</h1>
      <p>
        return to{" "}
        <Link href="/" className="underline">
          home
        </Link>
        .
      </p>
    </div>
  );
}
