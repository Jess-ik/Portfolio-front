

export default function Filter() {


	return (
		<div className="row pt-32 justify-end filtering">
			<span data-filter="*" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
				All
			</span>
			<span data-filter="web" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
				Web Development
			</span>
			<span  data-filter="design" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
				Creative Design
			</span>
			<span data-filter="craft" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
				Craft
			</span>
		</div>
	);
}
