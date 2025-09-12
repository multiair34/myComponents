import './styles/index.scss'
import {Header} from "../widgets/Header";
import {useAuthModals, LoginModal, SignUpModal} from "../features/auth";
import {useTheme} from "../entityes/ThemeButton";

function App() {
  const {theme} = useTheme();

  const {isLoginOpen, isSignUpOpen} = useAuthModals()
  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        {isLoginOpen && <LoginModal />}
        {isSignUpOpen && <SignUpModal />}
      </main>

    </div>
  )
}

export default App
