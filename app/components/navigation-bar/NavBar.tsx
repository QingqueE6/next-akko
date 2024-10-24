import ThemeController from "./ThemeController";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/app/images/HutaoIcon.png";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-base-200 h-20">
        <div className="navbar-start">
          <Link href="/">
            <Image
              src={HomeIcon}
              alt="Home"
              className="h-20 w-20 hover:opacity-80"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* todo: some cool animeme banner*/}xd
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/placeholder">Placeholder</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
          <ThemeController />
        </div>
      </div>
    </>
  );
}
