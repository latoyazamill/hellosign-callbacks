const db = require('./db');

const nonEmbeddedInfo = signer => {
  return db.query(`
    INSERT INTO
      users (signature_request_id, email)
    VALUES
      ($1::text, $2::text)
  `,
  [signer.signature_request_id, signer.email])
  .catch( error => {
    console.error({ message: 'Error occurred while executing signers.nonEmbeddedInfo',
    arguments: arguments });
    throw error;
  });
};

module.exports = nonEmbeddedInfo;
