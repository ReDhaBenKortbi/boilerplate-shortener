import dns from "dns"
export function validateURL(req, res, next) {
    try {
        const url = new URL(req.body.url);
        dns.lookup(url.hostname, (err) => {
            if(err) {
                return res.json({error: "invalid url"})
            }
            next();
        })
    } catch (e) {
        return res.json({error: "invalid url"})
    }
    
}