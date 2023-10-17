const favoriteRecipe = {
    title: 'Oosterse wortelgazpacho',
    servings: 4,
    ingredients: [
      {
        name: 'wortels',
        amount: '550 gr'
      },
      {
        name: 'kokosmelk',
        amount: '250 ml'
      },
      {
        name: 'rode wijnazijn',
        amount: '2 el'
      },
      {
        name: 'rode currypasta',
        amount: '1 tl'
      },
      {
        name: 'limoengras (het witte stukje)',
        amount: '1 stengel'
      },
      {
        name: 'look',
        amount: '1 teentje'
      },
      {
        name: 'water',
        amount: '1 scheutje'
      },
      {
        name: 'peper - zout'
      }
    ]
  };
  function convertIngredientsToString (ingredients) {
    let tempStr = '';
    ingredients.forEach(function (ing, index) {
      tempStr += `${ing.amount ? ing.amount : '\t'}\t${ing.name}${index < ingredients.length - 1 ? '\n' : ''}`;
    });
    return tempStr;
  }
  const msg = `
  ============================================
  |             FAVORITE RECIPE              |
  ============================================
  Name:\t\t${favoriteRecipe.title}
  --------------------------------------------
  Servings:\t${favoriteRecipe.servings}
  --------------------------------------------
  Ingedients
  --------------------------------------------
  ${convertIngredientsToString(favoriteRecipe.ingredients)}
  ============================================
  `;
  console.log(msg);