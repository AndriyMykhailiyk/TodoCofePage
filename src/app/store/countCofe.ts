import { create } from "zustand";

type CoffeeItem = {
  id: number;
  price: number;
  quantity: number;
};

type CountCofePage = {
  CountCofe: number;
  totalCoffees: number;
  totalPrice: number;
  coffees: CoffeeItem[];
  setAddOrderOrder: (count: number) => void;
  addCoffee: (price: number) => void;
  removeCoffee: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

let nextId = 1;

const useCountCofe = create<CountCofePage>((set) => ({
  CountCofe: 0,
  totalCoffees: 0,
  totalPrice: 0,
  coffees: [],
  setAddOrderOrder: (count) => set({ CountCofe: count }),
  addCoffee: (price) =>
    set((state) => {
      const newCoffee: CoffeeItem = { id: nextId++, price, quantity: 1 };
      return {
        coffees: [...state.coffees, newCoffee],
        totalCoffees: state.totalCoffees + 1,
        totalPrice: state.totalPrice + price,
      };
    }),
  removeCoffee: (id) =>
    set((state) => {
      const coffeeToRemove = state.coffees.find((coffee) => coffee.id === id);
      if (!coffeeToRemove) return state;

      return {
        coffees: state.coffees.filter((coffee) => coffee.id !== id),
        totalCoffees: state.totalCoffees - coffeeToRemove.quantity,
        totalPrice:
          state.totalPrice - coffeeToRemove.price * coffeeToRemove.quantity,
      };
    }),
  increaseQuantity: (id) =>
    set((state) => {
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === id ? { ...coffee, quantity: coffee.quantity + 1 } : coffee
      );
      return {
        coffees: updatedCoffees,
        totalCoffees: state.totalCoffees + 1,
        totalPrice:
          state.totalPrice +
          updatedCoffees.find((coffee) => coffee.id === id)!.price,
      };
    }),
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCoffees = state.coffees.map((coffee) =>
        coffee.id === id && coffee.quantity > 1
          ? { ...coffee, quantity: coffee.quantity - 1 }
          : coffee
      );
      const coffeeToDecrease = state.coffees.find((coffee) => coffee.id === id);
      if (!coffeeToDecrease || coffeeToDecrease.quantity <= 1) return state;

      return {
        coffees: updatedCoffees,
        totalCoffees: state.totalCoffees - 1,
        totalPrice: state.totalPrice - coffeeToDecrease.price,
      };
    }),
}));

export default useCountCofe;
