import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Mağaza Ürünleri',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ürün Adı',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Adresi (Slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
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
      title: 'Ürün Fotoğrafı',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    }),
    defineField({
      name: 'sizes',
      title: 'Bedenler',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'is3D',
      title: '3D Ürün Mü?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'modelUrl',
      title: '3D Model URL',
      type: 'url',
      hidden: ({parent}) => !parent?.is3D,
    }),
  ],
})
