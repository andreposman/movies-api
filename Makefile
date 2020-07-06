include .env

.PHONY: u

u:
	docker-compose up -d

.PHONY: d

d:
	docker-compose down

.PHONY: l

l:
	docker-compose logs -f

# rebuild and up
.PHONY: r

r:
	docker-compose down && docker-compose up -d --build