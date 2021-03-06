
CREATE TABLE providers (
    rut INT NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    account BIGINT,
    bank VARCHAR(32),
    email VARCHAR(32),
    phone INT,

    CONSTRAINT providers_pk PRIMARY KEY (rut)
);

CREATE TABLE movements (
    id SERIAL NOT NULL PRIMARY KEY,
    bank CHAR(2) NOT NULL,
    "date" DATE NOT NULL,
    amount INTEGER NOT NULL,
    document_number BIGINT,
    description VARCHAR(128)
);

CREATE TABLE payrolls (
    id SERIAL NOT NULL PRIMARY KEY,
    "date" DATE NOT NULL,
    movement_id INTEGER REFERENCES movements(id)
);

CREATE TABLE payroll_details (
    id SERIAL NOT NULL PRIMARY KEY,
    payroll_id INTEGER REFERENCES payrolls(id),  
    rut INT NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "date" DATE NOT NULL,
    amount INTEGER NOT NULL,
    account VARCHAR(64) NOT NULL,
    bank VARCHAR(64) NOT NULL,
    "status" VARCHAR(64) NOT NULL,
    refund_date DATE
);
