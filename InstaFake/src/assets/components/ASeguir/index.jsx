import  { useState } from "react";
 
function ASeguir() {
  const [seguindo, setSeguindo] = useState(false);
 
  const toggleSeguir = () => {
    setSeguindo(!seguindo);
  };
 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Perfil</h1>
 
      <button
        onClick={toggleSeguir}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: seguindo ? "#555" : "#007bff",
          color: "white"
        }}
      >
        {seguindo ? "Seguindo" : "Seguir"}
      </button>
    </div>
  );
}

export default ASeguir

 
