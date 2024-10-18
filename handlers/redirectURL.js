import { data } from "./shortURL.js";
export function redirectURL(req, res) {
    let shortURL = req.params.short_url;
    let record = data.find((item) => item.short_url == shortURL)
    if(record) {
        return res.redirect(record.original_url)
    }else {
        return res.json({error: "invalid url"})
    }
}