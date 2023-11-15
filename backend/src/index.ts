import { Application } from "oak";

const app = new Application();

app.use((ctx) => {
	ctx.response.body = "Hello World!";
});

await app.listen({ port: 3000 });
