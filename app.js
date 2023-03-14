// What should you drink is an app where you press a button and a random cocktail recipe will generate and display its ingredients, garnishes, and glassware

let drinks = [
	{
		name: 'Vodka Tonic',
		ingredients: ['1 part Vodka', '3 parts Tonic water'],
		garnish: 'Lime or lemon',
		glassware: 'Highball glass',
	},

	{
		name: 'Gin & Tonic',
		ingredients: ['1 part Gin', '3 parts Tonic water'],
		garnish: 'Slice of Lime',
		glassware: 'Highball glass',
	},

	{
		name: 'Whiskey Sour',
		ingredients: [
			'3 parts Bourbon whiskey',
			'1 dash egg white',
			'2 parts fresh lemon juice',
			'1 part Gomme syrup',
		],
		garnish: 'Lemon rind, Maraschino cherry, orange slice, sugared glass',
		glassware: 'Cobbler, Old fashioned glass',
	},

	{
		name: 'Margarita',
		ingredients: ['1 part lime juice', '1 part triple sec', '2 parts Tequila'],
		garnish: 'Lime slice, salt on the rim',
		glassware: 'Margarita glass',
	},

	{
		name: 'Paloma',
		ingredients: '1 part Tequila, 3 parts grapefruit soda',
		garnish: 'Lime wedge',
		glassware: 'Highball glass',
	},
];

// Random number function that will generate a number to index a drink

function getRandomNumber() {
	min = Math.ceil(0);
	max = Math.floor(drinks.length);
	return Math.floor(Math.random() * (max - min) + min);
}

function getRandomDrink() {
	return getRandomNumber();
}

console.log(getRandomDrink());
