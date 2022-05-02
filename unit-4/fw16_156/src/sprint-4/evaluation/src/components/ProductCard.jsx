import { Flex } from "./Styled";

export const ProductCard = ({ title, id, brand, image, price, category }) => {
  return (
    <>
      <Flex className="border border-solid border-black" data-testid="single-product-item" style={{borderRadius: "20px"}} key={id}>
        {/* display item info here  */}
        <h2 className="font-bold text-center p-2" style={{fontSize: "20px"}}>{title}</h2>
        <img className="mx-14 p-2" src={image} alt={title} />
        <h2 className="text-xl p-2 font-bold text-gray-400 text-center">{brand}</h2>
        <p className="p-2 font-sans font-semibold text-center">Price: {price}</p>
      </Flex>
    </>
  );
};