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
      zomatoid: '1231231',
      name: 'asdasd',
      coordx: 'a123123',
      coordy: '123123',
      schedule: 'asasd',
      address: 'asdasd',
      city: 'asdasd',
      country: 'asdas',
      numberofvisits: 1
    }
  },
  visits: {
    visitid1: {
      date: 'dd/mm/yy',
      user: 'userid1',
      place: 'placeid1',
      dishes: {
        dishid1: 1,
        dishid2: 4
      }
    }
  },
  dishes: {
    dishid1: {
      place: 'placeid1',
      picture: 'asdasd',
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
