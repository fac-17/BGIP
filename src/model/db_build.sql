BEGIN;

    DROP TABLE IF EXISTS quotes
    CASCADE;

CREATE TABLE quotes
(
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    quote VARCHAR (8000) NOT NULL,
    quotee VARCHAR (200) NOT NULL,
    keyword VARCHAR (100)
);

INSERT INTO quotes
    (category, quote, quotee, keyword)
VALUES
    ('Film', 'I am going to kill bill', 'Uma Thurman', 'revenge');

COMMIT;
