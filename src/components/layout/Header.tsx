"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useSearch } from "@/context/SearchContext";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const { query, setQuery } = useSearch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <header>
            <nav className="flex items-center justify-between py-8">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle className="flex items-center justify-center gap-2">
                                    <SheetClose asChild>
                                        <Link href="/">
                                            <h1 className="text-2xl font-bold">HotCoffee</h1>
                                        </Link>
                                    </SheetClose>
                                </SheetTitle>
                                <SheetDescription className="text-center">TP Blog</SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-10">
                                <SheetClose asChild>
                                    <Link href="/">
                                        <Button variant="secondary" size="lg" className="w-full">
                                            Home
                                        </Button>
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Link href="/posts">
                                        <Button size="lg" className="w-full">
                                            New Post
                                        </Button>
                                    </Link>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <Link href="/">
                    <h1 className="hidden md:flex text-2xl font-bold">HotCoffee</h1>
                </Link>
                <div className="flex md:flex-row-reverse gap-1">
                    <Input placeholder="Search..." value={query} onChange={handleSearch} />
                    <Button variant="ghost" size="icon">
                        <Image src="/icons/header/search.svg" alt="Search icon" width={20} height={20} />
                    </Button>
                </div>
                <div className="hidden md:flex items-center justify-center gap-4">
                    <Link href="/">
                        <Button variant="ghost" size="lg">
                            Home
                        </Button>
                    </Link>
                    <Link href="/posts">
                        <Button size="lg">New Post</Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
