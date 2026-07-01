import { type SchemaTypeDefinition } from 'sanity'
import { etkinlikType } from './etkinlik'
import { urunType } from './urun'
import { galeriType } from './galeri'
import { ayarlarType } from './ayarlar'
import { basariType } from './basari'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [etkinlikType, urunType, galeriType, ayarlarType, basariType],
}
