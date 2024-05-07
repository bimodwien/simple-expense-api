"use strict";

interface Expense {
  id: number;
  name: string;
  nominal: number;
  category: string;
}

const expenses: Expense[] = [
  {
    id: 1,
    name: "Makan Siang",
    nominal: 75000,
    category: "Makanan",
  },
  {
    id: 2,
    name: "Beli Buku",
    nominal: 150000,
    category: "Pendidikan",
  },
  {
    id: 3,
    name: "Beli Bensin",
    nominal: 50000,
    category: "Transportasi",
  },
  {
    id: 4,
    name: "Bayar Listrik",
    nominal: 200000,
    category: "Tagihan",
  },
  {
    id: 5,
    name: "Beli Makanan Ringan",
    nominal: 25000,
    category: "Makanan",
  },
  {
    id: 6,
    name: "Beli Tiket Kereta",
    nominal: 120000,
    category: "Transportasi",
  },
  {
    id: 7,
    name: "Beli Baju",
    nominal: 300000,
    category: "Fashion",
  },
  {
    id: 8,
    name: "Bayar Internet",
    nominal: 150000,
    category: "Tagihan",
  },
  {
    id: 9,
    name: "Beli Alat Tulis",
    nominal: 100000,
    category: "Pendidikan",
  },
  {
    id: 10,
    name: "Beli Buah",
    nominal: 50000,
    category: "Makanan",
  },
];

export default expenses;
