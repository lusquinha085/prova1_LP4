import React from 'react';

export interface Item {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

interface CardapioItemProps {
  item: Item;
  onAdicionar: (item: Item) => void;
}

export const CardapioItem: React.FC<CardapioItemProps> = ({ item, onAdicionar }) => {
  return (
    <div style={styles.card}>
      <img src={item.imagem} alt={item.nome} style={styles.imagem} />
      <div style={styles.conteudo}>
        <h3 style={{ margin: '0 0 8px 0' }}>{item.nome}</h3>
        <p style={{ fontSize: '0.85rem', color: '#aaa', margin: '0 0 12px 0' }}>
          {item.descricao}
        </p>
        <div style={styles.rodape}>
          <span style={styles.preco}>R$ {item.preco.toFixed(2)}</span>
          <button style={styles.botao} onClick={() => onAdicionar(item)}>
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  imagem: {
    width: '100%',
    height: '140px',
    objectFit: 'cover' as const,
  },
  conteudo: {
    padding: '12px',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
  },
  rodape: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preco: {
    color: '#e67e22',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};