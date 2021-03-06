import { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import { formatter } from "../utils/helpers";
import ProductOptions from "./ProductOptions";

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectVariant, setSelectVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectVariant(item);
      }
    });
  }

  return (
    <div className="flex flex-col w-full p-4 shadow-lg rounded-2xl md:w-1/3">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <span className="pb-3">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectVariant);
        }}
        className="px-2 py-3 mt-3 text-white bg-black rounded-lg hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
