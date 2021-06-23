import React from "react";
import "../css/Shippingcost.scss";
function Shippingcost(props) {
  return (
    <div className="_shipcost">
      <div>
        <table>
          <tr className="_shipcosttr">
            <td className="_shipcosttd1">Total precio del producto</td>
            <td className="_shipcosttd2">$0</td>
            <td className="_shipcosttd3">$0</td>
            <td className="_shipcosttd4">${props.amount}</td>
          </tr>
          <tr className="_shipcosttr">
            <td className="_shipcosttd1">Envio</td>
            <td className="_shipcosttd2">$0</td>
            <td className="_shipcosttd3">$0</td>
            <td className="_shipcosttd4">${props.amount}</td>
          </tr>
          <tr className="_shipcosttr">
            <td className="_shipcosttd1">Cargo de pago</td>
            <td className="_shipcosttd2">$0</td>
            <td className="_shipcosttd3">$0</td>
            <td className="_shipcosttd4">${props.amount}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Shippingcost;
