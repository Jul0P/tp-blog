import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const categories = await prisma.category.findMany();
        return NextResponse.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json({ error: "Unable to fetch categories" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, category, content } = body;

        const post = await prisma.post.create({
            data: {
                title,
                content,
                createdAt: new Date(),
                updatedAt: new Date(),
                published: false,
            },
        });

        const categoryRecord = await prisma.category.upsert({
            where: { name: category },
            update: {},
            create: { name: category },
        });

        await prisma.postCategory.create({
            data: {
                postId: post.id,
                categoryId: categoryRecord.id,
            },
        });

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unable to create post" }, { status: 500 });
    }
}
