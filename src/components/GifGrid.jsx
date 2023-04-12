import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

function GifGrid({ category }) {

  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando</h2>}

      <div className="card-grid">
        {!isLoading && gifs.map(({ id, title, url }) => (
          <GifGridItem
            key={id}
            title={title}
            url={url}
          />
        ))}
      </div>
    </>
  )
}

export default GifGrid;