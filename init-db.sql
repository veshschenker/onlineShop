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
values('Ankle Length Socks','S,M,L,Xl','They are perfect to use with low cut shoes, loafers, boat shoes and Oxfords.','/images/lowCutSocksWomen.jpg','Female','$3','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Ankle Length Socks','S,M,L,Xl','They are perfect to use with low cut shoes, loafers, boat shoes, and Oxfords.','/images/lowCutSocksMen.jpg','Male','$3','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Quarter Length Socks','S,M,L,Xl','They give you good coverage and protect the back of your feet from blisters and shoe bites.women generally use them as a protector of their feet.','/images/QuarterLengthSocksWomen.jpg','Female','$3.10','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values('Quarter Length Socks','S,M,L,Xl','They give you good coverage and protect the back of your feet from blisters and shoe bites. Men can wear them with suits or any other professional purposes.','/images/QuarterLengthSocksMen.jpg','Male','$3.10','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values(' Calf Length Socks','S,M,L,Xl','Calf length socks cover up your calf muscles and stays a little below from your knee. Usually, sports people and athletes wear these because of the protection they give','/images/CalfLengthSocksWomen.jpg','Female','$3.15','Out of Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values(' Calf Length Socks','S,M,L,Xl','Calf length socks cover up your calf muscles and stays a little below from your knee. Usually, sports people and athletes wear these because of the protection they give','/images/CalfLengthSocksMen.jpg','Male','$3.15','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values(' Football Socks','S,M,L,Xl','These socks are usually worn while playing football, because it creates a protected layer your legs. They are made to firmly hold your legs till calf length that you can play with all the comfort without any fear.','/images/footballSocks.jpg','Male','$3.15','On Stock');
insert into productstable(name,size,description,image,tags,price,availability)
values(' Cozy Wintery Socks','S,M,L,Xl','basically made with woolen to protect your feet in winters.','/images/cosyWinterSocks.jpg','Female','$4.16','On Stock');
