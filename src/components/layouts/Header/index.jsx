import Vertical from "../../Vertical";
import AboveHeader from "./AboveHeader";
import BelowHeader from "./BelowHeader";

const Header = () => {
  return (
    <Vertical className="flex flex-col gap-6">
      <AboveHeader />
      <BelowHeader />
    </Vertical>
  );
};

export default Header;
