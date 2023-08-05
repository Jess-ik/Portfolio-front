export default async function getOneProject(slug: string) {
	const res = await fetch(`http://127.0.0.1:1337/api/projects/${slug}`, { cache: "no-store" });
	
    if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
