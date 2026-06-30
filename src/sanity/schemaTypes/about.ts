import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'Hakkımızda Sayfası',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Ana Metin',
      type: 'text',
    }),
    defineField({
      name: 'values',
      title: 'Değerlerimiz (Tutku, Aile vb.)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Başlık', type: 'string'},
            {name: 'description', title: 'Açıklama', type: 'text'},
          ],
        },
      ],
    }),
  ],
})
