const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    secret: '4ZERP4QUQQDMB7ON',
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
