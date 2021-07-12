import React from "react"
import Loading from "./Loading"

interface IProps{
    btnName : string;
    btnOnClick : () => void;
    loading? : boolean
}

const Button = ({btnName,btnOnClick,loading=false}:IProps) => {
    return (
        <>
            <button onClick={btnOnClick}>{btnName}</button>
            <Loading loading={loading}/>
        </>
    )
}
export default Button

// const contextValue = useContext(LoadingContext);

// export function withContext (Component) {
//     return function(props:any){
//         return <LoadingContext.Consumer>
//         {Loading => <Component {...props} loading={contextValue.loading} />}
//         {({ showLoading, hideLoading, loading }) =>
//               <Loading {...{ loading}} />
//     }
//         </LoadingContext.Consumer>
//     }
// }