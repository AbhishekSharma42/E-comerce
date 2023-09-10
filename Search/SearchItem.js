import React, { useEffect, useState } from 'react'

function SearchItem({ SearchToggle }) {

    const Dev_url = "http://localhost:1337"
    // const [inputText, setInputText] = useState("");
    const [SearchData, setSearchData] = useState([]);

    // const handleChange = (e) => {
    //     setInputText(e.target.value);
    // };

    const SearcResult = async () => {
        try {
            // let res = await fetch(`http://localhost:1337/api/products?populate=*&[filters][Title][$contains]=${inputText}`);
            let res = await fetch(`http://localhost:1337/api/products?populate=*&[filters][Title][$contains]=BT`);
            const resdata = res.json()
            setSearchData(await resdata)
            console.log(await resdata);

            // const getdata = await res?.json()
            // if (!inputText.length) {
            //     setSearchData(null);
            // }
            // else {
            //     setSearchData(await getdata);
            //     console.log(SearchData);
            // }
        }

        catch (error) {
            return;
        }
    }

    useEffect(() => {
        SearcResult();
    }, []);

    return (
        <div>
            <main className="fixed sh z-40 [transition:width height 2s;] bg-white w-[100%] h-[100vh]">
                {/* Search Box */}
                <div className="Search-item shadow-sm p-1 flex space-x-2 items-center justify-center">
                    <input
                        className='w-[80%] md:w-2/4 text-center text-lg font-bold border-spacing-0'
                        type="text"
                        autoFocus
                        placeholder='Search Product'
                    // onChange={handleChange}
                    // value={inputText}
                    />
                    <button
                        className='hover:bg-purple-600 text-purple-500 hover:text-white font-bold p-1 text-2xl'
                        onClick={SearchToggle} > X </button>
                </div>

                {/* Searched items */}
                <div className="container overflow-scroll h-[80vh] md:h-[90vh] ">
                    <div className='flex flex-col items-center'>

                        {SearchData?.data?.map((item) => {

                            <div key={item.id} className="border-2 gap-3 flex h-14 space-x-1 hover:bg-slate-100 m-1 w-[95%] sm:w-[80%] cursor-pointer md:w-[75%] ">
                                <div className="flex justify-center w-1/4 items-center h-[100%] sm:w-[10%]  md:w-[5%] " >
                                    <img
                                        className='h-[100%] w-[100%]'
                                        src=""
                                        alt="" />
                                </div>
                                <div className="info product-container w-3/4 text-black ">
                                    <div className="product-details block overflow-ellipsis whitespace-nowrap overflow-hidden ">
                                        {item?.attributes?.title}
                                    </div>
                                    <div
                                        className="product-info product-details overflow-ellipsis whitespace-nowrap overflow-hidden text-gray-400">
                                        {item?.attributes?.desc}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SearchItem;
