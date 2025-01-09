interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => (
    <div className={`container mx-auto ${className}`}>{children}</div>
);

export default MaxWidthWrapper;
