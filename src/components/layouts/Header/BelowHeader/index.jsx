import { Search } from "lucide-react";
import { Input } from "../../../ui/input";
import NavHeader from "./NavHeader";
import { Link } from "react-router-dom";
import ROUTES from "../../../../types/routes";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import Horizontal from "../../../Horizontal";

const BelowHeader = () => {
  return (
    <div className="flex justify-center py-4 border-b border-[#b2b2b2]">
      <div className="container flex items-center justify-between">
        <NavHeader />
        <Horizontal className={"gap-4"}>
          <div className="relative">
            <Input
              placeholder="What are you looking for?"
              className="pl-5 py-2 min-w-[18.75rem]"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <Horizontal className="gap-4">
            <Link to={ROUTES.WISHLIST}>
              <Heart />
            </Link>
            <Link to={ROUTES.CART}>
              <ShoppingCart />
            </Link>
          </Horizontal>
        </Horizontal>
      </div>
    </div>
  );
};

export default BelowHeader;
