schema = {
  users: {
    userid1: {
      fbid: '123123121',
      name: 'nombre',
      lastname: 'asdasd',
      email: 'asdasdas',
      gender: 'asdas',
      visited: {
        placeid1: true,
        placeidN: true
      },
      notvisited: {
        placeidx: true
      },
      favorites: {
        placeid1: true,
        placeid2: true
      }
    }
  },
  places: {
    placeid1: {
			geometry:{
				location:{
					lat:-33.421495,
					lng:-70.609636
				}
			},
			viewport:{
				northeast:{
					lat:-33.4201990697085,
					lng:-70.6082397197085
				},
				southwest:{
					lat:-33.4228970302915,
					lng:-70.6109376802915
				}
			},
			icon:"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
			id:"07a94d731536aad34c743a68de5a6a515f35e029",
			name:"Niu Sushi",
			opening_hours:{
				open_now:true,
				weekday_text:[]
			},
			photos:[
				{ height:635,
					html_attributions:["<a href="">Niu Sushi</a>"],
					photo_reference:"CD0mLa4zg",
					width:960 }
			],
			place_id:"ChIJJb7VnmjPYpYR6_ECCHzE3yo",
			rating:4.3,
			reference:"CmRRAAACKBv0yg",
			scope:"GOOGLE",
			types:["restaurant","food","point_of_interest","establishment"],
			vicinity:"Avenida Providencia 2222, Santiago, Santiago"
		}
  },
  visits: {
    visitid1: {
      date: 'dd/mm/yy',
      userId: 'userid1',
      placeId: 'placeid1',
      dishes: [
				{ 
					dish: { dishId, placeId:...},
					value: 3
				}
			]
    }
  },
  dishes: {
    dishid1: {
			placeId: 'placeid1',
			name: 'asdasda',
      price: 123123
    }
  },
  notes: {
    noteid1: {
      date: 'dd/mm/yy',
      user: 'userid1',
      place: 'placeid1',
      text: 'asdasda',
      picture: 'asadsdas'
    }
  }
};
