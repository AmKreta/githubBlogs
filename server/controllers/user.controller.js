import user from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res, next) => {
    try {
        let result = await user.create(req.body);
        let { _doc } = { ...result };
        res.locals = _doc;
        next();
        //rest of operations will be handeled in create token middleware
    }
    catch (err) {
        next({ status: 401, stack: err.stack, message: err.message });
    }
}

export const getUserById = async (req, res, next) => {
    try {
        let result = await user.findOne({ _id: req.query._id }, { password: false });
        if (result.length === 0) {
            next({ status: 404, err: new Error('no data found for id:- ' + req.query._id) });
        }
        res.status(200).json({ sucess: true, payload: result });
    }
    catch (err) {
        next({ status: 400, err });
    }
}

export const updateUserById = async (req, res, next) => {
    try {
        //checking if req.body containes some vulnerable keys to update
        if (Object.keys(req.body).some(item => ['followers', 'following', 'blogs'].includes(item))) {
            next({ status: 403, err: new Error('updating followers, following, blogs is prohibited') });
        }
        else {
            let result = user.updateOne({ _id: req.query._id }, { ...req.body });
        }
    }
    catch (err) {
        next({ status: 400, err });
    }
}

export const deleteUserById = async (req, res, next) => {
    try {
        let result = user.findByIdAndDelete(req.query._id);
        res.status(200).json({ sucess: true, payload: result });
    }
    catch (err) {
        next({ status: 400, err })
    }
}

export const login = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        let result = await user.findOne({ userName });
        let match = await bcrypt.compare(password, result.password);
        if (match) {
            let { _doc } = { ...result };
            res.locals = _doc;
            //create token in next middleware createAccessToken
            next();
        }
        else {
            res.json({ sucess: failed, payload: 'password is incorrect' });
        }
    }
    catch (err) {
        next({ status: 400, stack: err.stack, message: err.message })
    }
}