import ScrollToTop from "@/components/common/ScrollToTop";
import { getPostById } from "@/services/postService";
import Image from "next/image";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function BlogPage({ params }: Props) {
    const { id } = await params;
    const post = await getPostById(parseInt(id, 10));
    if (!post) {
        return (
            <main>
                <h1>Post not found</h1>
            </main>
        );
    }

    console.log("Post fetched:", post.title);
    return (
        <main>
            <Image
                src="/images/blog/image1.png"
                alt="image1"
                width={1000}
                height={1000}
                className="object-cover w-full max-h-96"
            />
            <div className="mx-auto max-w-7xl py-16 space-y-6">
                <h1 className="text-[#2d3748] text-5xl font-bold">{post.title}</h1>
                <div className="flex gap-8">
                    <p className="text-[#2d3748] text-lg font-bold">Written by John Doe</p>
                    <p className="text-[#718096] text-lg">{post.createdAt.toDateString()}</p>
                </div>
                <hr />
                <p className="text-[#718096] text-lg whitespace-pre-line">{post.content}</p>
            </div>

            <ScrollToTop />
        </main>
    );
}
