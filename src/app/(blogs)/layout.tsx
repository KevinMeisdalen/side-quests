export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main
        style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        }}>
  {children}
</main>
    </>
  );
}