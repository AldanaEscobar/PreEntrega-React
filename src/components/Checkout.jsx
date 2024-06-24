import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import '../styles/checkout.css'

const Checkout = () => {
    const { cart, deleteCart, total } = useContext(CartContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    const [pedidoId, setPedidoId] = useState('');
    const handleViewProducts = () => {
        window.location.href = '/';
      };

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total(),
        };
        console.log('pedido', pedido);
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
        .then(({id}) => {
            setPedidoId(id)
            deleteCart()
        })
    }

    if (pedidoId) {
        return (
            <div className="container">
                <h2 className="title">Gracias por tu compra!</h2>
                <p className="product-description">Puedes hacer el seguimiento de tu compra con el ID: <span className="span-id">{pedidoId}</span></p>
                <button className="default-button button-1" onClick={() => {deleteCart(); handleViewProducts(); }}><span>Volver a la tienda</span></button>
            </div>
        )
    }

    return (
        <div className="container">
            <h2 className="title">Ultimo paso para finalizar su compra</h2>
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <div></div>
                <input type="text" placeholder="Como quieres que te llamemos?" 
                    {...register("nombre", {required: "Este campo es requerido"})} 
                    className="checkout-input" 
                />
                <ErrorMessage errors={errors} name="nombre" as="p" className="error-message" />

                <input type="email" placeholder="En que mail quieres recibir las guias?" 
                    {...register("email", {required: "Este campo es requerido"})} 
                    className="checkout-input" 
                />
                <ErrorMessage errors={errors} name="email" as="p" className="error-message" />

                <input type="phone" placeholder="Ingresá un telefono de contacto" 
                    {...register("telefono", { required: "Este campo es requerido" })} 
                    className="checkout-input" 
                />
                <ErrorMessage errors={errors} name="telefono" as="p" className="error-message" />

                <button className="buttton-1 default-button" type="submit"><span>Comprar</span></button>
            </form>
        </div>
    );
};

export default Checkout;
