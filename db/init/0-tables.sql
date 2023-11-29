CREATE TABLE `PersonInfos` (
	`id` INT NOT NULL,
	`middle_name` VARCHAR(50) DEFAULT NULL,
	`date_of_birth` DATE DEFAULT NULL,

	PRIMARY KEY (`id`)
);

CREATE TABLE `Persons` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,

	`infos_id` INT DEFAULT NULL,

	PRIMARY KEY (`id`),

	FOREIGN KEY (`infos_id`) REFERENCES PersonInfos(`id`)
);

CREATE TABLE `RelationshipTypes` (
	`name` VARCHAR(20) NOT NULL,

	PRIMARY KEY (`name`)
);

CREATE TABLE `Relationships` (
	`person_a_id` INT NOT NULL,
	`person_b_id` INT NOT NULL,

	`type` VARCHAR(50) NOT NULL DEFAULT "Unknow",

	`description` VARCHAR(255) DEFAULT NULL,

	PRIMARY KEY (`person_a_id`, `person_b_id`),

	FOREIGN KEY (`type`) REFERENCES RelationshipTypes(`name`),
	FOREIGN KEY (`person_a_id`) REFERENCES Persons(`id`),
	FOREIGN KEY (`person_b_id`) REFERENCES Persons(`id`)
);

CREATE TABLE `Events` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`date` DATE NOT NULL DEFAULT CURRENT_DATE,
	`description` VARCHAR(255) NOT NULL,

	PRIMARY KEY (`id`)
);

CREATE TABLE `Notes` (
	`id` INT NOT NULL AUTO_INCREMENT,

	`note` VARCHAR(255) NOT NULL,
	`event_id` INT NOT NULL,

	PRIMARY KEY (`id`),

	FOREIGN KEY (`event_id`) REFERENCES Events(`id`)
);

CREATE TABLE `Presences` (
	`person_id` INT NOT NULL,
	`event_id` INT NOT NULL,

	PRIMARY KEY (`person_id`, `event_id`),

	FOREIGN KEY (`person_id`) REFERENCES Persons(`id`),
	FOREIGN KEY (`event_id`) REFERENCES Events(`id`)
);
