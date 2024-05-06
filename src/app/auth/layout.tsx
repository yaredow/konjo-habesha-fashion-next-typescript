export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-h-[90vh] items-center justify-center ">
      {children}
    </div>
  );
}
