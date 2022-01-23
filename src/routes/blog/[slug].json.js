// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get({ params }) { 
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const allPosts = import.meta.glob('../../blog/*.{md,svx}');  
  let match;
	for (const [path, resolver] of Object.entries(allPosts)) {
		console.log("JSON Path: ", path)
		if (path.includes(params.slug)) {
			match = [path, resolver];
			break;
		}
	}

	if (!match) {
		return {
			status: 404
		};
	}

	const post = await match[1]();  
	return {  
		body: JSON.stringify({
      metaData: post.metadata,
      content: post.default.render()
    })
	};
}