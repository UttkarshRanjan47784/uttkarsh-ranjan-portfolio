import {
  blogSvgDark,
  blogSvgLight,
  gitHubSvgDark,
  gitHubSvgLight,
  gmailSvgDark,
  gmailSvgLight,
  linkedinSvgDark,
  linkedinSvgLight,
} from "@/lib/svg-helpers";
import { Dock, DockIcon } from "./magicui/dock";
import { ModeToggle } from "./theme/mode-toggle";
import { Separator } from "./ui/separator";

const BottomDock = () => {
  return (
    <div className="w-full flex justify-center items-center absolute bottom-5">
      <Dock direction="middle" className="space-x-3">
        <DockIcon className="dark:hidden">{gitHubSvgLight}</DockIcon>
        <DockIcon className="hidden dark:flex">{gitHubSvgDark}</DockIcon>
        <DockIcon className="dark:hidden">{linkedinSvgLight}</DockIcon>
        <DockIcon className="hidden dark:flex">{linkedinSvgDark}</DockIcon>
        <DockIcon className="dark:hidden">{gmailSvgLight}</DockIcon>
        <DockIcon className="hidden dark:flex">{gmailSvgDark}</DockIcon>
        <DockIcon className="dark:hidden">{blogSvgLight}</DockIcon>
        <DockIcon className="hidden dark:flex">{blogSvgDark}</DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default BottomDock;
