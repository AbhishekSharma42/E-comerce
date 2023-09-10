import { createContext, useState } from "react";

export const Context = createContext();

const GetDataStore = (data) => {
    localStorage.setItem('data', data);
}

const AppContext = (props) => {
    const [categories, setcategories] = useState();
    const [products, setproduct] = useState();
    const [getReleteProducts, setReletedProducts] = useState()
    const [GetDeta, setDeta] = useState();
    const [SearchData, setSearchData] = useState();

    GetDataStore(GetDeta);

    return (<Context.Provider value={{ categories, setcategories, products, setproduct, getReleteProducts, setReletedProducts, GetDeta, setDeta ,SearchData, setSearchData}}>

        {props.children}

    </Context.Provider>
    );
}

export default AppContext;