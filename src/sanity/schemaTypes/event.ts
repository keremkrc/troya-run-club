import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Etkinlikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Etkinlik Adı',
      type: 'string',
    }),
    defineField({
      name: 'day',
      title: 'Gün',
      type: 'string',
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
      name: 'isNavyAccent',
      title: 'Lacivert Vurgu (Cuma vb.)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
