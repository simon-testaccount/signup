
import { isBrowser } from './utility'
export const affiliateTokenURL = () => {
    //if (!window) return;isBrowser
    if (!isBrowser()) return;
        const query_string = window.location.search
        const url_params = new URLSearchParams(query_string)
        const aff_token = url_params.get('t')
        console.log("aff_token from url inside affiliateTokenURL()==>", aff_token);
       return aff_token
}
