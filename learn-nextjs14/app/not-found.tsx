// "use client";

import { usePathname } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not found",
}

export default function NotFound() {
    // const path = usePathname();
    return (
        <div>
            <h1>Oops! Not found!</h1>
        </div>
    );
}