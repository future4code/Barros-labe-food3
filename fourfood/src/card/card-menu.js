const CardMenu = ({img,category,description,name,price}) => {
return (
<div className="CardMenu">
    <main>
<div className="Retangulo">
<h2>{category}</h2>
<img  className="img logo" src={img} alt={name}  ></img>
<h1>{name}</h1>
<h2>{description}</h2>
<h3>R$:{price}</h3>
<span>
<button>Adicionar</button>
</span>
</div>
</main>
</div>

)

};
export default CardMenu;