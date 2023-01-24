import { createStore, persist } from 'easy-peasy'
import AuthModel from './model/auth-model';
import DataModel from './model/data-model';

const store = createStore({
    auth: persist(AuthModel),
    data: persist(DataModel,)
})
export default store