import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
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
      <div style={{ padding: "20px" }}>
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    </div>
  );
}
