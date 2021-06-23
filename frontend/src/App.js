import { Route, Switch } from "react-router";
import Landing from "./components/Landing ";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Register from "./components/Register";
import Product from "./components/Product";
import Presentacios from "./components/Presentacios";
import Check from "./components/Check";
import Checkout from "./components/Checkout";
import Nostros from "./components/Nostros";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Cookies from "./components/Cookies";
import Condicionas from "./components/Condicionas";
import Metodo from "./components/Metodo";
import Misdatos from "./components/Misdatos";
import Editdata from "./components/Editdata";
import History from "./components/History";
import Zonas from "./components/Zonas";
import Como from "./components/Como";
import Search from "./components/Search";
import Confirmation from "./components/Confirmation";
import Tablero from "./admin/components/Tablero";
import Helmet from "react-helmet";
import Editcat from "../src/admin/components/Editcat";
import Blognueventr from "../src/admin/components/Blognueventr";
import Blogdetails from "./admin/components/Blogdetails";
import Blogeditentry from "./admin/components/Blogeditentry";
import Todlacat from "./admin/components/Todlacat";
import Editcategory from "./admin/components/Editcategory";
import Clients from "./admin/components/Clients";
import Clientsec from "./admin/components/Clientsec";
import Editnueprd from "./admin/components/Editnueprd";
import Allproducts from "./admin/components/Allproducts";
import Editproduct from "./admin/components/Editproduct";
import Pedidof from "./admin/components/Pedidof";
import Pending from "./admin/components/Pending";
import Proceso from "./admin/components/Proceso";
import Pagado from "./admin/components/Pagado";
import Enviados from "./admin/components/Enviados";
import Entregado from "./admin/components/Entregado";
import Editsldr from "./admin/components/Editsldr";
import Slidertab from "./admin/components/Slidertab";
import Editslider from "./admin/components/Editslider";
import Nuevoprdct from "./admin/components/Nuevoprdct";
import Allhomeproduct from "./admin/components/Allhomeproduct";
import Editnew from "./admin/components/Editnew";
import Newemail from "./admin/components/Newemail";
import Allemail from "./admin/components/Allemail";
import Allshipping from "./admin/components/Allshipping";
import Newshipping from "./admin/components/Newshipping";
import Editship from "./admin/components/Editship";
import Coupen from "./admin/components/Coupen";
import Allcoupons from "./admin/components/Allcoupons";
import Editcoupon from "./admin/components/Editcoupon";
import Reportes from "./admin/components/Reportes";
import Editpopup from "./admin/components/Editpopup";
import Allpopup from "./admin/components/Allpopup";
import Updatepop from "./admin/components/Updatepop";
import Adminlogin from "./admin/components/Adminlogin";
import MakeAdmin from "./admin/components/MakeAdmin";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Armea</title>
        <meta
          name="description"
          content="obtenga los muebles de tendencia para usted y sus mascotas"
        />
        <meta
          name="keywords"
          content="Escritorio Montessori,Muebles que hacen
          click, Casa para gato Mod. Tavolo"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/product/:Id" component={Product}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route exact path="/blog" component={Presentacios}></Route>
        <Route path="/about" component={Nostros}></Route>
        <Route path="/Checkout" component={Check}></Route>
        <Route path="/Checkouts" component={Checkout}></Route>
        <Route path="/blog/:Id" component={Blog}></Route>
        <Route path="/cookies" component={Cookies}></Route>
        <Route path="/conditions" component={Condicionas}></Route>
        <Route path="/paymentinfo" component={Metodo}></Route>
        <Route path="/personalinfo" component={Misdatos}></Route>
        <Route path="/editdata" component={Editdata}></Route>
        <Route path="/orderhistory" component={History}></Route>
        <Route path="/zones" component={Zonas}></Route>
        <Route path="/orderinfo" component={Como}></Route>
        <Route path="/product" component={Search}></Route>
        <Route path="/confirmation" component={Confirmation}></Route>

        {/*Admin part */}
        <Route exact path="/admin" component={Tablero}></Route>
        <Route path="/admin/newcategory" component={Editcat}></Route>
        <Route path="/admin/newblog" component={Blognueventr}></Route>
        <Route path="/admin/blogdetail" component={Blogdetails}></Route>
        <Route path="/admin/blogedit/:Bid" component={Blogeditentry}></Route>
        <Route path="/admin/allcategories" component={Todlacat}></Route>
        <Route path="/admin/editcategory/:Cid" component={Editcategory}></Route>
        <Route path="/admin/clients" component={Clients}></Route>
        <Route path="/admin/user/:id" component={Clientsec}></Route>
        <Route path="/admin/newproduct" component={Editnueprd}></Route>
        <Route path="/admin/allproducts" component={Allproducts}></Route>
        <Route path="/admin/editproduct/:Pid" component={Editproduct}></Route>
        <Route path="/admin/allorders" component={Pedidof}></Route>
        <Route path="/admin/pendingorders" component={Pending}></Route>
        <Route path="/admin/processingorders" component={Proceso}></Route>
        <Route path="/admin/payedorders" component={Pagado}></Route>
        <Route path="/admin/enviadoorder" component={Enviados}></Route>
        <Route path="/admin/finishedorders" component={Entregado}></Route>
        <Route path="/admin/newslider" component={Editsldr}></Route>
        <Route path="/admin/allsliders" component={Slidertab}></Route>
        <Route path="/admin/editslider/:Sid" component={Editslider}></Route>
        <Route path="/admin/homenewproduct" component={Nuevoprdct}></Route>
        <Route path="/admin/allhomeproduct" component={Allhomeproduct}></Route>
        <Route path="/admin/editnewhome/:Nid" component={Editnew}></Route>
        <Route path="/admin/newemail" component={Newemail}></Route>
        <Route path="/admin/allemail" component={Allemail}></Route>
        <Route path="/admin/allshipping" component={Allshipping}></Route>
        <Route path="/admin/newshipping" component={Newshipping}></Route>
        <Route path="/admin/editsghip/:ID" component={Editship}></Route>
        <Route path="/admin/newcoupon" component={Coupen}></Route>
        <Route path="/admin/allcoupon" component={Allcoupons}></Route>
        <Route path="/admin/editcoupon/:ID" component={Editcoupon}></Route>
        <Route path="/admin/reports" component={Reportes}></Route>
        <Route path="/admin/newpopup" component={Editpopup}></Route>
        <Route path="/admin/popup" component={Allpopup}></Route>
        <Route path="/admin/editpop/:ID" component={Updatepop}></Route>
        <Route path="/admin/login" component={Adminlogin}></Route>
        <Route path="/admin/makeadmin" component={MakeAdmin}></Route>
      </Switch>
    </div>
  );
}

export default App;
