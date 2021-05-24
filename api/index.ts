import * as sources from './v1/sources'
// import * as backup from './v1/backup'
// import * as logging from './v1/logging'
import * as users from './v1/users'
import * as carts from './v1/carts'
import * as orders from './v1/orders'
import * as members from './v1/members'
import * as apps from './v1/apps'
import * as vehicles from './v1/vehicles'
import * as collections from './v1/collections'
import * as categories from './v1/categories'
import * as products from './v1/products'
import * as menus from './v1/menus'
import * as blocks from './v1/blocks'
import * as pages from './v1/pages'
import * as faq from './v1/faq'
import * as licenses from './v1/licenses'
import * as plans from './v1/plans'
import * as videos from './v1/videos'
import * as guides from './v1/guides'
import * as playlists from './v1/playlists'

export let istrav = {
  event: {
    sources,
    // backup,
    // logging
  },
  tenant: {
    members,
    apps
  },
  app: {
    menus,
    blocks,
    pages,
    faq
  },
  account: {
    users,
    carts,
    orders
  },
  fleet: {
    vehicles
  },
  store: {
    collections,
    categories,
    products
  },
  subscription: {
    licenses,
    plans
  },
  channel: {
    videos,
    guides,
    playlists
  }
}