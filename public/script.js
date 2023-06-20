function updateItemToDelete (productId) {
    document.getElementById('deleteId').value = productId;
  }
  
  async function deleteItem() {
    const productId = document.getElementById('deleteId').value;
  
    const resp = await fetch(`http://localhost:9000/product/${productId}`, {
      method: "DELETE"
    });
  
    const data = await resp.json();
  
    if (resp.status === 200) {
      location.reload();
    } else {
      alert(data.message);
    }
  }

  