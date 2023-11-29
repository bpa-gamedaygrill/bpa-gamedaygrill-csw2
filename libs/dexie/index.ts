import Dexie from "dexie";

export interface DexieCartInterface {
  id?: number; // Auto-incremented primary key
  itemId: string;
  itemName: string;
  itemDesc: string;
  itemPrice: string;
  imageUrl: string;
  itemQuantity: number;
  originalItemPrice: string;
}

export class CartDatabase extends Dexie {
  cartItems: Dexie.Table<DexieCartInterface, number>;

  constructor() {
    super('CartDatabase');
    this.version(1).stores({
      cartItems: '++id, itemId, itemName, itemDesc, itemPrice, imageUrl, itemQuantity, originalItemPrice',
    });
    this.cartItems = this.table('cartItems');
  }
}

const dexie = new CartDatabase();

export default dexie;
