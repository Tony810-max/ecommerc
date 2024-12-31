import { Link } from "react-router-dom";
import ROUTES from "../../../../types/routes";
import SelectLanguage from "./SelectLanguage";
import Vertical from "../../../Vertical";
import VerticalHorizontal from "../../../VerticalHorizontal";

const AboveHeader = () => {
  return (
    <Vertical className="bg-primary-color">
      <div className="container py-[6px]">
        <VerticalHorizontal className="justify-between">
          <div className="w-full text-center space-x-2">
            <span className="font-primary text-sm text-secondary-color">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link
              to={ROUTES.HOME}
              className="font-primary text-sm font-semibold underline text-secondary-color hover:opacity-70"
            >
              ShopNow
            </Link>
          </div>
          <SelectLanguage />
        </VerticalHorizontal>
      </div>
    </Vertical>
  );
};

export default AboveHeader;
