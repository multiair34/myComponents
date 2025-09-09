import './styles/index.scss'
import {ModalEntry} from "../widgets/ModalEntry";
import {useAppSelector} from "./hooks.ts";
import {ModalRegistration} from "../widgets/ModalRegistration";
import {Header} from "../widgets/Header";

function App() {
  const theme = useAppSelector(state => state.theme.theme)
  return (
    <div className={`App ${theme}`}>
      <Header />
      <main>
        <ModalRegistration />
        <ModalEntry />
      </main>

    </div>
  )
}

export default App
