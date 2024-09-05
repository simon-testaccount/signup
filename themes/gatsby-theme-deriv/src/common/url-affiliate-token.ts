
export const affiliateTokenURL = () => {
    if (!window) return;
        const query_string = window.location.search
        const url_params = new URLSearchParams(query_string)
        const aff_token = url_params.get('t')
       // if (aff_token) {
        //    localStorage.setItem(referrer_token, aff_token)
       // }
       return aff_token
}
