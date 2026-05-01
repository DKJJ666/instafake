import {useState} from 'react'

export default function AddComentarios() {
    const [comentario, setComentario] = useState("")
    const [listaComent, setListaComent] = useState([])
    return (
        <div>
            <h2>Adicionar Comentários</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                setListaComent([...listaComent, comentario]);
                setComentario("");
            }}>
                <input
                    type='text'
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder='Digite seu comentário'
                />
                <button type='submit'>Adicionar</button>
            </form>
            <ul>
                {listaComent.map((comentario, index) => (
                    <li key={index}>{comentario}</li>
                ))}
            </ul>
            <button onClick={() => {
                
            }}>Ver Mais</button>
        </div>
    );
}
