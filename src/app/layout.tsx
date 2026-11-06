export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "100dvh",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}