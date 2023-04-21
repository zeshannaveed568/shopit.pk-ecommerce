import Card from "../Card/Card";
import "./featured.scss";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featured'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
          aut dolore debitis, sequi perspiciatis illo consequatur ea nesciunt
          sint iste ipsa inventore aspernatur accusantium corrupti suscipit non
          dolorem quae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat fuga aut dolore debitis, sequi perspiciatis illo consequatur
          ea nesciunt sint iste ipsa inventore aspernatur accusantium corrupti
          suscipit non dolorem quae!
        </p>
      </div>
      <div className='bottom'>
        <div className='bottom'>
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Featured;
