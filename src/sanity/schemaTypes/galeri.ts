import {defineField, defineType} from 'sanity'

export const galeriType = defineType({
  name: 'galeri',
  title: 'Galeri',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tarih',
      type: 'date',
    }),
  ],
})
