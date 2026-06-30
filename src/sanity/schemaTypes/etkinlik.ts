import {defineField, defineType} from 'sanity'

export const etkinlikType = defineType({
  name: 'etkinlik',
  title: 'Etkinlikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tarih',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Saat',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Yer',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'capacity',
      title: 'Kapasite',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Haftalık', value: 'haftalik'},
          {title: 'Özel', value: 'ozel'},
        ],
      },
    }),
  ],
})
