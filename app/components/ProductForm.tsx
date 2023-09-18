import {CartForm} from '@shopify/hydrogen';

function ProductForm({variantId}: {variantId: string}) {
  const lines = [{merchandiseId: variantId, quantity: 1}];

  return (
    <CartForm route="/cart" action={CartForm.ACTIONS.LinesAdd} inputs={{lines}}>
      <button className="bg-black text-white px-6 py-3 w-full rounded-md text-center font-medium max-w-[400px]">
        Add to Bag
      </button>
    </CartForm>
  );
}

export default ProductForm
