export interface PurchasesItem{

}
export interface Purchases<PurchasesItem> {
  id: number;
  customerName: string;
  purchaseDate: number;
  item: PurchasesItem| null
  totalPrice: string;
}

