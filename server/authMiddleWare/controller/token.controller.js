import jsonWebToken from 'jsonwebtoken';
import crypto from 'crypto';
import token from '../model/token.model.js';

export const createAccessToken = async (req, res, next) => {
    try {

        //creating secret key
        let access_token_secret = crypto.randomBytes(64).toString('hex');
        let refresh_token_secret = crypto.randomBytes(64).toString('hex');
        //creating tokens
        let accessToken = jsonWebToken.sign(res.locals, access_token_secret, { expiresIn: process.env.JWT_VALIDITY_DURATION });
        let refreshToken = jsonWebToken.sign(res.locals, refresh_token_secret, { expiresIn: process.env.JWT_VALIDITY_DURATION });
        //adding token in database
        await token.findOneAndUpdate({ user_id: res.locals._id }, {
            access_token_secret,
            refresh_token_secret,
            recently_issued_acess_token: accessToken,
            user_id: res.locals._id
        }, { upsert: true });
        res.status(200).json({ sucess: true, payload: { ...res.locals, tokens: { accessToken, refreshToken } } });
    }
    catch (err) {
        next({ status: 400, err: err.stack });
    }
}

export const verifyAccessToken = async (req, res, next) => {

    next();
}

export const deleteAccessToken = async (req, res, next) => {

    next()
}
