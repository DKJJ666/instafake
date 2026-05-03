import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  function handleAddPost(e) {
    e.preventDefault();

    if (!image || !caption) {
      alert("Preencha todos os campos!");
      return;
    }

    const newPost = {
      id: Date.now(),
      image,
      caption,
    };

    setPosts([newPost, ...posts]);
    setImage("");
    setCaption("");
  }

  return (
    <div style={styles.container}>
      <h1>Mini Instagram</h1>

      {/* Formulário */}
      <form onSubmit={handleAddPost} style={styles.form}>
        <input
          type="text"
          placeholder="URL da imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Legenda"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Postar
        </button>
      </form>

      {/* Lista de posts */}
      <div style={styles.feed}>
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <img src={post.image} alt="post" style={styles.image} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilo simples
const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    fontFamily: "Arial",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
  },
  button: {
    padding: "10px",
    cursor: "pointer",
  },
  feed: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  post: {
    border: "1px solid #ccc",
    padding: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
};