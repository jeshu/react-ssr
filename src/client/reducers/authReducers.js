import { FETCH_CURRENT_USERS } from "../actions";

export default (state = null, { type, payload }) => {
    switch (type) {

    case FETCH_CURRENT_USERS:
        return payload.data || false;

    default:
        return state
    }
}
