import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id: number;
    title: string;
    content: string;
    date: string;
    imageSource: string;
    orientation: "horizontal" | "vertical";
    size: "sm" | "md" | "lg";
    className?: string;
    imageClassName?: string;
}

const cardVariants = {
    ["sm"]: {
        card: "gap-4 p-5",
        title: "text-xl",
        content: "text-sm",
    },
    ["md"]: {
        card: "gap-7 p-12 justify-center",
        title: "text-3xl",
        content: "text-lg",
    },
    ["lg"]: {
        card: "gap-7 p-12 justify-center",
        title: "text-4xl",
        content: "text-xl",
    },
};

export default function Card({
    id,
    title,
    content,
    date,
    imageSource,
    orientation,
    size,
    className = "",
    imageClassName = "",
}: CardProps) {
    const variants = cardVariants[size];

    return (
        <div
            className={`border rounded-md shadow-md ${className} ${
                orientation === "horizontal"
                    ? "flex flex-col h-full md:flex-row-reverse justify-between"
                    : "flex flex-col"
            }`}
        >
            <Image
                src={imageSource}
                alt={title}
                width={1000}
                height={1000}
                className={`${
                    orientation === "horizontal" ? "md:max-w-sm lg:max-w-sm xl:max-w-xl" : ""
                } ${imageClassName}`}
            />
            <div className={`${variants.card} flex flex-col min-h-[204px]`}>
                <p className={`${variants.title} font-bold text-[#2d3748] break-words whitespace-pre-wrap`}>{title}</p>
                <p className={`${variants.content} text-[#718096] break-words whitespace-pre-wrap line-clamp-3`}>
                    {content}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs text-[#718096] break-words whitespace-pre-wrap">{date}</p>
                    <Link href="/blog/[id]" as={`/blog/${id}`}>
                        <Button variant="ghost" className="text-xs font-bold text-[#2d3748]">
                            Read more
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
