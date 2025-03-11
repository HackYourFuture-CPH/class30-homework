CREATE DATABASE hyf_node_week3_warmup;

CREATE TABLE `contacts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

insert into contacts (id, first_name, last_name, email, phone) values (1, 'Selig', 'Matussov', 'smatussov0@pinterest.com', '176-630-4577');
insert into contacts (id, first_name, last_name, email, phone) values (2, 'Kenny', 'Yerrington', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (3, 'Emilie', 'Gaitskell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (4, 'Jordon', 'Tokell', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (5, 'Sallyann', 'Persse', 'spersse4@webnode.com', '219-157-2368');
insert into contacts (id, first_name, last_name, email, phone) values (6, 'Berri', 'Bulter', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (7, 'Lanni', 'Ivanilov', 'livanilov6@fda.gov', null);
insert into contacts (id, first_name, last_name, email, phone) values (8, 'Dagny', 'Milnthorpe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (9, 'Annadiane', 'Bansal', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (10, 'Tawsha', 'Hackley', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (11, 'Rubetta', 'Ozelton', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (12, 'Charles', 'Boughey', 'cbougheyb@senate.gov', '605-358-5664');
insert into contacts (id, first_name, last_name, email, phone) values (13, 'Shantee', 'Robbe', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (14, 'Gleda', 'Peat', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (15, 'Arlinda', 'Ethersey', 'aetherseye@biglobe.ne.jp', '916-139-1300');
insert into contacts (id, first_name, last_name, email, phone) values (16, 'Armando', 'Meachem', 'ameachemf@oaic.gov.au', '631-442-5339');
insert into contacts (id, first_name, last_name, email, phone) values (17, 'Codi', 'Redhouse', null, '401-953-6897');
insert into contacts (id, first_name, last_name, email, phone) values (18, 'Ann', 'Buncombe', 'abuncombeh@ow.ly', '210-338-0748');
insert into contacts (id, first_name, last_name, email, phone) values (19, 'Louis', 'Matzkaitis', 'lmatzkaitisi@ebay.com', '583-996-6979');
insert into contacts (id, first_name, last_name, email, phone) values (20, 'Jessey', 'Pala', null, null);
insert into contacts (id, first_name, last_name, email, phone) values (21, 'Archy', 'Scipsey', 'ascipseyk@ask.com', '420-983-2426');
insert into contacts (id, first_name, last_name, email, phone) values (22, 'Benoit', 'Mould', 'bmouldl@bing.com', '271-217-9218');
insert into contacts (id, first_name, last_name, email, phone) values (23, 'Sherm', 'Girardey', 'sgirardeym@guardian.co.uk', '916-999-2957');
insert into contacts (id, first_name, last_name, email, phone) values (24, 'Raquel', 'Mudge', 'rmudgen@slate.com', '789-830-7473');
insert into contacts (id, first_name, last_name, email, phone) values (25, 'Tabor', 'Reavey', null, null);
