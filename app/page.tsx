import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <p>Tutorial used:</p>
      <ul>
        <li>https://www.youtube.com/watch?v=ZVnjOPwW4ZA</li>
        <li>https://www.youtube.com/watch?v=J9sfR6HN6BY</li>
      </ul>
    </main>
  );
}
