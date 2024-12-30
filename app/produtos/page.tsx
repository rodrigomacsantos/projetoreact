'use client';

import React from 'react';
import useSWR from 'swr';
import Card from '../components/Card/Card';

// Define o modelo Produto (ajuste conforme necessário para seu backend)
interface Produto {
  id: number; // Adicione um campo id único se ainda não existir
  title: string;
  image: string;
  description: string;
  price?: number;
}

export default function ProductsPage() {
  // Função para buscar os dados
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  
  // Hook SWR para gerenciamento de dados
  const { data, error } = useSWR<Produto[]>('/api/products', fetcher);

  // Lida com erros ao carregar os dados
  if (error) return <div>Erro ao carregar os produtos.</div>;
  
  // Exibe enquanto os dados não carregam
  if (!data) return <div>Carregando produtos...</div>;

  // Renderiza os produtos
  return (
    <div>
      {data.map((produto) => (
        <Card
          key={produto.id} // Adiciona a propriedade key para cada produto
          title={produto.title}
          image={produto.image}
          description={produto.description}
          price={produto.price}
        />
      ))}
    </div>
  );
}