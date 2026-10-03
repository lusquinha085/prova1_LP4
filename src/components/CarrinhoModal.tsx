import React, { useState } from 'react';
import type { Item } from './CardapioItem';

interface CarrinhoModalProps {
  carrinho: Item[];
  onClose: () => void;
  onLimpar: () => void;
}

export const CarrinhoModal: React.FC<CarrinhoModalProps> = ({
  carrinho,
  onClose,
  onLimpar,
}) => {
 
  const [pedidoEnviado, setPedidoEnviado] = useState(false);

  const total = carrinho.reduce((sum, item) => sum + item.preco, 0);

  const finalizarPedido = () => {
    setPedidoEnviado(true);
    onLimpar();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {pedidoEnviado ? (
          
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
           
            <h3 style={{ color: '#27ae60', margin: '10px 0' }}>
              Pedido Enviado com Sucesso!
            </h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '20px' }}>
              O seu pedido já está sendo preparado no estilo Texano.
            </p>
            <button style={styles.botaoFinalizar} onClick={onClose}>
              Voltar ao Cardápio
            </button>
          </div>
        ) : (
        
          <div>
            <h3>Seu Pedido</h3>
            {carrinho.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <div>
                {carrinho.map((item, index) => (
                  <div key={index} style={styles.itemLinha}>
                    <span>{item.nome}</span>
                    <strong>R$ {item.preco.toFixed(2)}</strong>
                  </div>
                ))}
                <hr style={{ borderColor: '#444', margin: '12px 0' }} />
                <h4>Total: R$ {total.toFixed(2)}</h4>
                <button style={styles.botaoFinalizar} onClick={finalizarPedido}>
                  Finalizar Pedido
                </button>
              </div>
            )}
            <button style={styles.botaoFechar} onClick={onClose}>
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
  },
  itemLinha: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  botaoFinalizar: {
    width: '100%',
    backgroundColor: '#d35400',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  botaoFechar: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#aaa',
    border: '1px solid #444',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '8px',
  },
};