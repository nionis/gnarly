import sequelizeModels from '../models/sequelize'

import {
  SequelizeTypeStorer,
} from '@xlnt/gnarly-core'

const makeSequelizeTypeStore = (
  Sequelize: any,
  sequelize: any,
) => {
  const {
    Events,
  } = sequelizeModels(Sequelize, sequelize)

  // the type store
  return {
    __setup: async () => {
      await Events.sync()
    },
    __setdown: async () => {
      await Events.drop()
    },
    store: SequelizeTypeStorer(Sequelize, {
      events: Events,
    }),
  }
}

export default makeSequelizeTypeStore
