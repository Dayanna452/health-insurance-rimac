import { Image } from "../../blocks/Image/index";
import RimacLogo from "../../../../assets/images/rimac-logo.svg";

export const Header: React.FC = () => {
  return (
    <header className="container h-1.5">
      <div className="d-flex justify-content-between align-items-center">
        <Image
          className="logo"
          src={RimacLogo}
          alt="rimac logo"
          height={36}
          width={73.19}
        />
        <div className="d-flex align-items-center gap-2">
          <b>¡Compra por este medio!</b>
          <h5>(01) 411 6001</h5>
        </div>
      </div>
    </header>
  );
};
