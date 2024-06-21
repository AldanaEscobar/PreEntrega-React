import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
    const { cart, deleteCart, total } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const [pedidoId, setPedidoId] = useState('');

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
                <h1 className="main-title">Gracias por tu compra</h1>
                <h3>El ID de tu pedido es: {pedidoId}</h3>
                <button className="enviar" onClick={() => deleteCart()}>Seguir comprando</button>
                </div>
        )
    }


    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
