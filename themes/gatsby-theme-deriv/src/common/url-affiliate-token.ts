
import { isBrowser } from './utility'
export const affiliateTokenURL = () => {
    if (!isBrowser()) return;
    const urlObject = new URL(window.location.href);
    const params = new URLSearchParams(urlObject.search);
    const token = params.get("t");
    if (params.has("referrer") && token != null) 
        return token
}


