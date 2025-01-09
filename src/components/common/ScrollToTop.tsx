"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    return (
        <div className="flex justify-end py-10">
            <Button
                className="rounded-full"
                size="icon"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <ArrowUp strokeWidth={4} />
            </Button>
        </div>
    );
}
