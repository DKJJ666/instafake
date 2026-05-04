import './style.css'
import { useState } from 'react'
import ASeguir from '../ASeguir✅/index.jsx'
import LikeButton from '../RCurtidas✅/index.jsx'

export default function Feed() {
  const [posts, setPosts] = useState([])
  const [texto, setTexto] = useState('')
  const [usuario, setUsuario] = useState('')
  const [imagem, setImagem] = useState(null)
  const [erro, setErro] = useState('')

  function selecionarImagem(e) {
    setErro('')
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setErro('Use uma imagem válida.')
      return
    }
    setImagem(URL.createObjectURL(file))
  }

  function publicar() {
    if (!texto.trim() && !imagem) {
      setErro('Escreva algo ou adicione uma imagem.')
      return
    }
    setPosts([...posts, { id: Date.now(), usuario, texto, imagem }])
    setTexto('')
    setUsuario('')
    setImagem(null)
    setErro('')
  }

  return (
    <div className="pagina">

      <div className="formulario">
        <input
          className="campo"
          placeholder="Seu nome"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
        />
        <input
          className="campo"
          placeholder="Digite seu comentário..."
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
        <label className="upload">
          {imagem ? 'Imagem selecionada ✓' : 'Adicionar imagem (opcional)'}
          <input type="file" accept="image/*" onChange={selecionarImagem} />
        </label>
        {imagem && <img className="preview" src={imagem} alt="preview" />}
        {erro && <p className="erro">{erro}</p>}
        <button className="btn-publicar" onClick={publicar}>Publicar</button>
      </div>

      <div className="feed">
        {posts.map(post => (
          <div key={post.id} className="card">

            <div className="topo">
              <div className="avatar" />
              <div>
                <div className="nome">{post.usuario || 'Anônimo'}</div>
                <div className="handle">@{(post.usuario || 'anonimo').toLowerCase().replace(' ', '')}</div>
              </div>
              <ASeguir />
            </div>

            {post.texto && <p className="texto">{post.texto}</p>}
            {post.imagem && <img className="img-post" src={post.imagem} alt="" />}

            <div className="rodape">
              <button className="btn-ver">ver mais</button>
              <button className="btn-comentar">adicionar comentário</button>
              <LikeButton />
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
