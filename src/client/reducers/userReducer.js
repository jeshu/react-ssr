import { FETCH_USERS } from "../actions";
export default (state = [], { type, payload }) => {
    switch (type) {
    case FETCH_USERS:
        return payload.data

    default:
        return state
    }
}
