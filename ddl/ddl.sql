drop table member_role;
drop table member;
drop table role;

create table member
(
	member_id serial primary key,
	member_name text not null,
	plain_text_password text not null
);

create table role
(
	role_id serial primary key,
	role_name text not null,
	description text not null default ''
);


create table member_role
(
	member_id int not null,
	role_id int not null,
	constraint uq_member_role unique(member_id, role_id),
	constraint fk_member_role__member_id__member foreign key(member_id) references member(member_id),
	constraint fk_member_role__role_id__role foreign key(role_id) references role(role_id)
);


insert into member(member_name, plain_text_password) values
('ali', 'baba'),
('alley','hoop');


insert into role(role_name, description) values
('admin','Administrator'),
('public-user', 'Public User');

insert into member_role(member_id, role_id) values
(1, 1),
(2, 2);
