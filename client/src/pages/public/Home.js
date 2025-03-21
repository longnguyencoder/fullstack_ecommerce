import React from "react";
import {
    Banner,
    Sidebar,
    BestSeller,
    DeadDaily,
    FeatureProducts,
    CustomSlider
} from '../../components'
import { useSelector } from "react-redux";
import icons from "../../ultils/icons";
import withBaseCompoment from "hocs/withBaseCompoment";
import { createSearchParams } from "react-router-dom";

const { MdArrowForwardIos } = icons
const Home = ({ navigate }) => {
    const { newProducts } = useSelector((state) => state.products)
    const { categories } = useSelector((state) => state.app)
    const { isLoggedIn, current } = useSelector(state => state.user)

    // console.log({ isLoggedIn, current })
    return (
        <>
            <div className='w-main flex mt-6'>
                <div className='flex flex-col gap-5 w-[25%] flex-auto'>
                    <Sidebar />
                    <DeadDaily />
                </div>

                <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto'>
                    <Banner />
                    <BestSeller />
                </div>
            </div>
            <div className="my-8 w-main">
                <FeatureProducts />
            </div>
            <div className="my-8 w-main">
                <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">new arrivals</h3>
                <div className="mt-4 mx-[-10px]">
                    <CustomSlider
                        products={newProducts}
                    />
                </div>
            </div>
            <div className="my-8 w-main">
                <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">hot collections</h3>
                <div className="flex flex-wrap gap-4 mt-4 ">
                    {categories?.filter(el => el.brand.length > 0).map((el) => (
                        <div
                            key={el.id}
                            className="w-[396px]"
                        >
                            <div className="border flex p-4 gap-4 min-h-[200px]">
                                <img
                                    src={el?.image}
                                    alt=""
                                    className="flex-1 h-[130px] w-full object-contain"
                                />
                                <div className="flex-1 text-gray-700">
                                    <h4 className="font-semibold uppercase">{el.title}</h4>
                                    <ul
                                        className="text-sm">
                                        {el?.brand?.map((item) => (
                                            <span
                                                onClick={() => navigate({
                                                    pathname: `/${el.title}`,
                                                    search: createSearchParams({ brand: item }).toString(),
                                                })}
                                                key={item}
                                                className="cursor-pointer hover:underline hover:text-main flex gap-1 items-center text-gray-500">
                                                <MdArrowForwardIos size={14} />
                                                <li >{item}</li>
                                            </span>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-8 w-main">
                <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">blog posts</h3>
            </div>
        </>

    )
}
export default withBaseCompoment(Home)