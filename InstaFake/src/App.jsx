import './App.css'
 import AddComentarios from './assets/components/IAddComent'
  // import LikeButton from './assets/components/RCurtidas'
//  import IAddPerfil from './assets/components/Story'
//  import Seguir from './assets/components/ASeguir'
//  import Post from './assets/components/IAddPost'
import imgPerfil from './assets/components/imgs/fotodeperfil.jpg'

function App() {

  return (
    <>
    <section className="elipses">
      <div className="elipse1"></div>
      <div className="elipse2"></div>
      <div className="elipse3"></div>
      <div className="elipse4"></div>
      <div className="elipse5"></div>
    </section>
    <section className="circulos">
      <div className="circulo1"></div>
      <div className="circulo2"></div>
    </section>

 <div className="case" style={{ display: "flex", gap: "20px" }}>    <section className="perfilturma">
      <div className="container">
        <div className="emcima">
        <div className="perfil">
            <img src={imgPerfil} alt="Foto de perfil" className="foto"/>
            <div className="info">
          <h2>TIPI02</h2>
          <p>@sltipi02</p></div></div>
        <button className="verperfil">Ver Perfil</button>
        </div>
      </div>
       
<div className="perfil-stories">

        {/* <section className="stories">
          <div className="story1"><IAddPerfil
      title="Speed"
    image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"/></div>
    </section> */}
          {/* <div className="story2"> <IAddPerfil
        
  image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"
      title="Tete"
     /></div>
          <div className="story3"> <IAddPerfil
        
     image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"
      title="Tete"
      /></div>
          <div className="story4"><IAddPerfil
        
      image="https://i.pinimg.com/736x/39/bf/96/39bf96806c4fe1f64430552d61817286.jpg"
       title="Tete" /></div>
          </section>
 
 </div> */}

</div>
 </section>
</div>

  <AddComentarios />
  <LikeButton />  

    </>
  )
}

export default App
