// src/utils/modals.js

import Swal from 'sweetalert2';
import '../../styles/modals.css';

// Confirmation toast
export const showConfirmationModal = (isRemoveItem) => {
    const title = isRemoveItem ? "¿Quiere eliminar el producto del carrito?" : "Esta seguro que quiere vaciar el carrito?";
  return Swal.fire({
    title,
    text: isRemoveItem ? "Lo puede volver a agregar cuando quiera!" : "",
    showCancelButton: true,
    confirmButtonText:  isRemoveItem ? "Si, lo quiero eliminar!" : "Si, vaciar carrito",
    customClass: {
      title: 'custom-swal-title',
      text: 'custom-swal-text',
      confirmButton: 'custom-confirm-button',
      cancelButton: 'custom-cancel-button',
      popup: 'custom-swal-popup',
    }
  });
};

// Success toast
export const showSuccessToast = () => {
  return Swal.fire({
    position: "top-end",
    title: "Se agregó el producto correctamente en el carrito",
    showConfirmButton: false,
    timer: 1500,
    customClass: {
      title: 'custom-swal-text',
      popup: 'custom-swal-popup-small',
    }
  });
};
