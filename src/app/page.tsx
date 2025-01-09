"use client";

import Card from "@/components/blog/Card";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/context/SearchContext";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    imageSource: string;
    orientation: "horizontal" | "vertical";
    size: "sm" | "md" | "lg";
}

interface TestImage {
    imageSource: string;
    orientation: "horizontal" | "vertical";
    size: "sm" | "md" | "lg";
}

const test: TestImage[] = [
    { imageSource: "/images/blog/image1.png", orientation: "horizontal", size: "md" },
    { imageSource: "/images/blog/image2.png", orientation: "vertical", size: "sm" },
    { imageSource: "/images/blog/image4.png", orientation: "vertical", size: "sm" },
    { imageSource: "/images/blog/image5.png", orientation: "vertical", size: "sm" },
    { imageSource: "/images/blog/image7.png", orientation: "horizontal", size: "lg" },
];

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const { query } = useSearch();

    useEffect(() => {
        fetch("/api/blog")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setFilteredPosts(data);
            })
            .catch((err) => console.error("Failed to fetch categories:", err));
    }, []);

    useEffect(() => {
        const filtered = posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredPosts(filtered);
    }, [query, posts]);

    return (
        <main>
            <section className="py-16">
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className="space-y-5 text-center md:text-left">
                        <h1 className="text-6xl font-bold">
                            Make better <br />
                            coffee
                            <span className="inline-block align-middle">
                                <Image src="/images/hero/coffee.png" alt="Coffee cup" width={70} height={70} />
                            </span>
                        </h1>
                        <p className="text-3xl text-gray-600">why learn how to blog?</p>
                    </div>
                    <Image
                        src="/images/hero/croods.png"
                        alt="Croods"
                        width={476}
                        height={323}
                        className="mt-5 md:mt-0"
                    />
                </div>
            </section>
            <section className="pt-16 pb-36 space-y-11">
                <h1 className="text-5xl font-semibold text-center">Our Recent Articles</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
                    {filteredPosts.map((post, index) => (
                        <div key={index} className={`col-span-1 ${index === 0 || index === 4 ? "md:col-span-3" : ""}`}>
                            <Card
                                id={post.id}
                                title={post.title}
                                content={post.content}
                                date={new Date(post.createdAt).toDateString()}
                                imageSource={test[index].imageSource}
                                orientation={test[index].orientation}
                                size={test[index].size}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <Button size="lg" className="font-bold">
                        See more
                        <Image src="/icons/blog/arrow-down-circle.svg" alt="more icon" width={20} height={20} />
                    </Button>
                </div>
            </section>
        </main>
    );
}
