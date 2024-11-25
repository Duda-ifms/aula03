import styles from '../styles/ListaProdutos.module.css'

export default function ListaProdutos({ produtos }) {

  if (produtos.length === 0) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <ul className={styles.bloco}>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <p>Preço: {produto.price}</p>
            <img src={produto.image} alt={produto.title} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
