import React, { useEffect } from "react";
import "../css/Metodo.scss";
import Footer from "./Footer";
import Nav from "./Nav";
import Helmet from "react-helmet";

function Metodo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlecheck = () => {};
  return (
    <div style={{ backgroundColor: "#fff5ee" }}>
      <Helmet>
        <title>Armea/paymentinfo</title>
        <meta name="description" content="cómo pagar en armea" />
        <meta name="keywords" content="TARJETA DE CRÉDITO,PAYPAL" />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="met__main">
        <div className="in__dic">
          <p>Indicio </p>
          <p className="pa__go">
            <span className="met__span">
              {"      >         "}&nbsp; Método de pago
            </span>
          </p>
        </div>
        <div className="fi__rst">
          <div className="methead">
            <p className="met__heandig">
              Método de <span className="met__span">pago</span>
            </p>
          </div>
        </div>
        <div className="se__c">
          <div className="metpara">
            <p>
              <p className="pmeto">TRANSFERENCIA BANCARIA</p>
              <p>
                Al realizar tu pedido recibirás un correo con los datos de
                cuenta a la que realizar la transferencia.
              </p>
              <p>TARJETA DE CRÉDITO</p>
              <p>
                Realiza el pago del pedido con tu tarjeta de crédito Visa o
                MasterCard.
              </p>
              <p>PAYPAL</p>
              <p>
                Realiza el pago mediante tu cuenta de Paypal. (Paypal tiene un
                coste adicional del +1,5% del valor de la compra)
              </p>
              <p>FRACCIONA TU PAGO CON SEQURA</p>
              <p>
                Fracciona tu pago en 3, 6 o 12 cuotas mensuales. Inmediato, sin
                papeleo y con sólo un coste fijo por cuota.
              </p>
              <p>¿Cómo funciona?</p>
              <br></br>
              <p>
                Elige Fracciona tu pago con SeQura al realizar tu pedido y paga
                sólo la primera cuota.
              </p>
              <p>Recibe tu pedido.</p>
              <p>El resto de pagos se cargarán automáticamente a tu tarjeta.</p>
              <p>
                Además puedes pagar el total de tu pedido cuando quieras sin
                costes adicionales.
              </p>
              <br></br>
              <p>¿Cuánto cuesta este servicio?</p>

              <p>
                El coste del servicio es de 3 a 27€ por cuota, dependiendo del
                importe del pedido. No hay intereses ni existe ningún otro pago
                adicional.
              </p>
              <p>Tengo más preguntas</p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Metodo;
