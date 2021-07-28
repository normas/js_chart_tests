	
import * as d3 from "https://cdn.skypack.dev/d3@7";


export function test_chart1(ctx, length, x, y, color) {
	console.log('click!');

	const div = d3.selectAll("div");

	values = Array(5) [1, 3, 2, 6, 4];
	height = 200

	import {chart as chart1} with {values as data, height} from "@d3/histogram"
	chart1;

}