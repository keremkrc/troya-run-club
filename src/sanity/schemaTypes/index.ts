import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { eventType } from './event'
import { productType } from './product'
import { galleryType } from './gallery'
import { aboutType } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, eventType, productType, galleryType, aboutType],
}
