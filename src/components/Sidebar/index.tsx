import { Cog, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./Logo";
import MainNavigation from "./MainNavigation";
import NavItem from "./MainNavigation/NavItem";
import UsedSpaceWidget from "./UsedSpaceWidget";
import Profile from "./Profile";
import * as Input from "../Input";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-3 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200"></div>

      <Profile />
    </aside>
  );
};

export default Sidebar;
