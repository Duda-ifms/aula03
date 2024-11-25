import { useState } from "react"
import { useEffect } from "react"
import ListaProdutos from "./components/ListaProdutos";

export default function Home() {
   const [produtos, setProdutos] = useState([]);

   useEffect(() => {
      const receberListaProdutos = async () => {
         try {
            const resposta = await fetch('https://fakestoreapi.com/products');
            const listaProdutos = await resposta.json();
            setProdutos(listaProdutos);
         } catch (erro) {
            alert('Erro ao carregar produtos');
         }
      };

      receberListaProdutos();
   }, []);

   return (
      <>
         <ListaProdutos produtos={produtos} />
      </>
   );
}
