import React, { useEffect } from "react";
import "../css/Como.scss";
import Footer from "./Footer";
import Nav from "./Nav";
import Media from "react-media";
import Helmet from "react-helmet";

function Como() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handlecheck = () => {};
  return (
    <div style={{ backgroundColor: "#fff5ee" }}>
      <Helmet>
        <title>Armea/orderinfo</title>
        <meta name="description" content="cómo hacer un pedido en armea" />
        <meta name="keywords" content="El carrito,Fabricación, Envío" />
      </Helmet>
      <Nav handlecheck={(check) => handlecheck(check)} />
      <div className="mainss">
        <div className="link">
          <p>Indicio</p>
          <p className="span"> {">"} </p>
          <p>
            <span className="span">Cómo hacer un pedido</span>
          </p>
        </div>
        <div className="heading">
          <div className="head">
            <p>
              Cómo hacer un <span className="span">pedido</span>
            </p>
          </div>
        </div>
        <div className="paragraph">
          <div className="para">
            <p>
              En armeamuebles.com encontrarás el catálogo completo de los
              productos que diseñamos, fabricamos y vendemos. La compra se
              realiza íntegramente de{" "}
              <p>forma online, mediante un procedimiento muy sencillo.</p>
            </p>
            <p>
              En el menú de navegación principal de la web, puedes encontrar
              todos los productos de Bainba catologados por tipologías.
              Dormitorios completos, camas y cabeceros, todos los complementos
              para la habitación, y una sección especial de dormitorios Disney.
              Cada uno de los productos puede visualizarse en una ficha de
              producto, en la que se explican sus características. Aquí
              encontrarás toda la información: precio, medidas, los materiales
              con los que ha sido fabricado, y el número de referencia.
            </p>

            <p>
              La mayoría de nuestros productos pueden personalizarse, así que en
              la misma ficha del mueble podrás elegir las medidas y el color y
              forma de algunos elementos del mobiliarios, como los tiradores.
            </p>

            <p>
              Cuando hayas encontrado el producto ideal para ti, y quieras
              comprarlo, sólo tienes que añadirlo al carrito. Pudes añadir todos
              los productos que desees, y finalizar la compra cuando quieras. Si
              prefieres dejar tu selección guardada, los productos se quedarán
              registrados en tu carrito y sólo tendrás que volver a entrar y
              completar el proceso de compra.
            </p>
            <p>El proceso de compra es sencillo y consta de cinco pasos.</p>

            <p>
              <b>1. El carrito</b>
            </p>

            <p>
              En este primer paso, encontrarás un resumen de tu carrito de
              compra, con todos los productos que has agregado, y el precio de
              cada uno de ellos, junto con el precio final de tu compra. Puedes
              eliminar cualquiera de los productos del carrito en este momento.
            </p>

            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <div className="photo">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619062794/Mima1_koqu0y.png"></img>
                  </div>
                ) : (
                  <div className="photo">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619061865/imga5_cxr8ia.png"></img>
                  </div>
                );
              }}
            </Media>
          </div>
        </div>

        <div className="pago" style={{ marginTop: "-50px" }}>
          <div className="para">
            <p>
              <b>2. Login</b>
            </p>

            <p>
              Si ya estás registrado en armeamuebles.com, solo tienes que
              introducir tus datos de acceso. Si es la primera vez que compras
              en la tienda online, el proceso de registro es muy sencillo y solo
              te llevará un minuto. Pon tus datos y contraseña y continúa con tu
              compra. La próxima vez que compres, podrás utilizar estos mismos
              datos.
            </p>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <div className="cheque">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619062793/Mima2_wdcqjo.png"></img>
                  </div>
                ) : (
                  <div className="cheque">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619061287/imga2_ahpqlv.png"></img>
                  </div>
                );
              }}
            </Media>
          </div>
        </div>

        <div className="pago">
          <div className="para">
            <p>
              <b>3. Pago</b>
            </p>

            <p>
              En armeamuebles.com contamos con varios métodos de pago, para que
              elijas el que más te convenga. En el siguiente apartado te
              ampliamos la información. Cuando hayas elegido tu forma de pago,
              introduce los datos y finaliza la compra.
            </p>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <div className="cheque">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619062793/Mima3_se7dua.png"></img>
                  </div>
                ) : (
                  <div className="cheque">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619061287/imga3_akggvm.png"></img>
                  </div>
                );
              }}
            </Media>
          </div>
        </div>
        <div className="fab" style={{ marginTop: "50px" }}>
          <div className="para">
            <p>
              <b>4.Fabricación</b>
            </p>
            <p>
              Una vez realizados los pedidos, el estado de nuestro pedido
              cambiará a "En fabricación". Una vez este en este estado, los
              pedidos tienen un periodo de unos 15 dias laborales de fabricación
              aproximadamente, depende del producto se podrá extender el plazo
              entre unos 15/20 dias laborales.
              <p>
                En cada de ficha de producto se quedará indicado su tiempo de
                fabricación.{" "}
              </p>
              <p>
                pLos plazos de fabricación son aproximados, por lo que en
                algunos productos no serán 15 días, podrán ser menos, todo
                depende del stock del producto en ese momento. Se podrá
                consultar la disponibilidad del producto en nuestra atención al
                cliente.
              </p>
              <p>
                <b>5. Envío</b>
              </p>
              <p>
                Debido a las circunstancias que estamos viviendo por el
                COVID-19, los pedidos podrán ser retrasados por motivos del
                transporte, por lo que en algunos envíos no se podrá cumplir
                nuestros plazos de entrega establecidos. Pedimos disculpas,
                haremos todo lo posible para que lleguen cuanto antes a su
                domicilio.
              </p>
              <p>
                <b>
                  El tiempo de preparación del pedido previo al envío será de 1
                  a 5 días.
                </b>
              </p>
              <p>Los plazos de entrega varían según el tipo de envío:</p>
              <p>Entre 2 a 5 días laborables los envíos a península.</p>
              <p>
                Entre 4 y 6 días laborables para envíos a fuera de península a
                Europa o Baleares.
              </p>
              <p>
                Portugal (Península): entrega en 2 a 5 días hábiles, según el
                código postal del destino.
              </p>
              <p>
                Europa: entre 4 y 6 días laborales, en función del país de
                destino.
              </p>
              <p>TIPO DE ENVIOS: </p>
              <p>
                Envío gratuito: Entrega de 2 a 5 días (con este envío los
                muebles se dejarán en el portal del domicilio)
              </p>
              <p>
                Envío con subida garantizada al domicilio: Entrega de 3 a 5 días
                (coste del envío 35€) Se dejará en la puerta del domicilio.{" "}
              </p>
              <p>
                Envío con montadores: Entrega de 15-20 días. Los montadores se
                pondrán en contacto con el cliente para establecer día y hora de
                entrega y montaje.{" "}
              </p>
              <p>
                El plazo de entrega es aproximado por lo que puede variar las
                fechas de entrega.{" "}
              </p>
              <p>
                Para envíos de habitaciones completas, muebles especiales,
                producto en fabricación, tendrá otro plazo de entrega ( 15 días
                aprox de fabricación), esta mercancía se enviará paletizada y la
                entrega será al portal del domicilio (salvo que se contrate el
                servicio de montaje o subida garantizada). El cliente recibirá
                un mensaje cuando su pedido salga de fabrica y por la agencia de
                transporte para comunicar la entrega. Para más información
                contacta con nuestro departamento de Atención al cliente.
              </p>
              <p>
                *Se podrá insertar horario de entrega en el apartado de
                observaciones del pedido, teniendo en cuenta un margen de
                entrega de 4 horas.{" "}
              </p>
            </p>
            <Media query="(max-width:767px)">
              {(matches) => {
                return matches ? (
                  <div className="checkk">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619062794/Mima4_wtjaoh.png"></img>
                  </div>
                ) : (
                  <div className="checkk">
                    <img src="https://res.cloudinary.com/dd77cqt5fs/image/upload/v1619061287/imga4_sx8fki.png"></img>
                  </div>
                );
              }}
            </Media>
          </div>
        </div>

        <div className="fabb">
          <div className="para">
            <p>
              <b>POLÍTICA DE DEVOLUCIONES</b>
            </p>
            <p>
              Tiene usted derecho a desistir del presente contrato en un plazo
              de 14 días sin necesidad de justificación.
            </p>
            <p>
              El plazo de desistimiento expirará a los 14 días del día que usted
              o un tercero por usted indicado, distinto del transportista,
              adquiera la posesión material de los bienes.
            </p>
            <p>
              Para ejercer el derecho de desistimiento, deberá contactar con el
              centro de atención al cliente de bainba.com en el número de
              teléfono 965 082 828 o bien enviar un e-mail a la dirección
              info@bainba.com indicando su nombre, domicilio, número de
              pedido/factura y número de teléfono, manifestando su decisión de
              desistir. No se aceptarán devoluciones no autorizadas expresamente
              por el vendedor.
            </p>
            <p>
              Para cumplir el plazo de desistimiento, basta que la comunicación
              relativa al ejercicio por su parte del derecho de desistimiento
              sea enviada antes de que venza el plazo de desistimiento.
            </p>
            <p>
              El cliente podrá enviar el producto por el medio de transporte de
              su elección, incluyendo el servicio de correos. Asimismo, si lo
              desea puede solicitar por teléfono o a través de e-mail que le
              mandemos un transportista, el cual se pondrá en contacto con el
              cliente para recoger el producto en la dirección que le indique
              (siempre localizada en el mismo país en el que efectuaste tu
              pedido).
            </p>
            <p>
              Sea cual sea la forma de devolución elegida, el cliente deberá
              asumir el coste directo de devolución de los bienes, es decir, el
              transporte hasta nuestras instalaciones.
            </p>
            <p>
              Sólo se admitirá la devolución de artículos en perfecto estado, en
              su embalaje original y que no hayan sido utilizados por el
              cliente. Junto con la mercancía devuelta, el cliente incluirá una
              copia de la factura de venta que se envío con la mercancía, así
              como un número de cuenta en el que se haya de realizar el abono de
              la mercancía.
            </p>
            <p>
              Una vez verificado el estado de la mercancía devuelta, y
              descontados los gastos de entrega, se procederá al abono del
              precio del producto en las 48 horas siguientes a la recepción de
              la devolución.
            </p>
            <p>
              No se hará ningún reembolso si el producto ha sido usado,
              productos que no estén en las mismas condiciones en las que fueron
              entregados o que hayan sufrido algún daño.
            </p>
            <p>
              Las devoluciones que sean aceptadas por bainba.com como resultado
              de un error en el envío no imputable al cliente, correrán por
              cuenta del vendedor, incluyendo los gastos derivados del envío y
              recogida de la mercancía errónea.
            </p>
            <p>
              Solo será usted responsable de la disminución de valor de los
              bienes resultante de una manipulación distinta a la necesaria para
              establecer la naturaleza, las características y el funcionamiento
              de los bienes.
            </p>
            <p>
              En caso de devoluciones de productos que han sido enviados a
              Canarias, Ceuta y Melilla, se aplicaran las mismas condiciones
              expuestas con anterioridad.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Como;
