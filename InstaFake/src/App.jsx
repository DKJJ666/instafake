import './App.css'
import AddComentarios from './assets/components/IAddComent✅'
import LikeButton from './assets/components/RCurtidas✅'
import IAddPerfil from './assets/components/Story✅'
import Seguir from './assets/components/ASeguir✅'



function App() {

  return (
    <>
      <Seguir />
      <IAddPerfil
        title="Speed"
        image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"
      />

      <IAddPerfil
        title="Tete"
        image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"
      />
      <AddComentarios />
      <LikeButton />
    </>
  )
}

export default App
