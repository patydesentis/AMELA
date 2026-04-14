import Link from "next/link";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <nav className="w-full bg-[#2A166F] text-white flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          Amela<span className="text-[10px] align-super">™</span>
        </Link>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex items-center space-x-8 text-sm">
        <Link href="#" className="hover:text-amela-light-purple transition-colors">Memberships</Link>
        <Link href="#" className="hover:text-amela-light-purple transition-colors">Events</Link>
        <Link href="#" className="hover:text-amela-light-purple transition-colors">Courses</Link>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" className="hidden md:inline-flex text-white border-white hover:bg-white/10">Log In</Button>
        <Button variant="primary" size="sm" className="text-[#2A166F] font-semibold bg-[#F9FF5A] hover:bg-[#eef540]">Apply</Button>
      </div>
    </nav>
  );
}
