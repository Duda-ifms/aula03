import { useState,useEffect } from "react";

export default function Home() {
    const [listaProdutos, setListaProdutos] = useState([]);
}
   useEffect(() => {
    const receberListaProdutos = async () => {
       try{ 
        const resposta = await fetch('https://fakestoreapi.com/product');
        const dados = await resposta.json();
        setLista(dados);
       }catch{
        confirma('Sua resposta foi confirmada')
       }
          receberListaProdutos();
     }}
   )
   