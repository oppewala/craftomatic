export const items = {
  171349: {
    name: 'Potion of Phantom Fire',
    category: 'consumables',
    subcategory: 'potion'
  },
  180732: {
    name: 'Rune Etched Vial',
    category: 'tradegoods',
    subcategory: 'other',
    vendorPurchasePrice: 10000
  },
  168589: {
    name: 'Marrowroot',
    category: 'tradegoods',
    subcategory: 'herb'
  },
  168586: {
    name: 'Rising Glory',
    category: 'tradegoods',
    subcategory: 'herb'
  },
  171285: {
    name: 'Shadowcore Oil',
    category: 'consumables',
    subcategory: 'itemenhancements'
  },
  169701: {
    name: 'Death Blossom',
    category: 'tradegoods',
    subcategory: 'herb'
  }
}

export const recipes = {
  171349: {
    profession: 'alchemy',
    produces: 1,
    components: [
      {
        id: 180732,
        quantity: 1
      },
      {
        id: 168589,
        quantity: 3
      },
      {
        id: 168586,
        quantity: 3
      }
    ]
  },
  171285: {
    profession: 'alchemy',
    produces: 1,
    components: [
      {
        id: 180732,
        quantity: 1,
      },
      {
        id: 169701,
        quantity: 2
      }
    ]
  }
}