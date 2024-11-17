const API_BASE_URL = "https://api.mangadex.org";


const API_ENDPOINT_MANGA = () => {
    return `${API_BASE_URL}/manga`;
}

const API_ENDPOINT_MANGA_BY_ID = ({id}) => {
    return `${API_BASE_URL}/manga/${id}`;
}

const API_ENDPOINT_AGGREGATE = ({id}) => {
    return `${API_BASE_URL}/manga/${id}/aggregate`;
}


export default {
    API_ENDPOINT_MANGA,
    API_ENDPOINT_MANGA_BY_ID,
    API_ENDPOINT_AGGREGATE
}