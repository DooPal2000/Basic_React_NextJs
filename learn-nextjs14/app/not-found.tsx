"use client";

import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";

export default function NotFound() {
    const path = usePathname();
    return (
        <div>
            <Navigation />
            <h1>Oops! Not found!</h1>
        </div>
    );
}