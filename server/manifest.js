const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","old-favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-2680239d.js","imports":["_app/immutable/start-2680239d.js","_app/immutable/chunks/index-6c33eb69.js","_app/immutable/chunks/singletons-08e7a750.js","_app/immutable/chunks/parse-f0c618df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-08eb73cd.js'),
			() => import('./chunks/1-31eb2623.js'),
			() => import('./chunks/4-afb51547.js'),
			() => import('./chunks/6-54fdb9c0.js'),
			() => import('./chunks/7-6fc65d1e.js')
		],
		routes: [
			{
				id: "/colegio",
				pattern: /^\/colegio\/?$/,
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
