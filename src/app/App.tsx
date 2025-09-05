import './styles/index.scss'
import {ModalEntry} from "../widgets/ModalEntry";
import {ThemeButton} from "../widgets/ThemeButton";
import {useAppSelector} from "./hooks.ts";

function App() {
  const theme = useAppSelector(state => state.theme.theme)
  return (
    <div className={`App ${theme}`}>
      <ThemeButton />
      <ModalEntry />
    </div>
  )
}

export default App
