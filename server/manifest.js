const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","old-favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-60b99024.js","imports":["_app/immutable/start-60b99024.js","_app/immutable/chunks/index-38fd9b73.js","_app/immutable/chunks/singletons-f4283219.js","_app/immutable/chunks/index-c86a721f.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-001ce0e1.js'),
			() => import('./chunks/1-f3902c98.js'),
			() => import('./chunks/5-e455838c.js'),
			() => import('./chunks/6-ba445e9f.js'),
			() => import('./chunks/7-028b9d37.js')
		],
		routes: [
			{
				id: "/movie_info",
				pattern: /^\/movie_info\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
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
