fetch("./menu/menu.json")
    .then(res => res.json())
    .then(MenuData => { console.log(MenuData.meals[1].name) })
    .catch(err => console.log(Error(`error!! ${err}`)));
