import { Application, Middleware, Request as OakRequest, Router } from "oak";
import { GraphQLHTTP } from "gql";
import { gql } from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
	Query: {
		hello: () => `Hello World!`,
	},
};

const schema = makeExecutableSchema({ resolvers, typeDefs });

const app = new Application();

// Logger
app.use(async (ctx, next) => {
	await next();
	const rt = ctx.response.headers.get("X-Response-Time");
	console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

const handleGraphQL: Middleware = async (ctx) => {
	const req = new Request(ctx.request.url.toString(), {
		body: ctx.request.originalRequest.getBody().body,
		headers: ctx.request.headers,
		method: ctx.request.method,
	});

	const res = await GraphQLHTTP<OakRequest>({
		schema,
		graphiql: true,
		context: () => ({ request: ctx.request }),
	})(req);

	for (const [k, v] of res.headers.entries()) {
		ctx.response.headers.append(k, v);
	}

	ctx.response.status = res.status;
	ctx.response.body = res.body;
};

const graphqlRouter = new Router().all("/api/graphql", handleGraphQL);

app.use(graphqlRouter.routes(), graphqlRouter.allowedMethods());

await app.listen({ port: 3000 });
