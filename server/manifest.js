const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-8e3d7c38.js","imports":["_app/immutable/start-8e3d7c38.js","_app/immutable/chunks/index-6c33eb69.js","_app/immutable/chunks/singletons-08e7a750.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-bcea7804.js'),
			() => import('./chunks/1-31eb2623.js'),
			() => import('./chunks/5-a22f2328.js')
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
