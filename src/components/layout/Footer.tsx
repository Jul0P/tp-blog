import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-auto">
            <hr />
            <MaxWidthWrapper className="flex items-center justify-between p-7">
                <p>
                    <b>hotcoffee </b>
                    2020 copyright all rights reserved
                </p>
                <div className="flex items-center space-x-8">
                    <a href="https://www.instagram.com" target="_blank">
                        <Image src="/icons/footer/instagram.svg" alt="Instagram logo" width={24} height={23} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <Image src="/icons/footer/twitter.svg" alt="Twitter logo" width={20} height={16} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                        <Image src="/icons/footer/linkedin.svg" alt="LinkedIn logo" width={24} height={23} />
                    </a>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
}
