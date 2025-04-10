import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "My NASA App",
  description: "Built with Next.js",
};

export default function Rootlayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
