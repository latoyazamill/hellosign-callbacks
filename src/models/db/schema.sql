DROP TABLE IF EXISTS signers CASCADE;

CREATE TABLE signers (
  id SERIAL PRIMARY KEY,
  signature_request_id VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  creation_date DATE DEFAULT current_date
);
