BEGIN;

    DROP TABLE IF EXISTS quotes
    CASCADE;

CREATE TABLE quotes
(
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    quote VARCHAR (8000) NOT NULL,
    author VARCHAR (200) NOT NULL,
    keyword VARCHAR (100)
);

INSERT INTO quotes
    (category, quote, author, keyword)
VALUES
    ('movies', 'I am going to kill bill', 'Uma Thurman', 'revenge'),
    ('meetups', 'Have you signed-up for codebar?', 'Georgia', 'codebar'),
    ('food', 'I am starving', 'Reuben', 'hungry'),
    ('coding', 'Have you committed your changes?', 'Jan', 'git'),
    ('random', 'Shall we go to the park and do some hoola-hooping?', 'Gigi', 'hoola');
COMMIT;
