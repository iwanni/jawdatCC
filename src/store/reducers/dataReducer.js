const initState = {
    data: [

    ]
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_DATA":
            console.log('created data', action.data);
            return state;
        case "CREATE_DATA_ERROR":
            alert("Create data error", action.err);
            return state;
        case "EDIT_DATA":
            console.log('edit data', action.data);
            return state;
        case "EDIT_DATA_ERROR":
            alert("edit data error", action.err);
            return state;
        case "GET_DATA":
            console.log("get data", action.data)
            return {
                ...state,
                data: action.data
            };
        case "GET_DATA_ERROR":
            console.log(action.data, "action");
            alert("Get data error", action.err);
            return state;
        default:
            return state;
    }
}

export default dataReducer