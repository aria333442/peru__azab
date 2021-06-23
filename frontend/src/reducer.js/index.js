import { combineReducers } from "redux";
import addcommentReducer from "./addcommentReducer";
import addtocartReducer from "./addtocartReducer";
import blogbyidReducer from "./blogbyidReducer";
import cartbyidReducrer from "./cartbyidReducrer";
import editdataReducer from "./editdataReducer";
import editpersonalReducer from "./editpersonalReducer";
import getblogReducer from "./getblogReducer";
import getcategoryreducer from "./getcategoryreducer";
import getorderReducer from "./getorderReducer";
import getproductReducer from "./getproductReducer";
import getsubcategoryReducer from "./getsubcategoryReducer";
import loginReducer from "./loginReducer";
import orderReducer from "./orderReducer";
import paymentReducer from "./paymentReducer";
import productbyidReducer from "./productbyidReducer";
import profileReducer from "./profileReducer";
import registerReducer from "./registerReducer";
import removeitemReducer from "./romeveitemReducer";
import searchreducer from "./searchreducer";
import subReducer from "./subReducer";
import makechartreducer from "../admin/reducers/makechaerReducer";
import getuserReducer from "../admin/reducers/getuserReducer";
import productinfoReducer from "../admin/reducers/productinfoReducer";
import getusReducer from "../admin/reducers/getusReducer";
import userorderReducer from "../admin/reducers/userorderReducer";
import searchuserReducer from "../admin/reducers/searchuserReducer";
import userbyidReducer from "../admin/reducers/userbyidReducer";
import searchprodReducer from "../admin/reducers/searchprodReducer";
import orderbydateReducer from "../admin/reducers/orderbydateReducer";
import getsliderReducer from "../admin/reducers/getsliderReducer";
import newproductReducer from "../admin/reducers/newproductReducer";
import getemailReducer from "../admin/reducers/getemailReducer";
import getshipReducer from "../admin/reducers/getshipReducer";
import getcouponReducer from "../admin/reducers/getcouponReducer";
import reeportsReducer from "../admin/reducers/reeportsReducer";
import getpopReducer from "../admin/reducers/getpopRedcuer";
import adminlogReducer from "../admin/reducers/adminlogReducer";

const RootReducer = combineReducers({
  getcategory: getcategoryreducer,
  getsubcategory: getsubcategoryReducer,
  getproducts: getproductReducer,
  Pbyid: productbyidReducer,
  log: loginReducer,
  cart: addtocartReducer,
  cartbyid: cartbyidReducrer,
  removecart: removeitemReducer,
  rig: registerReducer,
  getB: getblogReducer,
  blogbyid: blogbyidReducer,
  Comment: addcommentReducer,
  editperson: editpersonalReducer,
  editdata: editdataReducer,
  Corder: orderReducer,
  orders: getorderReducer,
  searchit: searchreducer,
  subss: subReducer,
  proff: profileReducer,
  paye: paymentReducer,
  //admin
  makechart: makechartreducer,
  getU: getuserReducer,
  getP: productinfoReducer,
  getUser: getusReducer,
  userord: userorderReducer,
  sear: searchuserReducer,
  userid: userbyidReducer,
  searchP: searchprodReducer,
  ordbyD: orderbydateReducer,
  getS: getsliderReducer,
  getnewP: newproductReducer,
  getE: getemailReducer,
  getSh: getshipReducer,
  getCop: getcouponReducer,
  getRep: reeportsReducer,
  getpo: getpopReducer,
  addmiin: adminlogReducer,
});

export default RootReducer;
