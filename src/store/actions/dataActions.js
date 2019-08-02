export const createData = (data) => {
    return (dispatch, getState) => {
        //async
        console.log(getState(data), "get");
        console.log(data, 'data');
        fetch("http://158.140.190.214:4242/api/location/add", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": data.data.name,
                "building": data.data.building,
                "city": data.data.city,
                "street": data.data.street,
                "coordinate": {
                    "long": data.data.longitude,
                    "lat": data.data.latitude
                }
            })
        })
            .then(() => {
                dispatch({ type: 'CREATE_DATA', data })
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_DATA_ERROR', err })
            });
    }
}

export const editData = (data) => {
    return (dispatch, getState) => {
        //async
        console.log(getState(data), "get");
        console.log(data, 'data');
        fetch("http://158.140.190.214:4242/api/location/edit/" + data.data.id, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": data.data.name,
                "building": data.data.building,
                "city": data.data.city,
                "street": data.data.street,
                "coordinate": {
                    "long": data.data.longitude,
                    "lat": data.data.latitude
                }
            })
        })
            .then(() => {
                dispatch({ type: 'EDIT_DATA', data })
            })
            .catch((err) => {
                dispatch({ type: 'EDIT_DATA_ERROR', err })
            });
    }
}

export const getData = () => {
    return (dispatch, getState) => {
        //async

        fetch("http://158.140.190.214:4242/api/location/detail")
            .then(response => response.json())
            .then((data) => {
                dispatch({ type: 'GET_DATA', data })
            })
            .catch((err) => {
                dispatch({ type: 'GET_DATA_ERROR', err })
            });
    }
}




// export function getAllPosts() {
//     return dispatch => {
//         return axios
//             .get("https://www.techinasia.com/wp-json/techinasia/2.0/posts")
//             .then(res => {
//                 //console.log(res, "props");
//                 dispatch(getDatas(res));
//             });
//     };
// }

// export function getDatas(res) {
//     return {
//         type: "GET_DATAS",
//         datas: res
//     };
// }


