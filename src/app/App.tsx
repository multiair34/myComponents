import './styles/index.scss'
import {Header} from "../widgets/Header";
import {useTheme} from "../entityes/ThemeButton";
import {MainPage} from "../pages/MainPage/MainPage.tsx";

function App() {
  const {theme} = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Header />
      <div className="content-page">
        <MainPage />
      </div>
    </div>
  )
}

export default App
