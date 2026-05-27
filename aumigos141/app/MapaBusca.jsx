"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MoverMapa({ coords }) {
  const map = useMap();
  if (coords) map.setView(coords, 15);
  return null;
}

export default function MapaBusca() {
  const [busca, setBusca] = useState("");
  const [coords, setCoords] = useState(null);
  const [endereco, setEndereco] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function buscarEndereco() {
    if (!busca.trim()) return;
    setCarregando(true);
    setErro("");

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(busca)}&format=json&limit=1`,
        { headers: { "Accept-Language": "pt-BR" } }
      );
      const data = await res.json();

      if (data.length === 0) {
        setErro("Endereço não encontrado. Tente ser mais específico.");
        setCoords(null);
      } else {
        const { lat, lon, display_name } = data[0];
        setCoords([parseFloat(lat), parseFloat(lon)]);
        setEndereco(display_name);
      }
    } catch {
      setErro("Erro ao buscar. Verifique sua conexão.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {/* Barra de busca */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && buscarEndereco()}
          placeholder="Digite um endereço ou cidade..."
          style={{ flex: 1, padding: "8px 12px", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          onClick={buscarEndereco}
          disabled={carregando}
          style={{ padding: "8px 16px", borderRadius: 6, background: "#4A90D9", color: "#fff", border: "none", cursor: "pointer" }}
        >
          {carregando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {erro && <p style={{ color: "red", marginBottom: 8 }}>{erro}</p>}

      {/* Mapa */}
      <MapContainer
        center={coords || [-14.235, -51.925]} // Brasil como padrão
        zoom={coords ? 15 : 4}
        style={{ height: "400px", borderRadius: 8 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {coords && (
          <>
            <MoverMapa coords={coords} />
            <Marker position={coords}>
              <Popup>{endereco}</Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
}