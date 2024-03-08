import Navbar from "@/components/nav/navbar";
import ThemeSwitch from "@/components/misc/(theme)/theme-switch";

export const Header = () => {
  return (
    <header className="flex">
      <Navbar />
      <div className="ml-auto">
        <ThemeSwitch />
      </div>
    </header>
  );
};
