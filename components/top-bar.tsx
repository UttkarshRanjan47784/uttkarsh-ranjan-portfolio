import { ModeToggle } from "./theme/mode-toggle";

export default function TopBar() {
  return (
    <div className="dark:border-b dark:border-muted shadow-md w-full h-18 flex items-center justify-between relative pr-5">
      <div className="flex">
        <p className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          Home
        </p>
        <p className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          Skills
        </p>
        <p className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          Projects
        </p>
        <p className="hover:bg-muted transition-all duration-300 hover:scale-105 h-full p-5 cursor-pointer">
          Contact
        </p>
      </div>
      <ModeToggle />
    </div>
  );
}
