import {LoginModal, SignUpModal, useAuthModals} from "../../features/auth";

export const MainPage = () => {
  const {isLoginOpen, isSignUpOpen} = useAuthModals()

    return (
        <>
          {isLoginOpen && <LoginModal />}
          {isSignUpOpen && <SignUpModal />}
        </>
    );
};
