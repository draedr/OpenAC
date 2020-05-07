// Asset Storage
interface Asset {}
interface ImageAsset implements Asset {}
interface AudioAsset implements Asset {}
interface ModelAsset implements Asset {}

// Complex Objects
interface Layer {
	width: number,
	height: number,
	items: []
}

interface Map {
	width: number,
	height: number,

	terrainLayer: Layer,
	zoneLayer: Layer, // Like rivers, waterfalls, beaches, etc.
	buildingLayer: Layer // Buildings & placeable furniture
	itemLayer: Layer, // Dropped items
	plantLayer: Layer, //Trees & Flowers
}

interface Item {
	name: String,
	description: String,
	name: String,
	description: String,
	value: number,
	stackable: boolean,
	stacked: number
}

interface PlantItem implements Item {}
interface FurnitureItem implements Item {}
interface EquippableItem implements Item {}
interface UsableItem implements Item {}
interface PointItem implements Item {}
