import { useState } from 'react';
import { Header } from './components/Header';
import { CardapioItem, type Item } from './components/CardapioItem';
import { CarrinhoModal } from './components/CarrinhoModal';

const CARDAPIO: Item[] = [
  {
    id: 1,
    nome: 'Texas Brisket Burger',
    descricao: 'Hambúrguer 180g, peito bovino defumado 12h, queijo cheddar e molho BBQ.',
    preco: 38.9,
    imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
  },
  {
    id: 2,
    nome: 'Smokey Bacon Cheese',
    descricao: 'Hambúrguer 180g, bacon crocante, cheddar duplo e maionese defumada.',
    preco: 34.9,
    imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400',
  },
  {
    id: 3,
    nome: 'Pulled Pork Sandwich',
    descricao: 'Copa lombo suína desfiada, tempero Tex-Mex e coleslaw.',
    preco: 32.0,
    imagem: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=400',
  },
  {
    id: 4,
    nome: 'Texas Onion Rings',
    descricao: 'Anéis de cebola empanados e fritos, com molho Ranch.',
    preco: 18.0,
    imagem: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400',
  },

{
    id: 5,
    nome: 'Tábua Texana',
    descricao: 'Porção generosa do melhor churrasco Texano (Aprox. 1,8kg)',
    preco: 180.0,
    imagem: 'https://conteudo.imguol.com.br/c/entretenimento/2a/2021/08/30/pulled-pork-e-brisket-do-dickeys-rede-que-tem-550-lojas-nos-eua-1630344078778_v2_615x300.jpg',
  },

  {
    id: 6,
    nome: 'Costelinha suína ao barbecue',
    descricao: 'Servida em uma tábua de madeira com fritas, coleslaw (salada de repolho) e molho adicional.',
    preco: 99.00,
    imagem: 'https://mapadasfranquias.com.br/wp-content/uploads/2021/07/letseatbbk-1200x817.jpg',
  },
  {
    id: 7,
    nome: 'Chili Texano',
    descricao: 'Prato encorpado, picante e reconfortante feito com carne moída, feijão e tomates, temperado com pimenta e cominho',
    preco: 18.0,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyc-5zmRA9a2f1cU8e48xtdsjtvC3WY0gMvIvTbZhPeA&s=10',
  },
{
    id: 8,
    nome: 'Austin',
    descricao: 'Hambúrguer 180g assado na churrasqueira, bacon, anéis de cebola, cheedar e molho barbecue.',
    preco: 39.0,
    imagem: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdADyiJxwhPHKvA6cQV7Sb-DEC4h3QXTfYD9MZs-q3reAY4EqODjnpszI&s=10',
  },
{
    id: 8,
    nome: 'Torresmo de Rolo',
    descricao: 'Torresmo corcante, acompanhado de limão e gelia de pimenta.',
    preco: 35.0,
    imagem: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39Oduh3q_JtfpQ8zH8gGWOnyrBlsBCnZd9beYttFAzTvdLMnm7DGTfkE&s=10',
  },


 
];

export default function App() {
  const [carrinho, setCarrinho] = useState<Item[]>([]);
  const [modalAberto, setModalAberto] = useState(false);

  const adicionarAoCarrinho = (item: Item) => {
    setCarrinho([...carrinho, item]);
  };

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header totalItens={carrinho.length} onOpenCart={() => setModalAberto(true)} />

      <main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#fff', borderBottom: '2px solid #d35400', paddingBottom: '8px' }}>
         Cardápio Texano
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          {CARDAPIO.map((item) => (
            <CardapioItem key={item.id} item={item} onAdicionar={adicionarAoCarrinho} />
          ))}
        </div>
      </main>

      {modalAberto && (
        <CarrinhoModal
          carrinho={carrinho}
          onClose={() => setModalAberto(false)}
          onLimpar={() => setCarrinho([])}
        />
      )}
    </div>
  );
}