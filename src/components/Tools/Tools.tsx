import { toolIcons } from "./ToolsHelpers";
import Animator from "components/Animator";

function Tools() {
  return (
    <div>
      <div className="text-2xl mb-4 text-primary">Tools</div>
      <div className="mb-8">
        I like using these tools/languages, but I'm always open to learning more
        😄.
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 space-y-4 mb-8">
        {toolIcons.map((icon, i) => (
          <div className="flex flex-row items-center justify-center" key={i}>
            <a href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.src} className="w-16 h-16 md:w-24 md:h-24" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Animator(Tools);
