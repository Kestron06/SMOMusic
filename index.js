var phone=false;
var identify=document.getElementById("identifier");
function phoneCheck(){
	var pastBack=document.body.style.backgroundImage;
	phone=false;
	if(screen.width<1000){
		document.body.style.backgroundImage="url(Phone.jpg)";
		phone=true;
	}
	if(phone){
		document.body.style.backgroundImage="url(Phone.jpg)";
	}
	else{
		document.body.style.backgroundImage="url("+pastBack+")";
	}
}
phoneCheck();
var body=document.getElementsByTagName("body");
var mode="time";
var music=document.getElementById("music");
var pickFrom=[
	{
		start:{
			min:0,
			hour:0,
		},
		source:'https://docs.google.com/uc?export=download&id=1kAoAwSzGWLLkPKGSNiuAmDu7WyUE8e7_',
		name:'Lake Kingdom Underwater',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:0,
		},
		source:'https://docs.google.com/uc?export=download&id=1gOZSAuAbPxOLsdQsqcYUGG6mdTFiNLTd',
		name:'Another World',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:48,
			hour:0,
		},
		source:'https://docs.google.com/uc?export=download&id=1ZpKFNf4tGRROF_wKOJzkSOsomjsG3v3I',
		name:'Honeylune Ridge',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:1,
		},
		source:'https://docs.google.com/uc?export=download&id=1r8Vbt4E3UT1f9_KApr-MSyL47yfv7IxP',
		name:'Lake Kingdom 1',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:1,
		},
		source:'https://docs.google.com/uc?export=download&id=1dypm8SPPBdpoUteaHoHIEqlIz3c_9rDI',
		name:'Tostarena Night',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:2,
		},
		source:'https://docs.google.com/uc?export=download&id=1eSPDocxDFmQPfBuDjrytitFPJ0S2EOJ4',
		name:'Tostarena Night 8-Bit',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:2,
		},
		source:'https://docs.google.com/uc?export=download&id=1EodjK93iumyEZWhZlv4lpC8J6jO3BE7J',
		name:'Honeylune Ridge 8-Bit',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:2,
		},
		source:'https://docs.google.com/uc?export=download&id=1mGO_wuv2rqtdtlt7_7yXrtM--0hNxmIU',
		name:'Bubblaine Underwater',
		back:'SeasideKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:3,
		},
		source:'https://docs.google.com/uc?export=download&id=1_zGfA2vUeUIhCJTfLajuqpvEcSPVcoZ7',
		name:'Bubblaine 8-Bit',
		back:'SeasideKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:3,
		},
		source:'https://docs.google.com/uc?export=download&id=1mAqYFKGvKRVLAdhLgcR2q_xZH4CDK5Gt',
		name:'Ruins',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:4,
		},
		source:'https://docs.google.com/uc?export=download&id=1TUXDtNoM8zafH0GNwENs0v4qbvjpM466',
		name:'Ruins 8-Bit',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:4,
		},
		source:'https://docs.google.com/uc?export=download&id=1tuTBZF8bAdDHh3NYoOTAt8hkiHKi17q_',
		name:"Bowser's Castle 8-Bit",
		back:'BowsersKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:4,
		},
		source:'https://docs.google.com/uc?export=download&id=1dWH2dGY22uJe-e9ZaTtnqD3L-BwCJI6s',
		name:'Forgotten Isle 2 8-Bit',
		back:'LostKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:5,
		},
		source:'https://docs.google.com/uc?export=download&id=127BqvNqdxAj3aML9hf3EvC6Nabuf1L3x',
		name:'Subterranean 2',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:5,
		},
		source:'https://docs.google.com/uc?export=download&id=14qubTQDR1ePgN90j8U1UyzWur9eV6Bs5',
		name:'Lake Kingdom 8-Bit',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:6,
		},
		source:'https://docs.google.com/uc?export=download&id=1yZt0Re2si_R56461KHRhxeAeoI2INqdS',
		name:'Lullaby until the End',
		back:'DarkSide.jpg',
	},
	{
		start:{
			min:24,
			hour:6,
		},
		source:'https://docs.google.com/uc?export=download&id=1h1x5-_dYLmz-K_ITzvX7od9WAnlEV9Y3',
		name:'Bonneton',
		back:'CapKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:6,
		},
		source:'https://docs.google.com/uc?export=download&id=1SMSXMivdKwywFfWKiLyc9EwCpkBpF_lZ',
		name:'Dinosaur',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:7,
		},
		source:'https://docs.google.com/uc?export=download&id=1qRC2ynIP8rhltT2zExrmURUI4F67dtG3',
		name:'Climactic Duel',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:7,
		},
		source:'https://docs.google.com/uc?export=download&id=1EodjK93iumyEZWhZlv4lpC8J6jO3BE7J',
		name:'Honeylune Ridge 8-Bit',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:8,
		},
		source:'https://docs.google.com/uc?export=download&id=1Q2JR_VnNtwy7ebcWpItYGT06uAZhqces',
		name:'Caves',
		back:'CapKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:8,
		},
		source:'https://docs.google.com/uc?export=download&id=1iQ64H_L13J69JdWWCye4xBchT-0iki3B',
		name:"Peach's Castle",
		back:'MushroomKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:8,
		},
		source:'https://docs.google.com/uc?export=download&id=1sVTP1uMrDswxmJzhf8SuJnWxREAv3FSp',
		name:'Projection Room (Super Mario Bros.)',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:9,
		},
		source:'https://docs.google.com/uc?export=download&id=15Nufeq-wLqK7pHrCKGZxiJtkDVFswq88',
		name:'Steam Gardens 8-Bit',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:9,
		},
		source:'https://docs.google.com/uc?export=download&id=18zhFCSRcCSY5v4PM_x9FBod4T7wxa5ej',
		name:'Steam Gardens',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:10,
		},
		source:'https://docs.google.com/uc?export=download&id=1GrR4ywpBdGicRsdWaH5Iig0_yPOMjb2m',
		name:'New Donk City Day',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:10,
		},
		source:'https://docs.google.com/uc?export=download&id=1UF0oglX8668bn-LQYh-p4TsfO-c5SBLg',
		name:'Fossil Falls',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:10,
		},
		source:'https://docs.google.com/uc?export=download&id=1g4zuSIlFEkDYrUHYeVaGDZzzWaLfpMvL',
		name:'Fossil Falls 8-Bit',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:11,
		},
		source:'https://docs.google.com/uc?export=download&id=1Usw0vVTSW9Z7gqfjNIQWGclOTT1GaRWV',
		name:'To the Next Kingdom',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:11,
		},
		source:'https://docs.google.com/uc?export=download&id=11tT2Ph2v5AZG_XaYAHDfmUvy6ywX5-Pi',
		name:'Shiveria Town',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:12,
		},
		source:'https://docs.google.com/uc?export=download&id=1fEEnfR5rk1sRnGaMufFoCnQ5gMb7nfeI',
		name:'Shiveria Race',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:12,
		},
		source:'https://docs.google.com/uc?export=download&id=1ABXB-t29zgJ1uLkuHDpsONcx9k1GElP1',
		name:'Sherm',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:12,
		},
		source:'https://docs.google.com/uc?export=download&id=1Di8Ndgq8vQCn0QhX0De9EpALo-akdw_X',
		name:'Tostarena Ruins',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:13,
		},
		source:'https://docs.google.com/uc?export=download&id=1KpUB74tbvowqM96_B8X34k5KD0mLDbsJ',
		name:'Tostarena Town',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:13,
		},
		source:'https://docs.google.com/uc?export=download&id=1K9nUOA-m64v_cl4OTXqyZak6kWe7kQ1d',
		name:'Mount Volbono 8-Bit',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:14,
		},
		source:'https://docs.google.com/uc?export=download&id=1Px-J2219gSibH7Ohg-loU8hACwyMw4fi',
		name:'Volbono Town',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:14,
		},
		source:'https://docs.google.com/uc?export=download&id=16fleoY9W9A-9z7_0xbIXZKWzJGpt5UEV',
		name:'Mount Volbono',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:14,
		},
		source:'https://docs.google.com/uc?export=download&id=144zgsU9iOsJLFYHe_w0EBZuM5oefi-bv',
		name:'Tostarena 8-Bit',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:15,
		},
		source:'https://docs.google.com/uc?export=download&id=1cWAqDNPoEr2koePKCD6k_LwIUNHwHLzm',
		name:'Jaxi',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:15,
		},
		source:'https://docs.google.com/uc?export=download&id=1xX8Q5-LHAXur2Ig8JJZdDvMteOoVwc3N',
		name:'Run, Jump, Throw 2',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:0,
			hour:16,
		},
		source:'https://docs.google.com/uc?export=download&id=1B2NOKx40ZsqF3tTpzQdeDuxcQ5yxx9b9',
		name:'Run, Jump, Throw 8-Bit',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:24,
			hour:16,
		},
		source:'https://docs.google.com/uc?export=download&id=1KOIb0AkpmQzU1cE8sG_fqu3okfNqJ0xk',
		name:'Run, Jump, Throw',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:48,
			hour:16,
		},
		source:'https://docs.google.com/uc?export=download&id=1YMNd7D6WRpNc6NOFx2zEXldD7ZJzuiR9',
		name:'Race',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:12,
			hour:17,
		},
		source:'https://docs.google.com/uc?export=download&id=1m3kERBGnqb837MTGn6xw_Law_rxZzRuB',
		name:'Credits',
		back:'Heroic.jpg',
	},
	{
		start:{
			min:36,
			hour:17,
		},
		source:'https://docs.google.com/uc?export=download&id=16430duKNRo1Hk-sjRARnlZSRG0EKpCZA',
		name:'Captain Toad',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:0,
			hour:18,
		},
		source:'https://docs.google.com/uc?export=download&id=1tFRm-xzd4tphDB211jXLkC80xPKajhNZ',
		name:'New Donk City Festival (Jump Up, Superstar)',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:18,
		},
		source:'https://docs.google.com/uc?export=download&id=19zodf9YJ1Jae1wChta56RR_to0AKxHP6',
		name:'New Donk City Band',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:18,
		},
		source:'https://docs.google.com/uc?export=download&id=17hrRORs4zbbnZfOzpG_NGHJMaFBkz0y8',
		name:'RC Car',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:19,
		},
		source:'https://docs.google.com/uc?export=download&id=10pBWTmBW6vnYCUAVvEr2uZYWxFan0wX6',
		name:'Shop',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:19,
		},
		source:'https://docs.google.com/uc?export=download&id=1xPakBMKfSxXK7MfuUapVof6xl-XBon-G',
		name:'New Donk City Cafe',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:20,
		},
		source:'https://docs.google.com/uc?export=download&id=10X1_54kwPaIkiCeZMXCx9Fpy2hffvLkz',
		name:'Wedding Hall',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:20,
		},
		source:'https://docs.google.com/uc?export=download&id=1Zh9gyf0LLqRXFK_2VNpTVcmYORmKTlRj',
		name:'Projection Room Underground (Super Mario Bros. Underground)',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:20,
		},
		source:'https://docs.google.com/uc?export=download&id=1YV26YHg_QiGkURuoy28UuY6lUqDTJonH',
		name:'Subterranean',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:12,
			hour:21,
		},
		source:'https://docs.google.com/uc?export=download&id=11_SOFzWCtUeX8TmwdAb6QrSbYrSb7vIS',
		name:'Ice',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:21,
		},
		source:'https://docs.google.com/uc?export=download&id=127BqvNqdxAj3aML9hf3EvC6Nabuf1L3x',
		name:'Subterranean 2',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:22,
		},
		source:'https://docs.google.com/uc?export=download&id=1OBUmiXvTKsxHZjKriExEEcA_Fx3lFJCx',
		name:'Lake Kingdom 2',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:22,
		},
		source:'https://docs.google.com/uc?export=download&id=14qubTQDR1ePgN90j8U1UyzWur9eV6Bs5',
		name:'Lake Kingdom 8-Bit',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:22,
		},
		source:'https://docs.google.com/uc?export=download&id=1IqmXHxv0wGKb7735nfHgzPy7BHKGIHF3',
		name:'Forgotten Isle 2',
		back:'LostKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:23,
		},
		source:'https://docs.google.com/uc?export=download&id=1RHy2ZgIV9ogDWdODmXdb_ETphxPdgN5T',
		name:"Bowser's Castle",
		back:'BowsersKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:23,
		},
		source:'https://docs.google.com/uc?export=download&id=1ObwDR2xSb0kcyIR_TaZM2H1HPq24PK2G',
		name:'Bubblaine',
		back:'SeasideKingdom.jpg',
	},
];
var creepers=[
	'https://docs.google.com/uc?export=download&id=1nLJeEEsw5_expi5QRQ4GbpkZxPrb62p-',
	'https://docs.google.com/uc?export=download&id=1CsiakbR9dR4Wcuy2k9MHUC7YE3YY008V',
	'https://docs.google.com/uc?export=download&id=1zSr1vZIffovLuIncjb96Q6bFeG_CJgi2',
	'https://docs.google.com/uc?export=download&id=1hbHXF5g1Et2Ox7fwfyGUN3-K_viNiORq',
	'https://docs.google.com/uc?export=download&id=1BV9tAblTU2gQjX00y-f8llyuQjdxCmS3',
	'https://docs.google.com/uc?export=download&id=1nMRwtkkUHmUqoGTA-ceqAb5FR_NrIf9G',
	'https://docs.google.com/uc?export=download&id=14-5yfFSTHlBUO2NazRSYYj89-cG70cMu',
	'https://docs.google.com/uc?export=download&id=1NxcM_Io6fktbTstmGIvJaw2AySslew5O',
	'https://docs.google.com/uc?export=download&id=143bCZzJXqeEBJ1EMS-D4Gygm_8bjiP0O',
	'https://docs.google.com/uc?export=download&id=1bCsnf5y55VPcFZHnYom2Cjiy8gRizjIq',
	'https://docs.google.com/uc?export=download&id=1LLPQ5ISBXmduQu-d_IcpDvc71omXphVj',
	'https://docs.google.com/uc?export=download&id=1UVT5wilMX07mnKIO_Y8g85o4mieuTjKF',
	'https://docs.google.com/uc?export=download&id=19pEzUvuTP6P73gq9EuR7Lw0KFAQhLgqy',
	'https://docs.google.com/uc?export=download&id=1pVV6-EPijWIxFapiJODg0jJ3bwO36O4e',
	'https://docs.google.com/uc?export=download&id=1VlOzOf2-n3uJxUeeGalEDytMLSmFLiXo',
	'https://docs.google.com/uc?export=download&id=1UQyMzhSZcwPIDTCYw9vaYTDYSCy-TaiZ',
	'https://docs.google.com/uc?export=download&id=1ebg3DgXNuClrI1AEh_4fKI53aBebzeqG',
	'https://docs.google.com/uc?export=download&id=1jZ-NViKFSEn_0dfte3bSMzCOLxFW3EEf',
	'https://docs.google.com/uc?export=download&id=1kmWtj2m0s3fAzHTjc7uvml0ZU5TZL4qB',
];
var names=[
	'Forgotten Isle',
	'New Donk City Night',
	'New Donk City Night 2',
	'Honeylune Ridge Caves',
	'Honeylune Ridge Collapse',
	'Honeylune Ridge Collapse 8-Bit',
	'Broodals',
	'Madame Broode',
	'Knuckletoc',
	'Torkdrift',
	'Mechawiggler',
	'Mollosuque Lanceur',
	'Mollosuque Lanceur 8-Bit',
	'Cookatiel',
	'Dragon',
	'Bowser Battle',
	'Bowser Battle 2',
	'Mechabrood',
	"Bowser's Castle 2",
];
var mans=[
	{
		title:'Credits Theme',
		source:'https://docs.google.com/uc?export=download&id=1m3kERBGnqb837MTGn6xw_Law_rxZzRuB',
	},
	{
		title:'Bonneton',
		source:'https://docs.google.com/uc?export=download&id=1h1x5-_dYLmz-K_ITzvX7od9WAnlEV9Y3',
	},
	{
		title:'Fossil Falls',
		source:'https://docs.google.com/uc?export=download&id=1UF0oglX8668bn-LQYh-p4TsfO-c5SBLg',
	},
	{
		title:'Fossil Falls 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1g4zuSIlFEkDYrUHYeVaGDZzzWaLfpMvL',
	},
	{
		title:'Dinosaur',
		source:'https://docs.google.com/uc?export=download&id=1SMSXMivdKwywFfWKiLyc9EwCpkBpF_lZ',
	},
	{
		title:'Tostarena Ruins',
		source:'https://docs.google.com/uc?export=download&id=1Di8Ndgq8vQCn0QhX0De9EpALo-akdw_X',
	},
	{
		title:'Tostarena Ruins 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=144zgsU9iOsJLFYHe_w0EBZuM5oefi-bv',
	},
	{
		title:'Tostarena Night',
		source:'https://docs.google.com/uc?export=download&id=1dypm8SPPBdpoUteaHoHIEqlIz3c_9rDI',
	},
	{
		title:'Tostarena Night 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1eSPDocxDFmQPfBuDjrytitFPJ0S2EOJ4',
	},
	{
		title:'Tostarena Town',
		source:'https://docs.google.com/uc?export=download&id=1KpUB74tbvowqM96_B8X34k5KD0mLDbsJ',
	},
	{
		title:'Jaxi',
		source:'https://docs.google.com/uc?export=download&id=1cWAqDNPoEr2koePKCD6k_LwIUNHwHLzm',
	},
	{
		title:'Steam Gardens',
		source:'https://docs.google.com/uc?export=download&id=18zhFCSRcCSY5v4PM_x9FBod4T7wxa5ej',
	},
	{
		title:'Steam Gardens 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=15Nufeq-wLqK7pHrCKGZxiJtkDVFswq88',
	},
	{
		title:'Sherm',
		source:'https://docs.google.com/uc?export=download&id=1ABXB-t29zgJ1uLkuHDpsONcx9k1GElP1',
	},
	{
		title:'Lake Lamode 1',
		source:'https://docs.google.com/uc?export=download&id=1r8Vbt4E3UT1f9_KApr-MSyL47yfv7IxP',
	},
	{
		title:'Lake Lamode 1 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=14qubTQDR1ePgN90j8U1UyzWur9eV6Bs5',
	},
	{
		title:'Lake Lamode 2',
		source:'https://docs.google.com/uc?export=download&id=1OBUmiXvTKsxHZjKriExEEcA_Fx3lFJCx',
	},
	{
		title:'Lake Lamode Underwater',
		source:'https://docs.google.com/uc?export=download&id=1kAoAwSzGWLLkPKGSNiuAmDu7WyUE8e7_',
	},
	{
		title:'Forgotten Isle 1',
		source:'https://docs.google.com/uc?export=download&id=1nLJeEEsw5_expi5QRQ4GbpkZxPrb62p-',
	},
	{
		title:'Forgotten Isle 2',
		source:'https://docs.google.com/uc?export=download&id=1IqmXHxv0wGKb7735nfHgzPy7BHKGIHF3',
	},
	{
		title:'Forgotten Isle 2 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1dWH2dGY22uJe-e9ZaTtnqD3L-BwCJI6s',
	},
	{
		title:'New Donk City Night 1',
		source:'https://docs.google.com/uc?export=download&id=1CsiakbR9dR4Wcuy2k9MHUC7YE3YY008V',
	},
	{
		title:'New Donk City Night 2',
		source:'https://docs.google.com/uc?export=download&id=1zSr1vZIffovLuIncjb96Q6bFeG_CJgi2',
	},
	{
		title:'New Donk City Day',
		source:'https://docs.google.com/uc?export=download&id=1GrR4ywpBdGicRsdWaH5Iig0_yPOMjb2m',
	},
	{
		title:'New Donk City Cafe',
		source:'https://docs.google.com/uc?export=download&id=1xPakBMKfSxXK7MfuUapVof6xl-XBon-G',
	},
	{
		title:'Band Performance',
		source:'https://docs.google.com/uc?export=download&id=19zodf9YJ1Jae1wChta56RR_to0AKxHP6',
	},
	{
		title:'New Donk City Festival (Jump up, Superstar)',
		source:'https://docs.google.com/uc?export=download&id=1JrcHAp5NqPlmmMGTfmobCMO9iKrCj9xG',
	},
	{
		title:'New Donk City Festival (Jump up, Superstar) 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1tFRm-xzd4tphDB211jXLkC80xPKajhNZ',
	},
	{
		title:'Bubblaine',
		source:'https://docs.google.com/uc?export=download&id=1ObwDR2xSb0kcyIR_TaZM2H1HPq24PK2G',
	},
	{
		title:'Bubblaine 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1_zGfA2vUeUIhCJTfLajuqpvEcSPVcoZ7',
	},
	{
		title:'Bubblaine Underwater',
		source:'https://docs.google.com/uc?export=download&id=1mGO_wuv2rqtdtlt7_7yXrtM--0hNxmIU',
	},
	{
		title:'Shiveria Town',
		source:'https://docs.google.com/uc?export=download&id=11tT2Ph2v5AZG_XaYAHDfmUvy6ywX5-Pi',
	},
	{
		title:'Shiveria Race Course',
		source:'https://docs.google.com/uc?export=download&id=1fEEnfR5rk1sRnGaMufFoCnQ5gMb7nfeI',
	},
	{
		title:'Mount Volbono',
		source:'https://docs.google.com/uc?export=download&id=16fleoY9W9A-9z7_0xbIXZKWzJGpt5UEV',
	},
	{
		title:'Mount Volbono 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1K9nUOA-m64v_cl4OTXqyZak6kWe7kQ1d',
	},
	{
		title:'Mount Volbono Town',
		source:'https://docs.google.com/uc?export=download&id=1Px-J2219gSibH7Ohg-loU8hACwyMw4fi',
	},
	{
		title:"Bowser's Castle 1",
		source:'https://docs.google.com/uc?export=download&id=1RHy2ZgIV9ogDWdODmXdb_ETphxPdgN5T',
	},
	{
		title:"Bowser's Castle 1 8-Bit",
		source:'https://docs.google.com/uc?export=download&id=1tuTBZF8bAdDHh3NYoOTAt8hkiHKi17q_',
	},
	{
		title:"Bowser's Castle 2",
		source:'https://docs.google.com/uc?export=download&id=1kmWtj2m0s3fAzHTjc7uvml0ZU5TZL4qB',
	},
	{
		title:'Honeylune Ridge',
		source:'https://docs.google.com/uc?export=download&id=1ZpKFNf4tGRROF_wKOJzkSOsomjsG3v3I',
	},
	{
		title:'Honeylune Ridge 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1EodjK93iumyEZWhZlv4lpC8J6jO3BE7J',
	},
	{
		title:'Honeylune Ridge Caves',
		source:'https://docs.google.com/uc?export=download&id=1hbHXF5g1Et2Ox7fwfyGUN3-K_viNiORq',
	},
	{
		title:'Wedding Hall',
		source:'https://docs.google.com/uc?export=download&id=10X1_54kwPaIkiCeZMXCx9Fpy2hffvLkz',
	},
	{
		title:'Honeylune Ridge Collapse',
		source:'https://docs.google.com/uc?export=download&id=1BV9tAblTU2gQjX00y-f8llyuQjdxCmS3',
	},
	{
		title:'Honeylune Ridge Collapse 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1nMRwtkkUHmUqoGTA-ceqAb5FR_NrIf9G',
	},
	{
		title:'Honeylune Ridge Escape (Break Free)',
		source:'https://docs.google.com/uc?export=download&id=1k_n00rMWuy5LzbM9jlc_pnTczAc4nnFR',
	},
	{
		title:"Peach's Castle",
		source:'https://docs.google.com/uc?export=download&id=1iQ64H_L13J69JdWWCye4xBchT-0iki3B',
	},
	{
		title:'Broodals',
		source:'https://docs.google.com/uc?export=download&id=14-5yfFSTHlBUO2NazRSYYj89-cG70cMu',
	},
	{
		title:'Madame Broode',
		source:'https://docs.google.com/uc?export=download&id=1NxcM_Io6fktbTstmGIvJaw2AySslew5O',
	},
	{
		title:'Knuckletoc',
		source:'https://docs.google.com/uc?export=download&id=143bCZzJXqeEBJ1EMS-D4Gygm_8bjiP0O',
	},
	{
		title:'Torkdrift',
		source:'https://docs.google.com/uc?export=download&id=1bCsnf5y55VPcFZHnYom2Cjiy8gRizjIq',
	},
	{
		title:'Mechawiggler',
		source:'https://docs.google.com/uc?export=download&id=1LLPQ5ISBXmduQu-d_IcpDvc71omXphVj',
	},
	{
		title:'Mollosuque Lanceur',
		source:'https://docs.google.com/uc?export=download&id=1UVT5wilMX07mnKIO_Y8g85o4mieuTjKF',
	},
	{
		title:'Mollosuque Lanceur 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=19pEzUvuTP6P73gq9EuR7Lw0KFAQhLgqy',
	},
	{
		title:'Cookatiel',
		source:'https://docs.google.com/uc?export=download&id=1pVV6-EPijWIxFapiJODg0jJ3bwO36O4e',
	},
	{
		title:'Dragon',
		source:'https://docs.google.com/uc?export=download&id=1VlOzOf2-n3uJxUeeGalEDytMLSmFLiXo',
	},
	{
		title:'Robobrood',
		source:'https://docs.google.com/uc?export=download&id=1jZ-NViKFSEn_0dfte3bSMzCOLxFW3EEf',
	},
	{
		title:'Bowser 1',
		source:'https://docs.google.com/uc?export=download&id=1UQyMzhSZcwPIDTCYw9vaYTDYSCy-TaiZ',
	},
	{
		title:'Bowser 2',
		source:'https://docs.google.com/uc?export=download&id=1ebg3DgXNuClrI1AEh_4fKI53aBebzeqG',
	},
	{
		title:'Run, Jump, Throw! 1',
		source:'https://docs.google.com/uc?export=download&id=1KOIb0AkpmQzU1cE8sG_fqu3okfNqJ0xk',
	},
	{
		title:'Run, Jump, Throw! 2',
		source:'https://docs.google.com/uc?export=download&id=1xX8Q5-LHAXur2Ig8JJZdDvMteOoVwc3N',
	},
	{
		title:'Run, Jump, Throw! 2 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1B2NOKx40ZsqF3tTpzQdeDuxcQ5yxx9b9',
	},
	{
		title:'Subterranean 1',
		source:'https://docs.google.com/uc?export=download&id=1YV26YHg_QiGkURuoy28UuY6lUqDTJonH',
	},
	{
		title:'Subterranean 2',
		source:'https://docs.google.com/uc?export=download&id=127BqvNqdxAj3aML9hf3EvC6Nabuf1L3x',
	},
	{
		title:'Caves',
		source:'https://docs.google.com/uc?export=download&id=1Q2JR_VnNtwy7ebcWpItYGT06uAZhqces',
	},
	{
		title:'Ice',
		source:'https://docs.google.com/uc?export=download&id=11_SOFzWCtUeX8TmwdAb6QrSbYrSb7vIS',
	},
	{
		title:'Another World',
		source:'https://docs.google.com/uc?export=download&id=1gOZSAuAbPxOLsdQsqcYUGG6mdTFiNLTd',
	},
	{
		title:'Ruins',
		source:'https://docs.google.com/uc?export=download&id=1mAqYFKGvKRVLAdhLgcR2q_xZH4CDK5Gt',
	},
	{
		title:'Ruins 8-Bit',
		source:'https://docs.google.com/uc?export=download&id=1TUXDtNoM8zafH0GNwENs0v4qbvjpM466',
	},
	{
		title:'Projection Room',
		source:'https://docs.google.com/uc?export=download&id=1sVTP1uMrDswxmJzhf8SuJnWxREAv3FSp',
	},
	{
		title:'Projection Room Underground',
		source:'https://docs.google.com/uc?export=download&id=1Zh9gyf0LLqRXFK_2VNpTVcmYORmKTlRj',
	},
	{
		title:'Above the Clouds',
		source:'https://docs.google.com/uc?export=download&id=1ttShKfcELheDpSubzU1_6NFnxBxw9gXL',
	},
	{
		title:'Captain Toad',
		source:'https://docs.google.com/uc?export=download&id=16430duKNRo1Hk-sjRARnlZSRG0EKpCZA',
	},
	{
		title:'To the Next Kingdom',
		source:'https://docs.google.com/uc?export=download&id=1Usw0vVTSW9Z7gqfjNIQWGclOTT1GaRWV',
	},
	{
		title:'Shop',
		source:'https://docs.google.com/uc?export=download&id=10pBWTmBW6vnYCUAVvEr2uZYWxFan0wX6',
	},
	{
		title:'Race',
		source:'https://docs.google.com/uc?export=download&id=1YMNd7D6WRpNc6NOFx2zEXldD7ZJzuiR9',
	},
	{
		title:'RC Car',
		source:'https://docs.google.com/uc?export=download&id=17hrRORs4zbbnZfOzpG_NGHJMaFBkz0y8',
	},
	{
		title:'Slots',
		source:'https://docs.google.com/uc?export=download&id=1c-bwmLJJblY8Kot-ZuR-53VbOYI33qIF',
	},
	{
		title:'Climactic Duel',
		source:'https://docs.google.com/uc?export=download&id=1qRC2ynIP8rhltT2zExrmURUI4F67dtG3',
	},
];
var possibleSources=[];
var foundOne=false;
var PP = document.getElementById("playpause");
var star=true;
var delay=0;
var creep=0;
var dur=document.getElementById("duration");
var theThing=0;
function pickMusic(){
	var now=new Date();
	//getHours() getMinutes() getSeconds()
	for(var i=0;i<pickFrom.length;i++){
		if(pickFrom[i].start.hour===now.getHours()&&pickFrom[i].start.min===now.getMinutes()&&now.getSeconds()===0){
			music.src=pickFrom[i].source;
			music.play();
			foundOne=true;
			theThing=i;
			identify.innerHTML=pickFrom[i].name;
		}
		else if(pickFrom[i].start.hour<=now.getHours()&&!foundOne){
			if(pickFrom[i].start.hour===now.getHours()&&pickFrom[i].start.min<=now.getMinutes()){
				possibleSources.push(pickFrom[i].source);
				theThing=i;
			}
			else if(pickFrom[i].start.hour<now.getHours()){
				possibleSources.push(pickFrom[i].source);
				theThing=i;
			}
		}
	}
	if(!foundOne){
		music.src=possibleSources[possibleSources.length-1];
		music.play();
		foundOne=true;
		identify.innerHTML=pickFrom[theThing].name;
	}
	dur=document.getElementById("duration");
	var thingy=pickFrom[theThing].back;
	if(!phone){
		document.body.style.backgroundImage = "url(" + thingy + ")";
	}
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 24:00";
}
function playVoice(){
	delay++;
	if(delay>60*5){
		star=!star;
		if(star){
			music.src="https://docs.google.com/uc?export=download&id=1JrcHAp5NqPlmmMGTfmobCMO9iKrCj9xG";
			identify.innerHTML="New Donk City Festival (Jump Up, Superstar)";
		}
		else{
			music.src="https://docs.google.com/uc?export=download&id=11k_n00rMWuy5LzbM9jlc_pnTczAc4nnFR";
			identify.innerHTML="Honeylune Ridge Escape (Break Free)";
		}
		delay=0;
	}
	music.play();
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 5:00";
}
function creepy(){
	delay++;
	if(delay>60*5){
		creep++;
		delay=0;
		if(creep>creepers.length-1){
			creep=0;
		}
		music.src=creepers[creep];
		identify.innerHTML=names[creep];
		music.play();
	}
	
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 5:00";
}
var t;
function playBtn(){
	if(mode==="time"){
		t=window.setInterval(pickMusic,1000);
		foundOne=false;
		document.body.style.backgroundImage = "url(Odyssey.jpg)";
	}
	else if(mode==="voice"){
		t=window.setInterval(playVoice,1000);
		document.body.style.backgroundImage = "url(Festival.jpg)";
		identify.innerHTML="New Donk City Festival (Jump Up, Superstar)";
	}
	else if(mode==="ominous"){
		t=window.setInterval(creepy,1000);
		document.body.style.backgroundImage = "url(Creepy.jpg)";
		identify.innerHTML=names[0];
	}
	if(mode!=="manual"){
		music.play();
		PP.innerHTML="<input type = 'button' id = 'playpause' value='Stop' onclick='pauseBtn()'>";
	}
	phoneCheck();
}
function pauseBtn(){
	clearInterval(t);
	PP.innerHTML="<input type='button' id='playpause' value='Begin!' onclick='playBtn()'>";
	music.pause();
	dur.innerHTML="0:00 / 0:00";
	identify.innerHTML="Nothing";
}
document.getElementById("f1").style.filter = "brightness(50%)";
function vol1(){
	music.volume=1;
	document.getElementById("f1").style.filter = "brightness(50%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol2(){
	music.volume=0.9;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(50%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol3(){
	music.volume=0.8;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(50%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol4(){
	music.volume=0.7;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(50%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol5(){
	music.volume=0.6;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(50%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol6(){
	music.volume=0.5;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(50%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol7(){
	music.volume=0.4;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(50%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol8(){
	music.volume=0.3;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(50%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol9(){
	music.volume=0.2;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(50%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol10(){//shifted: voL!0
	music.volume=0.1;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(50%)";
}
var clearable=document.getElementById("clear");
function time(){
	if(!phone){
		document.body.style.backgroundImage = "url(Odyssey.jpg)";
	}
	document.getElementById("pic").src="clock.png";
	mode="time";
	pauseBtn();
	foundOne=false;
	clear.innerHTML="";
	identify.innerHTML="Nothing";
}
function voice(){
	if(!phone){
		document.body.style.backgroundImage = "url(Festival.jpg)";
	}
	document.getElementById("pic").src="crown.png";
	mode="voice";
	pauseBtn();
	music.src="https://docs.google.com/uc?export=download&id=1JrcHAp5NqPlmmMGTfmobCMO9iKrCj9xG";
	clear.innerHTML="";
	identify.innerHTML="Nothing";
}
function ominous(){
	if(!phone){
		document.body.style.backgroundImage = "url(Creepy.jpg)";
	}
	document.getElementById("pic").src="bow.png";
	mode="ominous";
	pauseBtn();
	music.src=creepers[Math.round(Math.random(0,creepers.length-1))];
	clear.innerHTML="";
	identify.innerHTML="Nothing";
}
function manual(){
	if(!phone){
		document.body.style.backgroundImage = "url(black.jpg)";
	}
	document.getElementById("pic").src="manual.png";
	mode="manual";
	pauseBtn();
	var creating=document.createElement("div");
	var addingTo=document.getElementById("clear");
	creating.setAttribute('id',"manner");
	addingTo.appendChild(creating);
	var addTo=document.getElementById("manner");
	for(var i=0;i<mans.length;i++){
		var titler=document.createElement("h1");
		titler.appendChild(document.createTextNode(mans[i].title));
		var adding=document.createElement("audio");
		adding.setAttribute('src',mans[i].source);
		adding.setAttribute('controls',true);
		addTo.appendChild(titler);
		addTo.appendChild(adding);
	}
	identify.innerHTML="Nothing";
}
console.log("Hey! Found a glitch or other problem you're troubleshooting? Message me why on Github @SMOMusic and I will try and resolve it!");
