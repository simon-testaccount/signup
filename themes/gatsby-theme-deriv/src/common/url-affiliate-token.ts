
import { isBrowser } from './utility'
export const affiliateTokenURL = () => {
    if (!isBrowser()) return;
    const urlObject = new URL(window.location.href);
    const params = new URLSearchParams(urlObject.search);
    const token = params.get("t");
    const url_cookies_seperator = '&'
    if (params.has("referrer") && token != null) 
        return  extractUpToSecondOccurrence(token,url_cookies_seperator )
 
}

const extractUpToSecondOccurrence = (str:string , char:string): string => {
    const firstIndex = str.indexOf(char);
    if (firstIndex === -1) {
        return str; 
    }
    const secondIndex = str.indexOf(char, firstIndex + 1);
    if (secondIndex === -1) {
        return str.substring(0, firstIndex + 1); 
    }
    return str.substring(0, secondIndex);
}
