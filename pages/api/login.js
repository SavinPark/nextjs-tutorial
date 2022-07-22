export default (req, res) => {
    if (req.method === "POST") {
        // res.setHeader( 쿠키명 , 값(3600초));
        res.setHeader("Set-Cookie", "a_name=Savin;Max-Age=3600;HttpOnly,Secure");
        res.statusCode = 200;
        res.json({ message: "ok"});
    }
}