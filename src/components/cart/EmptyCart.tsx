import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full  flex-col items-center justify-center">
      <div>
        <img
          className=" h-52 w-52"
          src="/images/cart/empty-cart.png"
          alt="an image of an empty cart"
        />
      </div>
      <div className="mb-4 mt-4 dark:text-gray-100">
        <p className=" font-custom text-lg font-semibold">Your cart is empty</p>
      </div>
      <div className="mt-6">
        <a
          onClick={() => {
            navigate("/products");
          }}
          href="#"
          className="button"
        >
          Keep Browsing
        </a>
      </div>
    </div>
  );
}

export default EmptyCart;