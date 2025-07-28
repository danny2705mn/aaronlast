const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    secret: 'TSLKVDYN2R4GEU2B', // ← your new password
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
