export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 flex max-h-[85vh] items-center justify-center">
      {children}
    </div>
  );
}
