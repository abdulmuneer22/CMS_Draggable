import axios from 'axios'

export const UpdateBG = (color) => {
    console.log("Called the update bg action ")
    return{
        type : 'UPDATE_BG',
        payload : color
    }
}


export const GetHomeStyle = () => {
    const HomeStyleEndPoint = "http://192.168.1.3:8080/home_style"
    return dispatch => {
        let HomeStyle = axios.get(HomeStyleEndPoint)
        .then((response)=>{
            // console.log(response.data[0])
            dispatch({
                type : 'HOME_STYLE_RECEIVED',
                payload : response.data[0]
            })
        })
        .catch((error)=>{
            dispatch({
                type : 'HOME_STYLE_FAILED',
                payload : false
            })
        })
    }
}


export const SetHomeStyle = (color) => {
    const endpoint  = "http://192.168.1.3:8080/home_style"
    // let style = {"homebgColor" : "#EE5E1A"}
    return dispatch => {
        let HomeStyle = axios.post(endpoint,
            {
                'Content-type' : 'application/json',
                homebgColor : color
            }
            )
        .then((response)=>{
            console.log(response)
            dispatch({
                type : 'UPDATED_HOME_BG',
                payload : color
            })
        })
    }
}