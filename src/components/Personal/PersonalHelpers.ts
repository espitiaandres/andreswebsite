// import AbbeyRoad from "assets/images/personal/abbey_road.jpeg";
// import Ago from "assets/images/personal/ago.jpeg";
// import DowntownSf from "assets/images/personal/dt_sf.jpeg";
// import EiffelTower from "assets/images/personal/eiffeL_tower.jpeg";
// import GoldenGateBridge from "assets/images/personal/golden_gate_bridge.jpeg";
// import Ion from "assets/images/personal/ion.jpeg";
// import Molinos from "assets/images/personal/molinos.jpeg";
// import Porto from "assets/images/personal/porto.jpeg";
// import SfAfternoon from "assets/images/personal/sf_afternoon.jpeg";
// import SfBoardwalk from "assets/images/personal/sf_boardwalk.jpeg";

import AbbeyRoad from "assets/images/personal/webp/abbey_road.webp";
import Ago from "assets/images/personal/webp/ago.webp";
import DowntownSf from "assets/images/personal/webp/dt_sf.webp";
import EiffelTower from "assets/images/personal/webp/eiffeL_tower.webp";
import GoldenGateBridge from "assets/images/personal/webp/golden_gate_bridge.webp";
import Ion from "assets/images/personal/webp/ion.webp";
import Molinos from "assets/images/personal/webp/molinos.webp";
import Porto from "assets/images/personal/webp/porto.webp";
import SfAfternoon from "assets/images/personal/webp/sf_afternoon.webp";
import SfBoardwalk from "assets/images/personal/webp/sf_boardwalk.webp";

interface personalItem {
	header: string;
	description: string;
	image?: string;
}

export const personalItems: readonly personalItem[] = [
	{
		header: "Golden Gate Bridge",
		description: "San Francisco, USA",
		image: GoldenGateBridge,
	},
	{
		header: "Golden Hour",
		description: "Waterloo, Canada",
		image: Ion,
	},
	{
		header: "Eiffel Tower",
		description: "Paris, France",
		image: EiffelTower,
	},
	{
		header: "Abbey Road Studios",
		description: "London, UK",
		image: AbbeyRoad,
	},
	{
		header: "AGO",
		description: "Toronto, Canada",
		image: Ago,
	},
	{
		header: "San Francisco Boardwalk",
		description: "San Francisco, USA",
		image: SfBoardwalk,
	},
	{
		header: "Downtown San Francisco",
		description: "San Francisco, USA",
		image: DowntownSf,
	},
	{
		header: "Molinos de Viento",
		description: "Castilla La Mancha, Spain",
		image: Molinos,
	},
	{
		header: "Luis I Bridge",
		description: "Porto, Portugal",
		image: Porto,
	},
	{
		header: "A San Francisco Afternoon",
		description: "San Francisco, USA",
		image: SfAfternoon,
	},
];
