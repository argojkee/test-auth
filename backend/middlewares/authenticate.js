const admin = require('../firebase/admin')
const {HttpError} = require('../helpers')


const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer" || !token) next(HttpError(401));

    try {
        const {name,  email, uid} = await admin.auth().verifyIdToken(token);

        req.user = {
            fullName: name,
            email,
            id: uid
        }
        next()
    } catch (error) {
        next(HttpError(401));
    }

}

module.exports = authenticate