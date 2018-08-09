CREATE TABLE productstable(
    productid serial unique primary key,
    name character varying(20) not null,
    size character varying(20) not null,
    description character varying(500) not null,
    image character varying(200) not null,
    tags character varying(20) not null,
    price character varying(200) not null,
    availability character varying(200) not null
);

ALTER TABLE productstable
    OWNER TO schenker;

alter role schenker connection limit -1;

insert into productstable(name,size,description,image,tags,price,availability)
values('Ankle Length Socks',"S,M,L,Xl",'They are perfect to use with low cut shoes, loafers, boat shoes and Oxfords.','/images/lowCutSocksFemale.png','Female','$3','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Ankle Length Socks',"S,M,L,Xl",'They are perfect to use with low cut shoes, loafers, boat shoes, and Oxfords.','/images/lowCutSocksMale.png','Male','$3','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Quarter Length Socks',"S,M,L,Xl",'They give you good coverage and protect the back of your feet from blisters and shoe bites.women generally use them as a protector of their feet.','/images/QuarterLengthSocksWomen.jpg','Female','$3.10','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Quarter Length Socks',"S,M,L,Xl",'They give you good coverage and protect the back of your feet from blisters and shoe bites. Men can wear them with suits or any other professional purposes.','/images/QuarterLengthSocksMen.jpg','Male','$3.10','On Stock');
