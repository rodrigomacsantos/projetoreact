import React from "react";
import { Produto } from "@/app/models/interfaces";

interface CardProps {
  produto: Produto,    
  addToCart: (produto: Produto) => void
}

const Card = ({ produto, addToCart }: CardProps) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-center">{produto.title}</h2>
      <img 
        src={produto.image} 
        alt={produto.title} 
        className="w-32 h-32 object-contain mb-4"
      />      
      <p className="font-semibold text-lg mb-2">{produto.price}€</p>
      <button 
        onClick={() => addToCart(produto)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
      >
        + Adicionar
      </button>      
      <p className="text-gray-600 text-center">{produto.description}</p>    
    </div>
  );
};

export default Card;