import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Ana Sayfa Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık (Turuncu kısım için [metin] kullanabilirsiniz)',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Alt Başlık',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Arka Plan Fotoğrafı',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
