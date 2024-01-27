CREATE TABLE Contact(
    contact_id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    mobile_number varchar(10),
    PRIMARY KEY(contact_id)
);