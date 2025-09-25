import {useAppDispatch, useAppSelector} from "../../../../shared/hooks/reduxHooks.ts";
import {isOpenSelector, isRegSelector} from "../../model/selectors";
import {openModalEntry, openRegistration, closeModal} from "../../model/slice/authSlice.ts";

export const useAuthModals = () => {
  const dispatch = useAppDispatch();
  const isLoginOpen = useAppSelector(isOpenSelector);
  const isSignUpOpen = useAppSelector(isRegSelector);
  const toggleLoginModal = () => {
    dispatch(openModalEntry())
  }
  const toggleSignUpModal = () => {
    dispatch(openRegistration())
  }
  const closeModalEsc = () => {
    dispatch(closeModal())
  }

  return {isLoginOpen, isSignUpOpen, toggleLoginModal, toggleSignUpModal, closeModalEsc};
}
