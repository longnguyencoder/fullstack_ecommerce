import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import {
  Login,
  Home,
  Public,
  FAQ,
  Services,
  DetailProduct,
  Blogs,
  Products,
  FinalRegister,
  ResetPassword,
  DetailCart,
  AboutUs
} from './pages/public'
import {
  AdminLayout,
  CreateProduct,
  Dashboard,
  ManageOrder,
  ManageUser,
  ManageProduct
} from './pages/admin'
import {
  MemberLayout,
  Personal,
  History,
  MyCart,
  Wishlist,
  Checkout
} from './pages/member'
import path from './ultils/path';
import { getCategories } from './store/app/asyncAction'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart, Model } from './components';
import { showCart } from 'store/app/appSlice';

function App() {
  const dispatch = useDispatch()
  const { isShowModel, modelChildren, isShowCart } = useSelector(state => state.app)
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <div className="font-main h-full relative">
      {isShowModel && <Model>{modelChildren}</Model>}
      {isShowCart &&
        <div
          onClick={() => dispatch(showCart())}
          className='absolute inset-0 bg-overlay z-50 flex justify-end'>
          <Cart />
        </div>}
      <Routes>
        <Route path={path.CHECKOUT} element={<Checkout />} />

        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route path={path.ABOUT_US} element={<AboutUs />} />
          <Route path={path.DETAIL_PRODUCT_CATEGORY_PID_TITLE} element={<DetailProduct />} />
          <Route path={path.FAQ} element={<FAQ />} />
          <Route path={path.OUR_SERVICE} element={<Services />} />
          <Route path={path.PRODUCTS_CATEGORY} element={<Products />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={path.ALL} element={<Home />} />
        </Route>

        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.CREATE_PRODUCTS} element={<CreateProduct />} />
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
          <Route path={path.MANAGE_PRODUCTS} element={<ManageProduct />} />
          <Route path={path.MANAGE_USER} element={<ManageUser />} />
        </Route>

        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />} />
          <Route path={path.HISTORY} element={<History />} />
          <Route path={path.MY_CART} element={<DetailCart />} />
          <Route path={path.WISHLIST} element={<Wishlist />} />
        </Route>

        <Route path={path.FINAL_REGISTER} element={<FinalRegister />} />

        <Route path={path.LOGIN} element={<Login />} />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
