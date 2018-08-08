CREATE TABLE cookies(
    cookieid serial unique primary key,
    name character varying(20) not null,
    image character varying(200) not null
);

ALTER TABLE cookies
    OWNER TO schenker;

alter role schenker connection limit -1;

insert into cookies(name,image)
values(1,'vanilla stars','vanilla.jpg');
insert into cookies(cookieid,name,image)
values(2,'strawberry stars','strawberry.jpg');
