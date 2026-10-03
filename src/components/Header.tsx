import React from 'react';

interface HeaderProps {
  totalItens: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ totalItens, onOpenCart }) => {
  return (
    <header style={styles.header}>
      <h2>Austin Burger</h2>
      <button style={styles.cartButton} onClick={onOpenCart}>
     Carrinho ({totalItens})
      </button>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderBottom: '3px solid #d35400',
  },
  cartButton: {
    backgroundColor: '#d35400',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};