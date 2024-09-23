import { useNavigate } from "react-router";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Button } from "../../blocks/Button";

export const PlansOptions = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="container mt-40 px-100">
      <div className="plans-option-back">
        <Button
          onClick={goBack}
          variant="text"
          color="purple-dark"
          startIcon={<IoChevronBackCircleOutline />}
        >
          Volver
        </Button>
      </div>
    </div>
  );
};
