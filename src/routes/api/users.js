/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import keys from '../../../config/keys';

import validateRegisterInput from '../../validation/register';
import validateLoginInput from '../../validation/login';

import User from '../../models/User';

export default function (router) {
  router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          return res.status(400).json({ email: 'Email already exists' });
        }
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(_user => res.json(_user))
              .catch(_err => console.log(_err));
          });
        });
      });
  });

  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email } = req.body;
    const { password } = req.body;

    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ email: 'Email not found!' });
        }
        bcrypt.compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                isNewUser: user.isNewUser,
                smokingData: user.smokingData,
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                {
                  expiresIn: 31556926,
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`,
                  });
                },
              );
            } else {
              return res.status(400).json({ password: 'Password incorrect' });
            }
          });
      });
  });

  router.post('/update', (req, res) => {
    const updUser = { isNewUser: req.body.isNewUser, smokingData: req.body.smokingData };
    console.log(updUser);
    User.findByIdAndUpdate(req.body.id, updUser, { useFindAndModify: false })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ email: 'Failed updating user' });
        }
        return res.json({ success: true });
      });
  });

  return router;
}
