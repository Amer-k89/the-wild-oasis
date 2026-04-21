import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLogout } from "./AuthenticationHooks";

function Logout() {
  const { isLoading, logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <ButtonIcon onClick={handleLogout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
