import './styles/index.scss'
import {ModalEntry} from "../widgets/ModalEntry";
import {useAppSelector} from "./hooks.ts";
import {ModalRegistration} from "../widgets/ModalRegistration";
import {Header} from "../widgets/Header";

function App() {
  const theme = useAppSelector(state => state.theme.theme)
  const isOpen = useAppSelector(state => state.modal.isOpen)
  const isReg = useAppSelector(state => state.modal.isReg)
  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        {isOpen && <ModalEntry />}
        {isReg && <ModalRegistration />}
      </main>

    </div>
  )
}

export default App
