import "./globals.css";

export const metadata = {
  title: "Dhruv Rana | Full Stack Web Developer Portfolio",
  description: "Portfolio of Dhruv Rana, a passionate full-stack web developer specializing in MERN stack, Next.js, and modern web solutions.",
  keywords: ["Dhruv Rana", "Web Developer", "MERN Stack", "React Developer", "Next.js Portfolio", "Full Stack Developer", "Software Engineer"],
  authors: [{ name: "Dhruv Rana" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
