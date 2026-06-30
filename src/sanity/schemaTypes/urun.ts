import {defineField, defineType} from 'sanity'

export const urunType = defineType({
  name: 'urun',
  title: 'Ürünler',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Fiyat',
      type: 'number',
    }),
    defineField({
      name: 'salePrice',
      title: 'İndirimli Fiyat',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    }),
    defineField({
      name: 'inStock',
      title: 'Stok Durumu',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
