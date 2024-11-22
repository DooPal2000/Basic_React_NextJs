"use client";
// 클라이언트 측에서 Hydration이 일어나는 것은 use client가 있는 부분에서만 일어난다.
// 즉, 백엔드에서 render되고, 프론트엔드에서 hydrate된다는 것을 의미

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🎇" : ""}
                </li>
                <li>
                    <Link href="/about-us">About us</Link> {path === "/about-us" ? "🎇" : ""}
                </li>
                <li><button onClick={() => setCount((c) => c + 1)}>{count}</button></li>
            </ul>
        </nav>
    );
}