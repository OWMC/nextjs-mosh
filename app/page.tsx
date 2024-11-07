import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <p>This webapp demonstrates many things.</p>
      <ul>
        <li>Basic routing in nextJS app-router</li>
        <li>A client rendered button with click event</li>
        <li>Buildtime server rendered static home page (SSG)</li>
        <li>Runtime server rendered dynamic users page (SSR) with fetch to api</li>
        <li>Prisma/zod MySQL database issue tracker</li>
        <li>Hopefully some SSG / SSR WP posts</li>
        <li>UI libraries: I removed DaisyUIs data-theme=winter from the layout.tsx html tag. RadixUI is used for theming now. TailwindCSS is used for some styling.</li>
      </ul>
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
