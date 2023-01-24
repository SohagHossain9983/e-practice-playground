

import { action} from "easy-peasy";

const DataModel = {
    data: {},
    setData: action((state, payload) => {
        state.data[payload.key] = payload.value;
    }),
    clearData: action((state) => {
        state.data = {};
    }),
};
export default DataModel

