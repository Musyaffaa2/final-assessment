// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menyimpan daftar pesanan
let orders = [];

// Fungsi menambahkan pesanan baru
function addOrder(customerName, items) {
  if (!customerName || !Array.isArray(items) || items.length === 0) {
    console.error("Nama pelanggan atau daftar item tidak valid.");
    return null;
  }

  const id = generateUniqueId();
  const totalPrice = items.reduce((acc, item) => acc + (item.price || 0), 0);

  const newOrder = {
    id,
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };

  orders.push(newOrder);
  return id;
}

// Fungsi untuk memperbarui status pesanan berdasarkan ID
function updateOrderStatus(orderId, status) {
  const validStatuses = ["Menunggu", "Diproses", "Selesai"];
  if (!validStatuses.includes(status)) {
    console.error(
      "Status tidak valid. Pilih antara: Menunggu, Diproses, atau Selesai."
    );
    return;
  }

  const order = orders.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
    return;
  }

  order.status = status;
}

// Fungsi menghitung total pendapatan dari pesanan yang selesai
function calculateTotalRevenue() {
  const completedOrders = orders.filter((order) => order.status === "Selesai");
  if (completedOrders.length === 0) {
    console.warn("Tidak ada pesanan yang selesai.");
    return 0;
  }

  return completedOrders.reduce((acc, order) => acc + order.totalPrice, 0);
}

// Fungsi menghapus pesanan berdasarkan ID
function deleteOrder(orderId) {
  const index = orders.findIndex((order) => order.id === orderId);
  if (index === -1) {
    console.error(`Pesanan dengan ID ${orderId} tidak ditemukan.`);
    return;
  }

  orders.splice(index, 1);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
