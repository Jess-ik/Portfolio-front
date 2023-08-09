

export default async function getProjects() {


	const data = await fetch(`http://127.0.0.1:1337/api/projects?populate=*`, { cache: "no-store" });
	const projects = await data.json();

	if (!data.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return projects;
}