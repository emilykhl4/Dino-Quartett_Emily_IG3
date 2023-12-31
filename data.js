const data = [
	{
		name: "Brachiosaurus",
		group: "Large Sauropods",
		group_letter: "A",
		card_number: 1,
		random_fact: "Tallest neck in dino history.",
		number_eggs: 12,
		territorial_range: 1500,
		iq: 3,
		years: 148,
		length: 25,
		height: 15,
		weight: 80000,
		number_skeletons: 10,
		number_teeth: 56,
		speed: 5,
		encephalization: 0.2,
		image: "dinobilder/a1_brachiosaurus.png",
	},
	{
		name: "Amargasaurus",
		group: "Large Sauropods",
		group_letter: "A",
		card_number: 2,
		random_fact: "Showcased a distinctive double-sail feature.",
		number_eggs: 8,
		territorial_range: 800,
		iq: 2,
		years: 135,
		length: 9,
		height: 4,
		weight: 2000,
		number_skeletons: 3,
		number_teeth: 24,
		speed: 3,
		encephalization: 0.1,
		image: "dinobilder/a2_amargasaurus.png",
	},
	{
		name: "Diplodocus",
		group: "Large Sauropods",
		group_letter: "A",
		card_number: 3,
		random_fact: "Possessed a tail capable of sonic cracks.",
		number_eggs: 10,
		territorial_range: 1000,
		iq: 2,
		years: 154,
		length: 27,
		height: 10,
		weight: 6000,
		number_skeletons: 8,
		number_teeth: 48,
		speed: 4,
		encephalization: 0.15,
		image: "dinobilder/a3_diplodocus.png",
	},
	{
		name: "Argentinosaurus",
		group: "Large Sauropods",
		group_letter: "A",
		card_number: 4,
		random_fact: "Weightier than multiple elephants combined.",
		number_eggs: 15,
		territorial_range: 2000,
		iq: 1,
		years: 96,
		length: 35,
		height: 18,
		weight: 90000,
		number_skeletons: 5,
		number_teeth: 60,
		speed: 2,
		encephalization: 0.05,
		image: "dinobilder/a4_Argentinosaurus.png",
	},

	{
		name: "Tyrannosaurus rex",
		group: "Big Predatory Theropods",
		group_letter: "B",
		card_number: 1,
		random_fact: "Armed with banana-sized teeth and a terrifying bite.",
		number_eggs: 10,
		territorial_range: 500,
		iq: 5,
		years: 68,
		length: 12,
		height: 4.5,
		weight: 9000,
		number_skeletons: 20,
		number_teeth: 60,
		speed: 25,
		encephalization: 0.3,
		image: "dinobilder/b1_TYRANNOSAURUSREX.png",
	},
	{
		name: "Baryonyx",
		group: "Big Predatory Theropods",
		group_letter: "B",
		card_number: 2,
		random_fact: "Specialized in a diet of fresh fish.",
		number_eggs: 8,
		territorial_range: 300,
		iq: 4,
		years: 125,
		length: 10,
		height: 3.5,
		weight: 2000,
		number_skeletons: 5,
		number_teeth: 32,
		speed: 20,
		encephalization: 0.25,
		image: "dinobilder/b2_baryonyx.png",
	},
	{
		name: "Allosaurus",
		group: "Big Predatory Theropods",
		group_letter: "B",
		card_number: 3,
		random_fact: "Stood as the star predator of the Jurassic era.",
		number_eggs: 12,
		territorial_range: 400,
		iq: 3,
		years: 155,
		length: 9,
		height: 3,
		weight: 1500,
		number_skeletons: 15,
		number_teeth: 40,
		speed: 30,
		encephalization: 0.2,
		image: "dinobilder/b3_allosaurus.png",
	},
	{
		name: "Spinosaurus",
		group: "Big Predatory Theropods",
		group_letter: "B",
		card_number: 4,
		random_fact: "Sported a sail-like structure and was an agile swimmer.",
		number_eggs: 15,
		territorial_range: 600,
		iq: 4,
		years: 95,
		length: 15,
		height: 6,
		weight: 7000,
		number_skeletons: 10,
		number_teeth: 48,
		speed: 22,
		encephalization: 0.25,
		image: "dinobilder/b4_spinosaurus.png",
	},

	{
		name: "Pteranodon",
		group: "Flyers",
		group_letter: "C",
		card_number: 1,
		random_fact: "Ruled the skies with an impressive wingspan.",
		number_eggs: 2,
		territorial_range: 150,
		iq: 2,
		years: 88,
		length: 7,
		height: 2,
		weight: 25,
		number_skeletons: 10,
		number_teeth: 0,
		speed: 70,
		encephalization: 0.1,
		image: "dinobilder/c1_pteranodon.png",
	},
	{
		name: "Quetzalcoatlus",
		group: "Flyers",
		group_letter: "C",
		card_number: 2,
		random_fact: "Earned the title of the largest flying reptile.",
		number_eggs: 3,
		territorial_range: 200,
		iq: 2,
		years: 66,
		length: 10,
		height: 3.5,
		weight: 75,
		number_skeletons: 5,
		number_teeth: 0,
		speed: 80,
		encephalization: 0.15,
		image: "dinobilder/c2_quetzalcoatlus.png",
	},
	{
		name: "Archaeopteryx",
		group: "Flyers",
		group_letter: "C",
		card_number: 3,
		random_fact: "Pioneered as one of the earliest-known birds.",
		number_eggs: 4,
		territorial_range: 30,
		iq: 3,
		years: 155,
		length: 0.5,
		height: 0.3,
		weight: 0.5,
		number_skeletons: 12,
		number_teeth: 12,
		speed: 10,
		encephalization: 0.05,
		image: "dinobilder/c3_archaeopteryx.png",
	},
	{
		name: "Dimorphodon",
		group: "Flyers",
		group_letter: "C",
		card_number: 4,
		random_fact: "Boasted double rows of dagger-like teeth.",
		number_eggs: 3,
		territorial_range: 40,
		iq: 2,
		years: 148,
		length: 1.5,
		height: 0.5,
		weight: 3,
		number_skeletons: 8,
		number_teeth: 20,
		speed: 30,
		encephalization: 0.08,
		image: "dinobilder/c4_DIMORPHODON.png",
	},
	{
		name: "Parasaurolophus",
		group: "Hadrosaurs",
		group_letter: "D",
		card_number: 1,
		random_fact: "Known for its head crest, possibly for communication.",
		number_eggs: 10,
		territorial_range: 500,
		iq: 3,
		years: 70,
		length: 10,
		height: 4,
		weight: 3000,
		number_skeletons: 15,
		number_teeth: 800,
		speed: 30,
		encephalization: 0.1,
		image: "dinobilder/d1_PARASAUROLOPHUS.png",
	},
	{
		name: "Corythosaurus",
		group: "Hadrosaurs",
		group_letter: "D",
		card_number: 2,
		random_fact: "A distinguished duck-billed dinosaur from Canada.",
		number_eggs: 8,
		territorial_range: 400,
		iq: 2,
		years: 75,
		length: 8,
		height: 3,
		weight: 2000,
		number_skeletons: 10,
		number_teeth: 600,
		speed: 25,
		encephalization: 0.09,
		image: "dinobilder/d2_Corythosaurus.png",
	},
	{
		name: "Edmontosaurus",
		group: "Hadrosaurs",
		group_letter: "D",
		card_number: 3,
		random_fact: "A herbivore with a vast array of grinding teeth.",
		number_eggs: 12,
		territorial_range: 600,
		iq: 3,
		years: 68,
		length: 12,
		height: 4.5,
		weight: 3500,
		number_skeletons: 12,
		number_teeth: 700,
		speed: 28,
		encephalization: 0.11,
		image: "dinobilder/d3_EDMONTOSAURUS.png",
	},
	{
		name: "Lambeosaurus",
		group: "Hadrosaurs",
		group_letter: "D",
		card_number: 4,
		random_fact: "Featuring a unique, hollow-headed appearance.",
		number_eggs: 9,
		territorial_range: 450,
		iq: 2,
		years: 72,
		length: 9,
		height: 3.2,
		weight: 2500,
		number_skeletons: 8,
		number_teeth: 500,
		speed: 26,
		encephalization: 0.09,
		image: "dinobilder/d4_LAMBEOSAURUS.png",
	},

	{
		name: "Ichthyosaurus",
		group: "Swimmers",
		group_letter: "E",
		card_number: 1,
		random_fact: "An aquatic reptile known for its streamlined design.",
		number_eggs: 6,
		territorial_range: 150,
		iq: 2,
		years: 100,
		length: 4,
		height: 1.5,
		weight: 500,
		number_skeletons: 15,
		number_teeth: 80,
		speed: 40,
		encephalization: 0.05,
		image: "dinobilder/e1_ichthyosaurus.png",
	},
	{
		name: "Mosasaurus",
		group: "Swimmers",
		group_letter: "E",
		card_number: 2,
		random_fact: "A sea serpent equipped with fearsome jaws.",
		number_eggs: 4,
		territorial_range: 200,
		iq: 3,
		years: 68,
		length: 15,
		height: 6,
		weight: 3000,
		number_skeletons: 10,
		number_teeth: 100,
		speed: 50,
		encephalization: 0.07,
		image: "dinobilder/e2_MOSASAURUS.png",
	},
	{
		name: "Plesiosaurus",
		group: "Swimmers",
		group_letter: "E",
		card_number: 3,
		random_fact: "Shares a family resemblance with the Loch Ness legend.",
		number_eggs: 6,
		territorial_range: 180,
		iq: 2,
		years: 85,
		length: 6,
		height: 2.5,
		weight: 800,
		number_skeletons: 8,
		number_teeth: 60,
		speed: 30,
		encephalization: 0.06,
		image: "dinobilder/e3_plesiosaurus.png",
	},
	{
		name: "Nothosaurus",
		group: "Swimmers",
		group_letter: "E",
		card_number: 4,
		random_fact: "Mastered the art of sleek swimming.",
		number_eggs: 5,
		territorial_range: 120,
		iq: 2,
		years: 110,
		length: 4.5,
		height: 1.8,
		weight: 600,
		number_skeletons: 6,
		number_teeth: 40,
		speed: 25,
		encephalization: 0.05,
		image: "dinobilder/e4_nothosaurus.png",
	},
	{
		name: "Stegosaurus",
		group: "Armored Dinosaurs",
		group_letter: "F",
		card_number: 1,
		random_fact: "Famous for its bony plates and spiked tail.",
		number_eggs: 10,
		territorial_range: 300,
		iq: 2,
		years: 155,
		length: 9,
		height: 4,
		weight: 3500,
		number_skeletons: 20,
		number_teeth: 112,
		speed: 12,
		encephalization: 0.08,
		image: "dinobilder/f1_stegosaurus.png",
	},
	{
		name: "Ankylosaurus",
		group: "Armored Dinosaurs",
		group_letter: "F",
		card_number: 2,
		random_fact: "Possessed formidable armor and a tail club.",
		number_eggs: 8,
		territorial_range: 250,
		iq: 2,
		years: 68,
		length: 7,
		height: 2.5,
		weight: 3000,
		number_skeletons: 12,
		number_teeth: 64,
		speed: 10,
		encephalization: 0.07,
		image: "dinobilder/f2_ankylosaurus.png",
	},
	{
		name: "Sauropelta",
		group: "Armored Dinosaurs",
		group_letter: "F",
		card_number: 3,
		random_fact: "An armored dinosaur equipped with a bony shield.",
		number_eggs: 6,
		territorial_range: 200,
		iq: 2,
		years: 110,
		length: 6.5,
		height: 2.8,
		weight: 2000,
		number_skeletons: 8,
		number_teeth: 40,
		speed: 8,
		encephalization: 0.06,
		image: "dinobilder/f3_SAUROPELTA.png",
	},
	{
		name: "Kentrosaurus",
		group: "Armored Dinosaurs",
		group_letter: "F",
		card_number: 4,
		random_fact: "Showcased a back adorned with spikes.",
		number_eggs: 8,
		territorial_range: 180,
		iq: 2,
		years: 125,
		length: 5.5,
		height: 2.2,
		weight: 1500,
		number_skeletons: 10,
		number_teeth: 48,
		speed: 15,
		encephalization: 0.05,
		image: "dinobilder/f4_kentrosaurus.png",
	},
	{
		name: "Velociraptor",
		group: "Small Theropods",
		group_letter: "G",
		card_number: 1,
		random_fact: "A small yet intelligent and lethal predator.",
		number_eggs: 10,
		territorial_range: 50,
		iq: 50,
		years: 75,
		length: 2,
		height: 0.8,
		weight: 70,
		number_skeletons: 12,
		number_teeth: 80,
		speed: 40,
		encephalization: 0.4,
		image: "dinobilder/g1_VELOCIRAPTOR.png",
	},
	{
		name: "Gallimimus",
		group: "Small Theropods",
		group_letter: "G",
		card_number: 2,
		random_fact: "Renowned for its speed and bird-like features.",
		number_eggs: 12,
		territorial_range: 80,
		iq: 45,
		years: 70,
		length: 4,
		height: 2,
		weight: 200,
		number_skeletons: 8,
		number_teeth: 60,
		speed: 60,
		encephalization: 0.35,
		image: "dinobilder/g2_GALLIMIMUS.png",
	},
	{
		name: "Oviraptor",
		group: "Small Theropods",
		group_letter: "G",
		card_number: 3,
		random_fact: "Misnamed, as it likely didn't steal eggs.",
		number_eggs: 8,
		territorial_range: 40,
		iq: 40,
		years: 68,
		length: 2.5,
		height: 1,
		weight: 50,
		number_skeletons: 6,
		number_teeth: 40,
		speed: 30,
		encephalization: 0.3,
		image: "dinobilder/g3_OVIRAPTOR.png",
	},
	{
		name: "Dilophosaurus",
		group: "Small Theropods",
		group_letter: "G",
		card_number: 4,
		random_fact: "An early Jurassic marvel with twin crests.",
		number_eggs: 6,
		territorial_range: 60,
		iq: 35,
		years: 150,
		length: 6,
		height: 2,
		weight: 150,
		number_skeletons: 10,
		number_teeth: 50,
		speed: 35,
		encephalization: 0.28,
		image: "dinobilder/g4_DILOPHOSAURUS.png",
	},
	{
		name: "Triceratops",
		group: "Ceratopsians and Co.",
		group_letter: "H",
		card_number: 1,
		random_fact: "Boasted a three-horned face-off strategy.",
		number_eggs: 12,
		territorial_range: 200,
		iq: 4,
		years: 66,
		length: 8,
		height: 3.5,
		weight: 9000,
		number_skeletons: 15,
		number_teeth: 800,
		speed: 20,
		encephalization: 0.1,
		image: "dinobilder/h1_TRICERATOPS.png",
	},
	{
		name: "Styracosaurus",
		group: "Ceratopsians and Co.",
		group_letter: "H",
		card_number: 2,
		random_fact: "Distinguished by its nasal horn and head spikes.",
		number_eggs: 10,
		territorial_range: 180,
		iq: 3,
		years: 70,
		length: 5.5,
		height: 2.5,
		weight: 3000,
		number_skeletons: 10,
		number_teeth: 400,
		speed: 15,
		encephalization: 0.08,
		image: "dinobilder/h2_STYRACOSAURUS.png",
	},
	{
		name: "Pachycephalosaurus",
		group: "Ceratopsians and Co.",
		group_letter: "H",
		card_number: 3,
		random_fact: "Engaged in head-butting contests.",
		number_eggs: 8,
		territorial_range: 100,
		iq: 2,
		years: 68,
		length: 4,
		height: 2,
		weight: 1000,
		number_skeletons: 6,
		number_teeth: 60,
		speed: 25,
		encephalization: 0.06,
		image: "dinobilder/h3_PACHYCEPHALOSAURUS.png",
	},
	{
		name: "Protoceratops",
		group: "Ceratopsians and Co.",
		group_letter: "H",
		card_number: 4,
		random_fact: "A petite herbivore adorned with a frill.",
		number_eggs: 6,
		territorial_range: 80,
		iq: 2,
		years: 75,
		length: 2.5,
		height: 1.2,
		weight: 300,
		number_skeletons: 8,
		number_teeth: 100,
		speed: 10,
		encephalization: 0.05,
		image: "dinobilder/h4_protoceratops.png",
	},
];
