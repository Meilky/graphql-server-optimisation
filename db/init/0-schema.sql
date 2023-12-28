-- Who
CREATE TABLE `Characters` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,

	PRIMARY KEY (`id`)
);

-- What
CREATE TABLE `Events` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`description` VARCHAR(255) NOT NULL,

	PRIMARY KEY (`id`)
)
