import { For, useContext } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../contexts/CartContext";

export default function Cart() {
    const { items, setItems } = useCartContext()

    const total = () => {
        return items.reduce((acc, current) => {
            return acc + current.price * current.quantity
        }, 0)
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems([...updatedItems]);
      };
    
    const incItem = (index) => {
        const item = items.at(index)
        setItems(index, "quantity", item.quantity + 1)
    }

    const decItem = (index) => {
        const item = items.at(index)
        if (item.quantity <= 1) {
            deleteItem(index)
        }
        else {
            setItems(index, "quantity", item.quantity - 1)
        }
    }

    return (
        <div class="max-w-md my-8 mx-auto">
            <Card rounded={true}>
                <h2 class="mb-8 pb-4 border-b-2 font-bold">Your shoping cart</h2>
                <For each={items}>
                    {(item, i) => (
                        // console.log({item})
                        <div class="my-1 mr-10 p-1 flex items-center gap-4 justify-end">
                            <p>{item.title} - £{item.price} x <span class="font-bold">{item.quantity}</span></p>
                            <span onClick={() => deleteItem(i())} class="material-symbols-outlined cursor-pointer hover:bg-red-500 active:font-bold rounded-md">
                                delete
                            </span>
                            <span onClick={() => incItem(i())} class="material-symbols-outlined cursor-pointer hover:bg-green-600 rounded-md">
                                add
                            </span>
                            <span onClick={() => decItem(i())} class="material-symbols-outlined cursor-pointer hover:bg-orange-500 rounded-md">
                                remove
                            </span>
                        </div>
                    )}
                </For>
                <p class="mt-8 pt-4 border-t-2 font-bold">Total cart - £{total()}</p>
            </Card>
        </div>
    )
}