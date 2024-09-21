import { Image } from "../../blocks/Image/index";
import RimacLogo from "../../../../assets/images/rimac-logo.svg";
import { Telephone } from "../../icons/Telephone";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container py-14 d-flex justify-content-between align-items-center">
        <Image
          className="logo"
          src={RimacLogo}
          alt="rimac logo"
          height={36}
          width={73.19}
        />
        <div className="contact d-flex align-items-center gap-16">
          <b className="contact__title">¡Compra por este medio!</b>
          <div className="telephone d-inline-flex align-items-center gap-8">
            <i className="telephone__icon d-inline-flex align-items-center">
              <Telephone />
            </i>
            <h5 className="telephone__number">(01) 411 6001</h5>
          </div>
        </div>
      </div>
    </header>
  );
};
